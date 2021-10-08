import React, { Component } from 'react'
import contactimg from "../img/rafs84-rafs-design.gif"
import cv from "../componenets/ElvinaTarverdiyevaCV.pdf"
export class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <img src={contactimg} alt="" />
                <div className="ikons">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/ela.tarverdiyeva" target="_blank">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ela_t_va/?hl=tr" target="_blank">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="tel:+994504338757">
                                <i className="fas fa-mobile-alt" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:elaeliyeva1206@gmail.com">
                                <i className="fas fa-envelope" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ElvinaTarverdiyeva" target="_blank">
                                <i className="fab fa-github-alt" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Ela71772608" target="_blank">
                                <i className="fab fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ela-t-va-558177185/" target="_blank">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </li>
                        <li>
                            <a href={cv} download>
                            <i class="fas fa-file-download"></i>
                            </a>
                        </li>
                    </ul>
                    <h5>Tel: <span>+994 50 433 87 57</span></h5>
                    <h5>Mail: <span>elaeliyeva1206@gmail.com</span></h5>
                </div>
            </div>

        )
    }
}

export default Contact
