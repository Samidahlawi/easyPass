import React, {Component} from 'react';
import QRcode from './QR-code.png'
import {Link} from 'react-router-dom'

class Qrcode extends Component{
    render(){
        return(
            <div>
                    
                        <img className="qr-code" src={QRcode} alt="QRcode" />
                  
            </div>

        )
    }

}

export default Qrcode;