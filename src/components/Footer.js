import React from 'react'
import './style/footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer__content">
                <div className="container">
                    <div className="footer__social">
                        <img src="" alt="Facebook" className="footer__social--ico" />
                        <img src="" alt="instagran" className="footer__social--ico" />
                        <img src="" alt="twitter" className="footer__social--ico" />
                        <img src="" alt="linkedin" className="footer__social--ico" />
                    </div>
                    <div className="footer__logo">
                        <img src="" alt="footer logo Amautas" />
                    </div>
                    <div className="footer__about">
                        <ul>
                            <li>Legal</li>
                            <li>Terminos y condiciones</li>
                            <li>Politica    de cookies</li>
                            <li>Politica de privacidad</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__copy">
                <div className="container">
                    <div className="left">
                        <p>
                            Contacto
                        </p>
                    </div>
                    <div className="right">
                        <p>
                            Manifiesto 
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
