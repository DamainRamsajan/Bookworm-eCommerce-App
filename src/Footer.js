import React from 'react';
import "./Footer.css"

function Footer() {
    return (
        <div className = "footer">
            <img src = "/images/bookworm.png" alt = ""/>
            <div className = "footer__contents" >
                <p>Privacy Policy</p>
                <p>Subscriber Agreement</p>
                <p>Cookies Policy</p>
                <p>UK & EU Privacy Rights</p>
                <p>Help</p>
                <p>Supported Devices</p>
                <p>About Us</p>
                <p>Interest Based Ads</p>
                <p>Manage Preferences</p>
            </div>
            <p>© 2021 Bookworm. No Rights Reserved. This is a demo!</p>
        </div>
    )
}

export default Footer
