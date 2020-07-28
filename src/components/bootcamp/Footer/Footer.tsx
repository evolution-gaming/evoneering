import React from "react";

import "./Footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-head">Got Questions?</div>
            <div className="footer-contact">Email us at <span ><a className="email" href="mailto:engineering@evolutiongaming.com">engineering@evolutiongaming.com</a></span></div>
            <p>2020</p>
        </div>
    );
}