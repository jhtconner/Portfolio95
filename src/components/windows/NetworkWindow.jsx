import React from 'react';

const NetworkWindow = () => {
    const handleConnect = () => {
        window.open('https://www.linkedin.com/in/jhtconner/', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="LinkedIn-app" style={{
            backgroundColor: '#808080',
            height: '110%',
            margin: '-10px',
            padding: '10px',
            fontFamily: 'MS Sans Serif, sans-serif',
            fontSize: '11px',
            display: 'flex'
        }}>
            <div style={{
                width: '140px',
                flexShrink: 0,
                backgroundColor: '#008080',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img
                    src="/images/networkNeighborhood.png"
                    alt="Network Connection"
                    style={{
                        width: '125px',
                        height: '220px'
                    }}
                />
            </div>

            <div style={{
                flex: 1,
                padding: '15px 20px',
                backgroundColor: '#808080',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '200px'
            }}>
                <div>
                    <p style={{ margin: '0 0 15px 0', lineHeight: '1.3', color: 'white' }}>
                        You have successfully created a new Networking connection called:
                    </p>

                    <div style={{
                        border: '1px inset #c0c0c0',
                        padding: '4px 6px',
                        backgroundColor: '#d4d4d4',
                        marginBottom: '15px',
                        fontSize: '11px',
                    }}>
                        LinkedIn
                    </div>

                    <p style={{ margin: '0 0 10px 0', lineHeight: '1.3', color: 'white' }}>
                        Click Connect to have my LinkedIn pop up in a new tab. Looking forward to connecting! :)
                    </p>

                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '8px',
                    paddingTop: '15px'
                }}>
                    <button
                        onClick={handleConnect}
                        style={{
                            minWidth: '90px',
                            padding: '4px 8px',
                            fontSize: '11px',
                            backgroundColor: '#c0c0c0',
                            borderTop: '1px solid #ffffff',
                            borderLeft: '1px solid #ffffff',
                            borderRight: '1px solid #404040',
                            borderBottom: '1px solid #404040',
                            cursor: 'pointer',
                        }}
                    >
                        Connect
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NetworkWindow;