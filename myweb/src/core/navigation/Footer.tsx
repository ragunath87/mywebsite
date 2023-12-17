import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <>
            <footer>
                <div className="CopyInfo">&copy; CopyRight Reserved {currentYear} </div>
            </footer>
        </>
    );
}

export default Footer;