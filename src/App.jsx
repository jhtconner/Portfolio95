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
        { id: 'my-computer', label: 'Johns Computer', icon: '/images/PC.png' },
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


                {windows.map(window => (
                    window.isOpen && (
                        <Window
                            key={window.id}
                            title={window.title}
                            onClose={() => closeWindow(window.id)}
                            zIndex={window.zIndex}
                            onClick={() => activateWindow(window.id)}
                        >
                            {window.id === 'welcome' && (
                                <div className="dialog-content">
                                    <div className="dialog-image">
                                        <img src="/images/info.png" alt="Information" width="32" height="32" />
                                    </div>
                                    <div className="dialog-text">
                                        <h2>Welcome to Windows 95 (John edition)</h2>
                                        <p>Did you know...</p>
                                        <p>To open a program you should double click its icon on the desktop {'>'} :) </p>
                                        <div className="dialog-buttons">
                                            <button className="dialog-button" onClick={() => closeWindow('welcome')}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {window.id === 'my-computer' && (
                                <div>
                                    <h3>John's Computer</h3>
                                    <br></br>
                                    <p>Hey i'm John! i'm a CS student and a full-stack developer with keen interests in Quant Finance, Machine Learning, and anything to do with coding.</p>
                                    <br></br>
                                    <p>I enjoy solving problems whether they're old and new, and love telling computers what to do.</p>
                                    <br></br>
                                    <p>This website was developed using ReactJS and my passion for Windows 95! (I wasn't born until 10 years later :p)</p>
                                </div>
                            )}


                            {window.id === 'network' && (
                                <div>
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
                                <div>
                                    <h3>Recycle Bin</h3>
                                    <p>Github projects (cause they're all trash).</p>
                                </div>
                            )}

                            {window.id === 'my-documents' && (
                                <div>
                                    <h3>My Documents</h3>
                                    <p>again maybe cv or something else</p>
                                </div>
                            )}

                            {window.id === 'internet-explorer' && (
                                <div>
                                    <h3>Internet Explorer</h3>
                                    <p>whatever thiss could be </p>
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