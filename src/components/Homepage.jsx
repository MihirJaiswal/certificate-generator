import React, { useRef, useState } from 'react';
import './Homepage.css';
import { useReactToPrint } from 'react-to-print';
import logo from '../assets/cloudLogo.svg';
import QRCode from 'react-qr-code';
import Draggable from 'react-draggable';
import domtoimage from 'dom-to-image-more'; // Use the more stable version
import { saveAs } from 'file-saver';

export class ComponentToPrint extends React.PureComponent {
    render() {
        return (
            <div
                id="certificate" // Add the ID here for correct targeting
                style={{ position: 'relative', backgroundColor: this.props.backgroundColor }}
                className='flex items-center justify-center'
            >
                <img src={this.props.template} className='template' alt="template" />
                <Draggable
                    position={this.props.position}
                    onStop={(e, data) => this.props.handleStop('name', data)}
                >
                    <h1
                        className='name'
                        style={{
                            cursor: 'move',
                            position: 'absolute',
                            color: this.props.color,
                            fontFamily: this.props.font,
                            fontSize: `${this.props.fontSize}px`,
                            fontWeight: this.props.fontWeight,
                            fontStyle: this.props.fontStyle,
                            textDecoration: this.props.textDecoration,
                        }}
                    >
                        {this.props.name === '' ? '' : this.props.name}
                    </h1>
                </Draggable>
                {this.props.qr && (
                    <Draggable
                        position={this.props.qrPosition}
                        onStop={(e, data) => this.props.handleStop('qr', data)}
                    >
                        <div
                            style={{
                                cursor: 'move',
                                position: 'absolute',
                            }}
                        >
                            <QRCode
                                value={this.props.qr}
                                size={this.props.qrSize}
                            />
                        </div>
                    </Draggable>
                )}
            </div>
        );
    }
}

function Homepage() {
    const [name, setName] = useState('');
    const [qrCode, setQrcode] = useState('');
    const [template, setTemplate] = useState(null);
    const [input, setInput] = useState('');
    const [position, setPosition] = useState({ x: 10, y: 10 });
    const [qrPosition, setQrPosition] = useState({ x: 200, y: 200 });
    const [color, setColor] = useState('#000000');
    const [font, setFont] = useState('Arial');
    const [fontSize, setFontSize] = useState(24);
    const [qrSize, setQrSize] = useState(100);
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [fontWeight, setFontWeight] = useState('normal');
    const [fontStyle, setFontStyle] = useState('normal');
    const [textDecoration, setTextDecoration] = useState('none');
    const [undoStack, setUndoStack] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    const [preview, setPreview] = useState(false);
    const componentRef = useRef();

    // Function to handle image capture and download
    const handleDownloadAll = () => {
        const node = document.getElementById('certificate'); // Ensure the ID matches
        if (!node) {
            console.error('Node not found');
            return;
        }

        domtoimage.toPng(node)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'certificate.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error('Error capturing certificate:', error);
            });
    };

    function handleGenerateQrCode() {
        setQrcode(input);
    }

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

    function handleUndo() {
        if (undoStack.length > 0) {
            const lastState = undoStack.pop();
            setRedoStack([...redoStack, { name, qrCode, template, position, qrPosition, color, font, fontSize, qrSize, backgroundColor, fontWeight, fontStyle, textDecoration }]);
            setName(lastState.name);
            setQrcode(lastState.qrCode);
            setTemplate(lastState.template);
            setPosition(lastState.position);
            setQrPosition(lastState.qrPosition);
            setColor(lastState.color);
            setFont(lastState.font);
            setFontSize(lastState.fontSize);
            setQrSize(lastState.qrSize);
            setBackgroundColor(lastState.backgroundColor);
            setFontWeight(lastState.fontWeight);
            setFontStyle(lastState.fontStyle);
            setTextDecoration(lastState.textDecoration);
        }
    }

    function handleRedo() {
        if (redoStack.length > 0) {
            const nextState = redoStack.pop();
            setUndoStack([...undoStack, { name, qrCode, template, position, qrPosition, color, font, fontSize, qrSize, backgroundColor, fontWeight, fontStyle, textDecoration }]);
            setName(nextState.name);
            setQrcode(nextState.qrCode);
            setTemplate(nextState.template);
            setPosition(nextState.position);
            setQrPosition(nextState.qrPosition);
            setColor(nextState.color);
            setFont(nextState.font);
            setFontSize(nextState.fontSize);
            setQrSize(nextState.qrSize);
            setBackgroundColor(nextState.backgroundColor);
            setFontWeight(nextState.fontWeight);
            setFontStyle(nextState.fontStyle);
            setTextDecoration(nextState.textDecoration);
        }
    }

    function handleSaveSettings() {
        setUndoStack([...undoStack, { name, qrCode, template, position, qrPosition, color, font, fontSize, qrSize, backgroundColor, fontWeight, fontStyle, textDecoration }]);
        setRedoStack([]);
    }

    function handlePreview() {
        setPreview(!preview);
    }

    return (
        <div className="main">
            <div className="header">
                <div className="left">
                    <img src={logo} className='logo w-8' alt="" />
                </div>
            </div>
            <div className="maincontainer">
                <div className="middle">
                    {preview && (
                        <div className="preview">
                            <ComponentToPrint
                                ref={componentRef}
                                name={name}
                                template={template}
                                qr={qrCode}
                                position={position}
                                qrPosition={qrPosition}
                                handleStop={handleStop}
                                color={color}
                                font={font}
                                fontSize={fontSize}
                                qrSize={qrSize}
                                backgroundColor={backgroundColor}
                                fontWeight={fontWeight}
                                fontStyle={fontStyle}
                                textDecoration={textDecoration}
                            />
                        </div>
                    )}
                    {!preview && (
                        <ComponentToPrint
                            ref={componentRef}
                            name={name}
                            template={template}
                            qr={qrCode}
                            position={position}
                            qrPosition={qrPosition}
                            handleStop={handleStop}
                            color={color}
                            font={font}
                            fontSize={fontSize}
                            qrSize={qrSize}
                            backgroundColor={backgroundColor}
                            fontWeight={fontWeight}
                            fontStyle={fontStyle}
                            textDecoration={textDecoration}
                        />
                    )}
                </div>
                <div className="right bg-gray-950">
                    <div className="form px-4 py-4 md:px-6 md:py-6 shadow-lg bg-gray-950">
                        {/* Upload Template */}
                        <div className="upload-box mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">Upload Template</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleUploadTemplate}
                                className="bg-gray-700 text-white p-1 rounded w-full hover:bg-gray-600 transition"
                            />
                        </div>

                        {/* Name Input */}
                        <div className="input-box mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">Enter Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-gray-700 text-white p-1 rounded w-full hover:bg-gray-600 transition"
                            />
                        </div>

                        {/* QR Code Input */}
                        <div className="input-box mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">Enter QR Code Data</label>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="bg-gray-700 text-white p-1 rounded w-full hover:bg-gray-600 transition"
                            />
                            <button
                                onClick={handleGenerateQrCode}
                                className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 transition"
                            >
                                Generate QR Code
                            </button>
                        </div>

                        {/* Background Color */}
                        <div className="color-picker mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">Background Color</label>
                            <input
                                type="color"
                                value={backgroundColor}
                                onChange={(e) => setBackgroundColor(e.target.value)}
                                className="w-full"
                            />
                        </div>

                        {/* Font Settings */}
                        <div className="font-settings mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">Font Color</label>
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="w-full"
                            />
                            <label className="text-white font-medium text-md block mb-1 mt-2">Font Family</label>
                            <select
                                value={font}
                                onChange={(e) => setFont(e.target.value)}
                                className="bg-gray-700 text-white p-1 rounded w-full hover:bg-gray-600 transition"
                            >
                                <option value="Arial">Arial</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Courier New">Courier New</option>
                                {/* Add more fonts as needed */}
                            </select>
                            <label className="text-white font-medium text-md block mb-1 mt-2">Font Size</label>
                            <input
                                type="number"
                                value={fontSize}
                                onChange={(e) => setFontSize(Number(e.target.value))}
                                className="bg-gray-700 text-white p-1 rounded w-full hover:bg-gray-600 transition"
                            />
                            <label className="text-white font-medium text-md block mb-1 mt-2">Font Weight</label>
                            <select
                                value={fontWeight}
                                onChange={(e) => setFontWeight(e.target.value)}
                                className="bg-gray-700 text-white p-1 rounded w-full hover:bg-gray-600 transition"
                            >
                                <option value="normal">Normal</option>
                                <option value="bold">Bold</option>
                                <option value="bolder">Bolder</option>
                                {/* Add more font weights as needed */}
                            </select>
                            <label className="text-white font-medium text-md block mb-1 mt-2">Font Style</label>
                            <select
                                value={fontStyle}
                                onChange={(e) => setFontStyle(e.target.value)}
                                className="bg-gray-700 text-white p-1 rounded w-full hover:bg-gray-600 transition"
                            >
                                <option value="normal">Normal</option>
                                <option value="italic">Italic</option>
                                <option value="oblique">Oblique</option>
                                {/* Add more font styles as needed */}
                            </select>
                            <label className="text-white font-medium text-md block mb-1 mt-2">Text Decoration</label>
                            <select
                                value={textDecoration}
                                onChange={(e) => setTextDecoration(e.target.value)}
                                className="bg-gray-700 text-white p-1 rounded w-full hover:bg-gray-600 transition"
                            >
                                <option value="none">None</option>
                                <option value="underline">Underline</option>
                                <option value="line-through">Line-through</option>
                                {/* Add more text decorations as needed */}
                            </select>
                        </div>

                        {/* QR Code Size */}
                        <div className="qr-settings mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">QR Code Size</label>
                            <input
                                type="number"
                                value={qrSize}
                                onChange={(e) => setQrSize(Number(e.target.value))}
                                className="bg-gray-700 text-white p-1 rounded w-full hover:bg-gray-600 transition"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="action-buttons mt-4">
                            <button
                                onClick={handleSaveSettings}
                                className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
                            >
                                Save Settings
                            </button>
                            <button
                                onClick={handleUndo}
                                className="bg-yellow-500 text-white p-2 rounded ml-2 hover:bg-yellow-600 transition"
                            >
                                Undo
                            </button>
                            <button
                                onClick={handleRedo}
                                className="bg-yellow-600 text-white p-2 rounded ml-2 hover:bg-yellow-700 transition"
                            >
                                Redo
                            </button>
                            <button
                                onClick={handlePreview}
                                className="bg-purple-500 text-white p-2 rounded ml-2 hover:bg-purple-600 transition"
                            >
                                Preview
                            </button>
                            <button
                                onClick={handleDownloadAll}
                                className="bg-blue-500 text-white p-2 rounded ml-2 hover:bg-blue-600 transition"
                            >
                                Download All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
