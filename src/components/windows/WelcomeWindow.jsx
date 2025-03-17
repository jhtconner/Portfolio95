import React from 'react';

const WelcomeWindow = ({ closeWindow }) => {
    return (
        <div className="dialog-content">
            <div className="dialog-image">
                <img src="/images/info.png" alt="Information" width="80" height="80" />
            </div>
            <div className="dialog-text" style={{color:'#FFF5EE'}}>
                <h2>Welcome to Windows 95!</h2>
                <p>Did you know...</p>
                <br />
                <p>To open a program you can double click its icon on the desktop.</p>
                <br />
                <p>You can also make windows larger by dragging them from the bottom right corner!</p>
                <br/>
                <br/>
                <p>＼(＾O＾)／ Welcome to the Future... in 1995.</p>
                <div className="dialog-buttons">
                    <button className="dialog-button" onClick={() => closeWindow('welcome')}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeWindow;