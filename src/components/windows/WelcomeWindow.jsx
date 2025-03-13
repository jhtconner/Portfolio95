import React from 'react';

const WelcomeWindow = ({ closeWindow }) => {
    return (
        <div className="dialog-content">
            <div className="dialog-image">
                <img src="/images/info.png" alt="Information" width="80" height="80" />
            </div>
            <div className="dialog-text">
                <h2>Welcome to Windows 95!</h2>
                <p>Did you know...</p>
                <br />
                <p>To open a program you can double click its icon on the desktop.</p>
                <div className="dialog-buttons">
                    <button className="dialog-button" onClick={() => closeWindow('welcome')}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeWindow;