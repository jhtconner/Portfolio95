import React, { useState, useEffect } from 'react';
import Window from './components/Window';
import './index.css';

function App() {
    const [windows, setWindows] = useState([
        { id: 'welcome', title: 'Welcome to Windows 95', isOpen: true, zIndex: 100 }
    ]);
    const [activeWindowId, setActiveWindowId] = useState('welcome');
    const [currentTime, setCurrentTime] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };




    const openWindow = (id, title) => {
        setWindows(prevWindows => {

            const existingWindowIndex = prevWindows.findIndex(w => w.id === id);

            if (existingWindowIndex >= 0) {

                const updatedWindows = [...prevWindows];
                updatedWindows[existingWindowIndex].isOpen = true;
                updatedWindows[existingWindowIndex].zIndex = Math.max(...prevWindows.map(w => w.zIndex)) + 1;
                return updatedWindows;
            } else {

                return [...prevWindows, {
                    id,
                    title,
                    isOpen: true,
                    zIndex: Math.max(...prevWindows.map(w => w.zIndex), 0) + 1
                }];
            }
        });
        setActiveWindowId(id);
    };


    const closeWindow = (id) => {
        setWindows(prevWindows =>
            prevWindows.map(window =>
                window.id === id
                    ? { ...window, isOpen: false }
                    : window
            )
        );


        if (activeWindowId === id) {
            const remainingWindows = windows.filter(w => w.id !== id && w.isOpen);
            if (remainingWindows.length > 0) {

                const highestWindow = remainingWindows.reduce((prev, current) =>
                    (prev.zIndex > current.zIndex) ? prev : current
                );
                setActiveWindowId(highestWindow.id);
            } else {
                setActiveWindowId(null);
            }
        }
    };


    const activateWindow = (id) => {
        setWindows(prevWindows => {
            const maxZIndex = Math.max(...prevWindows.map(w => w.zIndex));
            return prevWindows.map(window =>
                window.id === id
                    ? { ...window, zIndex: maxZIndex + 1 }
                    : window
            );
        });
        setActiveWindowId(id);
    };


    const desktopIcons = [
        { id: 'my-computer', label: 'Johns Computer', icon: '/images/PC2.png' },
        { id: 'network', label: 'Network Neighborhood', icon: '/images/network.png' },
        { id: 'recycle-bin', label: 'Recycle Bin', icon: '/images/bin.png' },
        { id: 'my-documents', label: 'Documents', icon: '/images/file.png' },
        { id: 'internet-explorer', label: 'Internet Explorer', icon: '/images/IE.png' }
    ];

    return (

        <div className="windows95">

            <div className="desktop">

                <div className="desktop-icons">
                    {desktopIcons.map(icon => (
                        <div
                            key={icon.id}
                            className="desktop-icon"
                            onDoubleClick={() => openWindow(icon.id, icon.label)}
                        >
                            <img src={icon.icon} alt={icon.label} />
                            <div className="desktop-icon-label">{icon.label}</div>
                        </div>
                    ))}
                </div>

                <div>
                    <audio src="/sound/StartUp.mp3" autoPlay></audio>
                </div>


                {windows.map(window => (
                    window.isOpen && (
                        <Window
                            key={window.id}
                            title={window.title}
                            onClose={() => closeWindow(window.id)}
                            zIndex={window.zIndex}
                            onClick={() => activateWindow(window.id)}
                            icon={desktopIcons.find(icon => icon.id === window.id)?.icon}
                        >
                            {window.id === 'welcome' && (
                                <div className="dialog-content">
                                    <div className="dialog-image">
                                        <img src="/images/info.png" alt="Information" width="80" height="80" />
                                    </div>
                                    <div className="dialog-text">
                                        <h2>Welcome to Windows 95 (John edition)</h2>
                                        <p>Did you know...</p>
                                        <br />
                                        <p>To open a program you can double click its icon on the desktop.</p>
                                        <div className="dialog-buttons">
                                            <button className="dialog-button" onClick={() => closeWindow('welcome')}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {window.id === 'my-computer' && (
                                <div className="computer-app" style={{backgroundColor: 'white', height: '110%', margin: '-10px', padding: '10px'}}>
                                    <h3>About me</h3>
                                    <br></br>
                                    <p>Hey i'm John! i'm a CS student and a full-stack developer with keen interests in Quant Finance, Machine Learning, and anything to do with coding.</p>
                                    <br></br>
                                    <p>I enjoy solving problems whether they're old and new, and love telling computers what to do.</p>
                                    <br></br>
                                    <p>This website was developed using ReactJS and my passion for Windows 95! (I wasn't born until 10 years later :p)</p>
                                </div>
                            )}


                            {window.id === 'network' && (
                                <div className="LinkedIn-app" style={{backgroundColor: 'white', height: '110%', margin: '-10px', padding: '10px'}}>
                                    <h3>Network with me on Linkedin!</h3>
                                    <br></br>
                                    <a
                                        href="https://www.linkedin.com/in/jhtconner/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="linkedin-button"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '8px 12px',
                                            backgroundColor: '#0077B5',
                                            color: 'white',
                                            borderRadius: '4px',
                                            textDecoration: 'none',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" style={{marginRight: '8px'}}>
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                        View LinkedIn Profile
                                    </a>
                                </div>
                            )}


                            {window.id === 'recycle-bin' && (
                                <div style={{ fontFamily: "'MS Sans Serif', 'Arial', sans-serif", padding: '8px' }}>
                                    <h3 style={{
                                        color: '#000',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        textShadow: 'none'
                                    }}>Check out my GitHub Projects!</h3>
                                    <br />


                                    <a
                                        href="https://github.com/0x1kero"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-button"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '4px 8px',
                                            backgroundColor: '#C0C0C0', // Classic Win95 gray
                                            color: '#000000',
                                            border: '2px outset #DFDFDF', // Outset border for 3D button effect
                                            borderRadius: '0', // Square corners
                                            textDecoration: 'none',
                                            fontWeight: 'normal',
                                            fontFamily: "'MS Sans Serif', Arial, sans-serif",
                                            marginRight: '10px',
                                            fontSize: '12px',
                                            boxShadow: 'none', // No shadow in Windows 95
                                            position: 'relative',
                                            marginBottom: '8px',
                                        }}
                                        onMouseDown={(e) => e.currentTarget.style.border = '2px inset #DFDFDF'} // Press effect
                                        onMouseUp={(e) => e.currentTarget.style.border = '2px outset #DFDFDF'} // Release effect
                                        onMouseLeave={(e) => e.currentTarget.style.border = '2px outset #DFDFDF'} // Reset effect
                                    >
                                        <img
                                            src="/favicon.png"
                                            style={{ width: '20px', height: '20px', marginRight: '4px' }}
                                        />
                                        This Website!
                                    </a>

                                    <br />
                                    <a
                                        href="https://github.com/0x1kero/PokeDexJS"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-button"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '4px 8px',
                                            backgroundColor: '#C0C0C0', // All buttons same gray in Win95
                                            color: '#000000',
                                            border: '2px outset #DFDFDF',
                                            borderRadius: '0',
                                            textDecoration: 'none',
                                            fontWeight: 'normal',
                                            fontFamily: "'MS Sans Serif', Arial, sans-serif",
                                            marginRight: '10px',
                                            fontSize: '12px',
                                            boxShadow: 'none',
                                            position: 'relative',
                                            marginBottom: '8px',
                                        }}
                                        onMouseDown={(e) => e.currentTarget.style.border = '2px inset #DFDFDF'}
                                        onMouseUp={(e) => e.currentTarget.style.border = '2px outset #DFDFDF'}
                                        onMouseLeave={(e) => e.currentTarget.style.border = '2px outset #DFDFDF'}
                                    >
                                        <img
                                            src="/images/MasterBall.png"
                                            alt="Pokéball"
                                            style={{ width: '20px', height: '20px', marginRight: '4px' }}
                                        />
                                        PokedexJS
                                    </a>

                                    <br />
                                    <a
                                        href="https://github.com/0x1kero/DotPlotHackathon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-button"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '4px 8px',
                                            backgroundColor: '#C0C0C0',
                                            color: '#000000',
                                            border: '2px outset #DFDFDF',
                                            borderRadius: '0',
                                            textDecoration: 'none',
                                            fontWeight: 'normal',
                                            fontFamily: "'MS Sans Serif', Arial, sans-serif",
                                            marginRight: '10px',
                                            fontSize: '12px',
                                            boxShadow: 'none',
                                            position: 'relative',
                                            marginBottom: '8px',
                                        }}
                                        onMouseDown={(e) => e.currentTarget.style.border = '2px inset #DFDFDF'}
                                        onMouseUp={(e) => e.currentTarget.style.border = '2px outset #DFDFDF'}
                                        onMouseLeave={(e) => e.currentTarget.style.border = '2px outset #DFDFDF'}
                                    >
                                        <img
                                            src="/images/doctor.png"
                                            alt="Doctor"
                                            style={{ width: '20px', height: '22px', marginRight: '4px' }}
                                        />
                                        Medical Patient System
                                    </a>
                                </div>
                            )}


                            {window.id === 'my-documents' && (
                                <div>
                                    <a
                                        href="https://github.com/0x1kero"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-button"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '4px 8px',
                                            backgroundColor: '#C0C0C0',
                                            color: '#000000',
                                            border: '2px outset #DFDFDF',
                                            borderRadius: '0',
                                            textDecoration: 'none',
                                            fontWeight: 'normal',
                                            fontFamily: "'MS Sans Serif', Arial, sans-serif",
                                            marginRight: '10px',
                                            fontSize: '12px',
                                            boxShadow: 'none',
                                            position: 'relative',
                                            marginBottom: '8px',
                                        }}
                                        onMouseDown={(e) => e.currentTarget.style.border = '2px inset #DFDFDF'}
                                        onMouseUp={(e) => e.currentTarget.style.border = '2px outset #DFDFDF'}
                                        onMouseLeave={(e) => e.currentTarget.style.border = '2px outset #DFDFDF'}
                                    >
                                        <img
                                            src="/images/cv.png"
                                            alt="CV"
                                            style={{ width: '37px', height: '37px', marginRight: '4px' }}
                                        />
                                        My CV
                                    </a>
                                </div>
                            )}

                            {window.id === 'internet-explorer' && (
                                <div className="google-container" style={{ fontFamily: "'Arial', sans-serif", padding: '10px', backgroundColor: 'white', height: '175%', margin: '-10px' }}>

                                    <div style={{ textAlign: 'center', marginBottom: '15px', marginTop: '10px' }}>
                                        <div style={{
                                            fontSize: '70px',
                                            fontWeight: 'bold',
                                            letterSpacing: '-5px',
                                            marginBottom: '5px'
                                        }}>
                                            <span style={{ color: 'black' }}>(N</span>
                                            <span style={{ color: 'black' }}>o</span>
                                            <span style={{ color: 'black' }}>t)</span>
                                            <span style={{ color: '#4285F4' }}>G</span>
                                            <span style={{ color: '#EA4335' }}>o</span>
                                            <span style={{ color: '#FBBC05' }}>o</span>
                                            <span style={{ color: '#4285F4' }}>g</span>
                                            <span style={{ color: '#34A853' }}>l</span>
                                            <span style={{ color: '#EA4335' }}>e</span>
                                        </div>
                                    </div>


                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: '20px'
                                    }}>
                                        <div style={{
                                            border: '1px solid #CCCCCC',
                                            width: '400px',
                                            padding: '3px',
                                            display: 'flex',
                                            backgroundColor: 'white',
                                            boxShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                                        }}>
                                            <input
                                                type="text"
                                                value="What is your current achievements?"
                                                readOnly
                                                style={{
                                                    flex: 1,
                                                    border: 'none',
                                                    fontSize: '13px',
                                                    outline: 'none'
                                                }}
                                            />
                                            <button style={{
                                                backgroundColor: '#EEEEEE',
                                                border: '1px solid #CCCCCC',
                                                padding: '2px 6px',
                                                fontSize: '11px',
                                                cursor: 'default'
                                            }}>
                                                Search
                                            </button>
                                        </div>
                                    </div>


                                    <div style={{ borderBottom: '1px solid #EEEEEE', paddingBottom: '10px', marginBottom: '15px', fontSize: '13px', color: '#666' }}>
                                        About 125,000 results (0.24 seconds)
                                    </div>


                                    <div className="search-results" style={{ maxWidth: '600px', margin: '0 auto' }}>

                                        <div style={{ marginBottom: '20px' }}>
                                            <a
                                                href="https://2024.nwerc.eu/"
                                                style={{ fontSize: '16px', color: '#1a0dab', fontWeight: 'normal', marginBottom: '2px', cursor: 'pointer' }}
                                            >
                                                Participation in NWERC 2024
                                            </a>
                                            <div style={{ fontSize: '13px', color: '#006621', marginBottom: '3px' }}>
                                                https://2024.nwerc.eu/
                                            </div>
                                            <div style={{ fontSize: '13px', color: '#545454', lineHeight: '1.4' }}>
                                                I was fortunate enough to participate in my second NWERC alongside the same two amazing teammates. We managed to achieve
                                                the highest finish in the history of our universities time of competing in the competition, and ate a lot of Dorito bits
                                                while brainstorming some insane algorithms.
                                            </div>
                                        </div>


                                        <div style={{ marginBottom: '20px' }}>
                                            <a
                                                href="https://ukiepc.info/2024/"
                                                style={{ fontSize: '16px', color: '#1a0dab', fontWeight: 'normal', marginBottom: '2px', cursor: 'pointer' }}
                                            >
                                                Winner of the Brunel Univeristy of London UKIEPC 2024
                                            </a>
                                            <div style={{ fontSize: '13px', color: '#006621', marginBottom: '3px' }}>
                                                https://ukiepc.info/2024/
                                            </div>
                                            <div style={{ fontSize: '13px', color: '#545454', lineHeight: '1.4' }}>
                                                Worked alongside two teammates to tackle complex programming problems under a heavy time pressure, successfully outsmarting
                                                years above and postgraduates for the second year in a row. Thank you to the Brunel CS department for the amazon gift cards! (I bought some IEMs B) )
                                            </div>
                                        </div>


                                        <div style={{ marginBottom: '20px' }}>
                                            <a
                                                href="https://www.techacademia.co.uk/"
                                                style={{ fontSize: '16px', color: '#1a0dab', fontWeight: 'normal', marginBottom: '2px', cursor: 'pointer' }}
                                            >
                                                Tech Academia x DotPlot accelerator programme hackathon
                                            </a>
                                            <div style={{ fontSize: '13px', color: '#006621', marginBottom: '3px' }}>
                                                https://www.techacademia.co.uk/
                                            </div>
                                            <div style={{ fontSize: '13px', color: '#545454', lineHeight: '1.4' }}>
                                                Selected for a high-speed, high-intensity Software & Data Engineering Accelerator Programme with TechAcademia
                                                and DotPlot. Led the full-stack development of a breast cancer patient dashboard, all while ensuring my code didn’t crash before
                                                the coffee wore off.
                                            </div>
                                        </div>


                                        <div style={{ marginBottom: '20px' }}>
                                            <a
                                                href="https://2023.nwerc.eu/"
                                                style={{ fontSize: '16px', color: '#1a0dab', fontWeight: 'normal', marginBottom: '2px', cursor: 'pointer' }}
                                            >
                                                Participation in NWERC 2023
                                            </a>
                                            <div style={{ fontSize: '13px', color: '#006621', marginBottom: '3px' }}>
                                                https://2023.nwerc.eu/
                                            </div>
                                            <div style={{ fontSize: '13px', color: '#545454', lineHeight: '1.4' }}>
                                                First time out of the country in 5 years, and a memory of what binary search is.
                                                Although we didn’t win, I learned so much from the experience and it really solidified
                                                my passion for competitive programming.
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: '20px' }}>
                                            <a
                                                href="https://ukiepc.info/2023/"
                                                style={{ fontSize: '16px', color: '#1a0dab', fontWeight: 'normal', marginBottom: '2px', cursor: 'pointer' }}
                                            >
                                                Winner of the Brunel Univeristy of London UKIEPC 2023
                                            </a>
                                            <div style={{ fontSize: '13px', color: '#006621', marginBottom: '3px' }}>
                                                https://ukiepc.info/2023/
                                            </div>
                                            <div style={{ fontSize: '13px', color: '#545454', lineHeight: '1.4' }}>
                                                Outwitted, outprogrammed, and outlasted both undergraduates and postgraduates to become the first 1st years to win since 2018.
                                                They said it couldn’t be done, so did we!
                                            </div>
                                        </div>

                                        {/* Pagination */}
                                        <div style={{
                                            textAlign: 'center',
                                            marginTop: '30px',
                                            marginBottom: '20px',
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '13px'
                                        }}>
                                            <span style={{ fontWeight: 'bold', color: '#1A0DAB' }}>G</span>
                                            <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>1</span>
                                            <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>2</span>
                                            <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>3</span>
                                            <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>4</span>
                                            <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>5</span>
                                            <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>Next &gt;</span>
                                        </div>

                                        <div style={{ fontSize: '11px', color: '#666', textAlign: 'center', marginTop: '40px', borderTop: '1px solid #EEEEEE', paddingTop: '10px' }}>
                                            ©1998 Google - Searching John's achievements since the beginning of his career
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Window>

                    )
                ))}
            </div>


            <div className="taskbar">
                <div className="start-button">
                    <img src="/images/start.jpg" alt="Start" />
                </div>

                <div className="taskbar-divider"></div>

                <div className="taskbar-items">
                    {windows.filter(window => window.isOpen).map(window => (
                        <div
                            key={window.id}
                            className={`task-item ${activeWindowId === window.id ? 'active' : ''}`}
                            onClick={() => activateWindow(window.id)}
                        >
                            <span>{window.title}</span>
                        </div>
                    ))}
                </div>

                <div className="taskbar-tray">
                    <div className="clock">{formatTime(currentTime)}</div>
                </div>
            </div>
        </div>
    );
}

export default App;