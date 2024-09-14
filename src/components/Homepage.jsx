import React, { useRef, useState } from 'react';
import "./Homepage.css";
import { useReactToPrint } from 'react-to-print';
import logo from "../assets/cloudLogo.svg";
import QRCode from 'react-qr-code';
import Draggable from 'react-draggable';

export class ComponentToPrint extends React.PureComponent {
    render() {
        return (
            <div style={{ position: 'relative', }} className='flex items-center justify-center'>
                <img src={this.props.template} className='template' alt="template" />

                {/* Draggable Name with Color, Font, Font Size, and Additional Styling */}
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

                {/* Conditionally Render Draggable QR Code */}
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
                                size={this.props.qrSize} // QR code size is dynamic
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
    const [qrSize, setQrSize] = useState(100); // QR code size state
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Background color state
    const [fontWeight, setFontWeight] = useState('normal'); // Font weight state
    const [fontStyle, setFontStyle] = useState('normal'); // Font style state
    const [textDecoration, setTextDecoration] = useState('none'); // Text decoration state
    const [undoStack, setUndoStack] = useState([]); // Undo stack state
    const [redoStack, setRedoStack] = useState([]); // Redo stack state
    const [preview, setPreview] = useState(false); // Preview mode state
    const componentRef = useRef();

    // Define the handlePrint function
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

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
                                qrSize={qrSize} // Pass QR code size
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
                            qrSize={qrSize} // Pass QR code size
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
                                placeholder="Enter your Name"
                                onChange={e => { setName(e.target.value); handleSaveSettings(); }}
                                className="bg-gray-700 text-white p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* QR Code Generator */}
                        <div className='input-box mt-2 mb-2'>
                            <label className="text-white font-medium text-md block mb-1">Enter GCSJ Link</label>
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                type="text"
                                placeholder='Enter your GCSJ link'
                                className="bg-gray-700 text-white p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                disabled={!input}
                                onClick={handleGenerateQrCode}
                                className={`mt-2 w-full py-2 text-white rounded transition ${
                                    input ? 'bg-blue-600 hover:bg-blue-800' : 'bg-gray-500 cursor-not-allowed'
                                }`}
                            >
                                Generate QR Code
                            </button>
                        </div>

                        {/* Font Picker */}
                        <div className="font-picker mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">Select Font</label>
                            <select
                                onChange={(e) => { setFont(e.target.value); handleSaveSettings(); }}
                                value={font}
                                className="bg-gray-700 text-white p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Arial">Arial</option>
                                <option value="Courier New">Courier New</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Verdana">Verdana</option>
                                <option value="Tahoma">Tahoma</option>
                                <option value="Trebuchet MS">Trebuchet MS</option>
                                <option value="Lucida Sans">Lucida Sans</option>
                                <option value="Roboto">Roboto</option>
                                <option value="Open Sans">Open Sans</option>
                                <option value="Lato">Lato</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Poppins">Poppins</option>
                                <option value="Raleway">Raleway</option>
                                <option value="Droid Sans">Droid Sans</option>
                                <option value="Ubuntu">Ubuntu</option>
                                <option value="Fira Sans">Fira Sans</option>
                                <option value="PT Sans">PT Sans</option>
                                <option value="Oswald">Oswald</option>
                                <option value="Playfair Display">Playfair Display</option>
                                <option value="Merriweather">Merriweather</option>
                                <option value="Quicksand">Quicksand</option>
                                <option value="Exo 2">Exo 2</option>
                                <option value="Nunito">Nunito</option>
                                <option value="Archivo">Archivo</option>
                                <option value="Cinzel">Cinzel</option>
                                <option value="Bebas Neue">Bebas Neue</option>
                            </select>
                        </div>

                        {/* Font Weight */}
                        <div className="font-weight mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">Font Weight</label>
                            <select
                                onChange={(e) => { setFontWeight(e.target.value); handleSaveSettings(); }}
                                value={fontWeight}
                                className="bg-gray-700 text-white p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="normal">Normal</option>
                                <option value="bold">Bold</option>
                                <option value="bolder">Bolder</option>
                                <option value="lighter">Lighter</option>
                            </select>
                        </div>

                        {/* Font Style */}
                        <div className="font-style mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">Font Style</label>
                            <select
                                onChange={(e) => { setFontStyle(e.target.value); handleSaveSettings(); }}
                                value={fontStyle}
                                className="bg-gray-700 text-white p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="normal">Normal</option>
                                <option value="italic">Italic</option>
                                <option value="oblique">Oblique</option>
                            </select>
                        </div>

                        {/* Text Decoration */}
                        <div className="text-decoration mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">Text Decoration</label>
                            <select
                                onChange={(e) => { setTextDecoration(e.target.value); handleSaveSettings(); }}
                                value={textDecoration}
                                className="bg-gray-700 text-white p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="none">None</option>
                                <option value="underline">Underline</option>
                                <option value="overline">Overline</option>
                                <option value="line-through">Line-through</option>
                            </select>
                        </div>

                        {/* Color Picker */}
                        <div className="color-picker mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">Select Text Color</label>
                            <input
                                type="color"
                                onChange={(e) => { setColor(e.target.value); handleSaveSettings(); }}
                                value={color}
                                className="w-full p-1 rounded bg-gray-700 border-none"
                            />
                        </div>
                        {/* Text Size Slider */}
                        <div className="text-size mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">Text Size: {fontSize}px</label>
                            <input
                                type="range"
                                min="10"
                                max="100"
                                value={fontSize}
                                onChange={(e) => { setFontSize(e.target.value); handleSaveSettings(); }}
                                className="w-full mt-1"
                            />
                        </div>
                        {/* QR Code Size Slider */}
                        <div className="qr-size mt-2 mb-2">
                            <label className="text-white font-medium text-md block mb-1">QR Code Size: {qrSize}px</label>
                            <input
                                type="range"
                                min="50"
                                max="200"
                                value={qrSize}
                                onChange={(e) => { setQrSize(e.target.value); handleSaveSettings(); }}
                                className="w-full mt-1"
                            />
                        </div>
                        {/* Undo/Redo Buttons */}
                        <div className="undo-redo mt-2 mb-2">
                            <button onClick={handleUndo} disabled={undoStack.length === 0} className="bg-gray-600 hover:bg-gray-800 w-full py-2 text-white rounded mt-2 mb-2">
                                Undo
                            </button>
                            <button onClick={handleRedo} disabled={redoStack.length === 0} className="bg-gray-600 hover:bg-gray-800 w-full py-2 text-white rounded mt-2 mb-2">
                                Redo
                            </button>
                        </div>

                        <div className='mb-2'>
                            {/* Download Certificate */}
                            <button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-800 w-full py-2 text-white rounded mt-4 mb-12">
                                Download Certificate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
