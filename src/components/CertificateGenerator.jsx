import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import QRCode from 'react-qr-code';
import Draggable from 'react-draggable';
import domtoimage from 'dom-to-image-more';
import Color from 'color';

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
        className="relative w-full h-auto p-4"
        ref={innerRef} // Use ref for capturing screenshot
      >
        <img src={template} alt="template" className="w-full h-auto" />

        <Draggable
          position={position}
          onStop={(e, data) => handleStop('name', data)}
          defaultClassName="no-border"
        >
          <h1
            className="absolute cursor-move whitespace-nowrap top-0"
            style={{
              color: convertedColor,
              fontFamily: font,
              fontSize: `${fontSize}px`,
              fontWeight: fontWeight,
              fontStyle: fontStyle,
              textDecoration: textDecoration,
              outline: 'none', // Remove outline
              boxShadow: 'none', 
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
            <div className="absolute cursor-move top-0">
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
  const [preview, setPreview] = useState(false);
  const componentRefs = useRef([]);
  const [input, setInput] = useState('');
  const [qrCode, setQrcode] = useState('');

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

  function handleGenerateQrCode() {
    setQrcode(input);
  }

  function handleGenerateCertificates() {
    const nameList = names.split(',').map((name) => name.trim());
    setGeneratedNames(nameList);
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
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
                qr={qrCode}
                disableDrag={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Action Bar */}
      <div className="w-full md:w-1/4 bg-gradient-to-b from-black via-gray-900 to-black p-6 shadow-md md:ml-4">
        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Upload Template</label>
          <input type="file" accept="image/*" onChange={handleUploadTemplate} className="w-full p-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Enter Names (separated by commas)</label>
          <textarea
            rows="4"
            onChange={(e) => setNames(e.target.value)}
            placeholder="Enter names, e.g. Mihir Jaiswal, Anshita Rathore, ..."
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Enter QR Code Data</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-gray-700 text-white p-2 rounded-md"
          />
          <button
            onClick={handleGenerateQrCode}
            className="w-full mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Generate QR Code
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Background Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-10 bg-gray-700 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Font Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-10 bg-gray-700 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Font Family</label>
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="w-full bg-gray-700 text-white p-2 rounded-md"
          >
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
            <option value="Roboto">Roboto</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Lato">Lato</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Poppins">Poppins</option>
            <option value="Raleway">Raleway</option>
            <option value="Playfair Display">Playfair Display</option>
            <option value="Merriweather">Merriweather</option>
            <option value="Nunito">Nunito</option>
            <option value="Ubuntu">Ubuntu</option>
            <option value="Oswald">Oswald</option>
            <option value="Dancing Script">Dancing Script</option>
            <option value="Pacifico">Pacifico</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Font Size</label>
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="w-full bg-gray-700 text-white p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">QR Code Size</label>
          <input
            type="number"
            value={qrSize}
            onChange={(e) => setQrSize(e.target.value)}
            className="w-full bg-gray-700 text-white p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Font Weight</label>
          <select
            value={fontWeight}
            onChange={(e) => setFontWeight(e.target.value)}
            className="w-full bg-gray-700 text-white p-2 rounded-md"
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="bolder">Bolder</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Font Style</label>
          <select
            value={fontStyle}
            onChange={(e) => setFontStyle(e.target.value)}
            className="w-full bg-gray-700 text-white p-2 rounded-md"
          >
            <option value="normal">Normal</option>
            <option value="italic">Italic</option>
            <option value="oblique">Oblique</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Text Decoration</label>
          <select
            value={textDecoration}
            onChange={(e) => setTextDecoration(e.target.value)}
            className="w-full bg-gray-700 text-white p-2 rounded-md"
          >
            <option value="none">None</option>
            <option value="underline">Underline</option>
            <option value="overline">Overline</option>
            <option value="line-through">Line-through</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Generate Certificates</label>
          <button
            onClick={handleGenerateCertificates}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Generate
          </button>
        </div>

        <div className="flex space-x-4 mb-8">
          <button
            onClick={handleDownloadAll}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Download All as PNG
          </button>
        </div>
      </div>
    </div>
  );
}

export default CertificateGenerator;
