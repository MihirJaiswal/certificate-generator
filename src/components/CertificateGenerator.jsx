import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Draggable from 'react-draggable';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';

import Color from 'color'; // Ensure to install this library

export class CertificatePreview extends React.PureComponent {
  render() {
    const {
      name,
      color,
      font,
      fontSize,
      fontWeight,
      fontStyle,
      textDecoration,
      position,
      qr,
      qrPosition,
      qrSize,
      template,
      innerRef,
      handleStop
    } = this.props;

    // Convert color using Color library
    const convertedColor = Color(color).hex(); // Ensure color is in a supported format

    return (
      <div
        className="relative w-full h-auto p-4 bg-white border border-gray-300 rounded-lg"
        ref={innerRef} // Use ref for capturing screenshot
      >
        <img src={template} alt="template" className="w-full h-auto" />

        <Draggable
          position={position}
          onStop={(e, data) => handleStop('name', data)}
        >
          <h1
            className="absolute cursor-move whitespace-nowrap"
            style={{
              color: convertedColor,
              fontFamily: font,
              fontSize: `${fontSize}px`,
              fontWeight: fontWeight,
              fontStyle: fontStyle,
              textDecoration: textDecoration,
            }}
          >
            {name}
          </h1>
        </Draggable>

        {qr && (
          <Draggable
            position={qrPosition}
            onStop={(e, data) => handleStop('qr', data)}
          >
            <div className="absolute cursor-move">
              <QRCode value={qr} size={qrSize} />
            </div>
          </Draggable>
        )}
      </div>
    );
  }
}

function CertificateGenerator() {
  const [names, setNames] = useState('');
  const [generatedNames, setGeneratedNames] = useState([]);
  const [template, setTemplate] = useState(null);
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [qrPosition, setQrPosition] = useState({ x: 200, y: 200 });
  const [color, setColor] = useState('#000000');
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState(24);
  const [qrSize, setQrSize] = useState(100);
  const [fontWeight, setFontWeight] = useState('normal');
  const [fontStyle, setFontStyle] = useState('normal');
  const [textDecoration, setTextDecoration] = useState('none');
  const componentRefs = useRef([]);

  const handlePrint = useReactToPrint({
    content: () => componentRefs.current[0], // Print the first certificate
  });

  const handleDownloadAll = async () => {
    for (let i = 0; i < componentRefs.current.length; i++) {
      const ref = componentRefs.current[i];
      if (ref) {
        try {
          const dataUrl = await domtoimage.toPng(ref);
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = `certificate-${i + 1}.png`;
          link.click();
        } catch (error) {
          console.error('Error capturing certificate:', error);
        }
      }
    }
  };

  function handleUploadTemplate(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setTemplate(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleStop(type, data) {
    if (type === 'name') {
      setPosition({ x: data.x, y: data.y });
    } else if (type === 'qr') {
      setQrPosition({ x: data.x, y: data.y });
    }
  }

  function handleGenerateCertificates() {
    const nameList = names.split(',').map((name) => name.trim());
    setGeneratedNames(nameList);
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Certificates Preview */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 gap-6">
          {generatedNames.map((name, index) => (
            <div key={index} className="relative shadow-lg rounded-lg overflow-hidden">
              <CertificatePreview
                innerRef={(el) => (componentRefs.current[index] = el)}
                name={name}
                template={template}
                position={position}
                qrPosition={qrPosition}
                handleStop={handleStop}
                color={color}
                font={font}
                fontSize={fontSize}
                qrSize={qrSize}
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Action Bar */}
      <div className="w-1/4 bg-white p-6 shadow-md rounded-md ml-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Upload Template</label>
          <input type="file" accept="image/*" onChange={handleUploadTemplate} className="w-full p-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Enter Names (separated by commas)</label>
          <textarea
            rows="4"
            onChange={(e) => setNames(e.target.value)}
            placeholder="Enter names, e.g. John Doe, Jane Doe, ..."
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Font Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Font Family</label>
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Font Size</label>
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Font Weight</label>
          <select
            value={fontWeight}
            onChange={(e) => setFontWeight(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Text Decoration</label>
          <select
            value={textDecoration}
            onChange={(e) => setTextDecoration(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="none">None</option>
            <option value="underline">Underline</option>
          </select>
        </div>

        <div className="flex flex-col space-y-4">
          <button
            onClick={handleGenerateCertificates}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
          >
            Generate Certificates
          </button>
          <button
            onClick={handlePrint}
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
          >
            Print First
          </button>
          <button
            onClick={handleDownloadAll}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600"
          >
            Download All
          </button>
        </div>
      </div>
    </div>
  );
}

export default CertificateGenerator;
