import React, { useRef, useState } from 'react'
import "./Homepage.css"
import { useReactToPrint } from 'react-to-print';
import template4 from "../assets/Template4.jpeg"
import ReactToPrint from 'react-to-print';
import logo from "../assets/logo.png"


export class ComponentToPrint extends React.PureComponent {
    render() {
        // eslint-disable-next-line default-case
        switch(this.props.template){
         
          
           
            case "template4":{
                return (
                    <div style={{ position: 'relative', border: '1px solid gray'  }} id="template2">
                        <img src={template4} className='template'></img>
                            <h1 style={{ fontSize: '3rem', color: 'black',position: 'absolute', top:'9rem',left:'25px',wordBreak:'break-all' }}>{this.props.name === '' ? 'Name' : this.props.name}</h1>
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
    const [template,settemplate]=useState('template4');
    const componentRef = useRef();
    const [theme, setTheme] = useState("dark");
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const signout = () => {
        firebase.auth().signOut();
    }
    const toggleTheme =() => {
        if(theme == "dark") {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
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
                    <ComponentToPrint ref={componentRef} name={name} template={template}/>
                </div>
                <div className="right">
                    <div className="form">
                        <div className="input-box mt-4">
                            <span className="details text-center">Particpant Name</span>
                            <input type="text" placeholder="Enter your Name" onChange={e => { setname(e.target.value) }} />
                        </div>
                        {/* <button className="generate" onClick={handlePrint}>Generate  Certificate</button> */}
                        <ReactToPrint
                            trigger={() => <button className="generate" >Generate</button>}
                            content={() => componentRef.current}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage