import React, { useRef, useState } from 'react'
import "./Homepage.css"
import { useReactToPrint } from 'react-to-print';
import template4 from "../assets/Template4.png"
import ReactToPrint from 'react-to-print';
import logo from "../assets/logo.png"
import QRCode from 'react-qr-code'


export class ComponentToPrint extends React.PureComponent {
    render() {
        // eslint-disable-next-line default-case
        switch(this.props.template){
         
          
           
            case "template4":{
                return (
                    <div style={{ position: 'relative', border: '1px solid gray'  }} id="template2">
                        <img src={template4} className='template'></img>
                            <h1 className='name'>{this.props.name === '' ? 'Your Name' : this.props.name}</h1>
                            <QRCode
                                className='md:w-16 w-8 qrc'
                                value={this.props.qr === '' ? 'qrcode' : this.props.qr}
                                size={100}
                            />
                        </div>
                );
            }

            
        }
    }
}
const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-box">
                <button onClick={() => props.setpop(false)} >x</button>
                <h3 style={{fontWeight: '100'}}>Rules for Setup Printing Page</h3>
                <div className="content">
                    <li>Destination: Save as PDF</li>
                    <li>Pages: All</li>
                    <li>Layout: Landscape</li>
                </div>
                <h3 style={{fontWeight: '100', marginTop: '10px'}}>More Settings</h3>
                <div className="content">
                    <li>Paper Size: A4</li>
                    <li>Paper per Sheet:1</li>
                    <li>Margins: none</li>
                    <li>Scale: Custom 200</li>
                </div>
            </div>
        </div>
    ) : null;
}
function Homepage() {
    const [pop, setpop] = useState(false);
    const [name, setname] = useState('');
    const [qrCode, setQrcode] = useState('');
    const [template,settemplate]=useState('template4');
    const [input, setInput]=useState('');
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    
    function handleGenerateQrCode(){
        setQrcode(input)
    }

    return (
        <div className="main">
            <Popup trigger={pop} setpop={setpop} >
            </Popup>
            <div className="header">
                <div className="left">
                    <img src={logo} className='logo w-40' alt="" />
                    {/* <button id="toggler" onClick={()=>toggleTheme()}>{theme == 'light'?"Dark Theme":"Light Theme"}</button> */}
                </div>
            </div>
            <div className="maincontainer">
                
                <div className="middle">
                    <ComponentToPrint ref={componentRef} name={name} template={template} qr={qrCode}/>
                </div>
                <div className="right">
                    <div className="form border-gray-600 border px-5 py-2 md:p-4 bg-[#1C272B] md:bg-gray-900 z-90">
                        <div className="input-box"> 
                            <span className="details text-center">Particpant Details</span>
                            <input type="text" placeholder="Enter your Name" onChange={e => { setname(e.target.value) }} />
                        </div>
                        <div className='input-box mt-0'>
                            <input
                             
                            onChange={(e) => setInput(e.target.value)}
                             type="text" name='qr-code' placeholder='Enter your GCSJ link'/>
                            <button disabled={!input} onClick={handleGenerateQrCode} className="generate w-full inputqr bg-blue-600 hover:bg-blue-800">Generate QR Code</button>
                        </div>
                        <div className='qr'> <QRCode className='hidden' id="qrcode" value={qrCode} /> </div>
                        {/* <button className="generate" onClick={handlePrint}>Generate  Certificate</button> */}
                        <ReactToPrint
                            trigger={() => <button className="generate bg-blue-600 hover:bg-blue-800" >Download</button>}
                            content={() => componentRef.current}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage