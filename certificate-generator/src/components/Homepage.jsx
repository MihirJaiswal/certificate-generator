import React, { useRef, useState } from 'react';
import "./Homepage.css";
import { useReactToPrint } from 'react-to-print';
import ReactToPrint from 'react-to-print';
import logo from "../assets/logo.png";
import QRCode from 'react-qr-code';
import Draggable from 'react-draggable';

export class ComponentToPrint extends React.PureComponent {
    render() {
        return (
            <div style={{ position: 'relative', border: '1px solid gray', padding: '10px' }}>
                <img src={this.props.template} className='template' alt="template" />

                {/* Draggable Name with Color, Font, and Font Size */}
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
    const [pop, setpop] = useState(false);
    const [name, setname] = useState('');
    const [qrCode, setQrcode] = useState('');
    const [template, settemplate] = useState(null);
    const [input, setInput] = useState('');
    const [position, setPosition] = useState({ x: 10, y: 10 });
    const [qrPosition, setQrPosition] = useState({ x: 200, y: 200 });
    const [color, setColor] = useState('#000000');
    const [font, setFont] = useState('Arial');
    const [fontSize, setFontSize] = useState(24);
    const [qrSize, setQrSize] = useState(100); // QR code size state
    const componentRef = useRef();

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
            settemplate(reader.result);
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

    return (
        <div className="main">
            <div className="header">
                <div className="left">
                    <img src={logo} className='logo w-40' alt="" />
                </div>
            </div>
            <div className="maincontainer">
                <div className="middle">
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
                    />
                </div>
                <div className="right">
                    <div className="form border-gray-600 border px-6 py-6 md:px-10 md:py-8 bg-[#1C272B] md:bg-gray-900 rounded-md">
                        
                        {/* Upload Template */}
                        <div className="upload-box mt-4">
                            <label className="text-white block">Upload Template:</label>
                            <input type="file" accept="image/*" onChange={handleUploadTemplate} />
                        </div>

                        {/* Name Input */}
                        <div className="input-box mt-4">
                            <label className="details text-white">Enter Name:</label>
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                onChange={e => { setname(e.target.value) }}
                                className="input-field"
                            />
                        </div>

                        {/* QR Code Generator */}
                        <div className='input-box mt-4'>
                            <label className="details text-white">Enter GCSJ Link:</label>
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                type="text"
                                name='qr-code'
                                placeholder='Enter your GCSJ link'
                                className="input-field"
                            />
                            <button
                                disabled={!input}
                                onClick={handleGenerateQrCode}
                                className="generate w-full mt-2 bg-blue-600 hover:bg-blue-800 py-2 text-white rounded"
                            >
                                Generate QR Code
                            </button>
                        </div>

                        {/* Font Picker */}
                        <div className="font-picker mt-4">
                            <label className="text-white">Select Font:</label>
                            <select
                                onChange={(e) => setFont(e.target.value)}
                                value={font}
                                className="input-field"
                            >
                                <option value="Arial">Arial</option>
                                <option value="Courier New">Courier New</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Verdana">Verdana</option>
                            </select>
                        </div>

                        {/* Color Picker */}
                        <div className="color-picker mt-4">
                            <label className="text-white">Select Text Color:</label>
                            <input
                                type="color"
                                onChange={(e) => setColor(e.target.value)}
                                value={color}
                                className="input-field"
                            />
                        </div>

                        {/* Text Size Slider */}
                        <div className="text-size mt-4">
                            <label className="text-white">Text Size: {fontSize}px</label>
                            <input
                                type="range"
                                min="10"
                                max="100"
                                value={fontSize}
                                onChange={(e) => setFontSize(e.target.value)}
                                className="input-field-range"
                            />
                        </div>

                        {/* QR Code Size Slider */}
                        <div className="qr-size mt-4">
                            <label className="text-white">QR Code Size: {qrSize}px</label>
                            <input
                                type="range"
                                min="50"
                                max="200"
                                value={qrSize}
                                onChange={(e) => setQrSize(e.target.value)}
                                className="input-field-range"
                            />
                        </div>

                        <ReactToPrint
                            trigger={() => (
                                <button className="generate bg-blue-600 hover:bg-blue-800 w-full mt-4 py-2 text-white rounded">
                                    Download Certificate
                                </button>
                            )}
                            content={() => componentRef.current}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
