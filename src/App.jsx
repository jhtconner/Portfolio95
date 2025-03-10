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
        { id: 'my-computer', label: 'My Computer', icon: '/images/PC.png' },
        { id: 'network', label: 'Network Neighborhood', icon: '/images/network.png' },
        { id: 'recycle-bin', label: 'Recycle Bin', icon: '/images/bin.png' },
        { id: 'my-documents', label: 'My Documents', icon: '/images/file.png' },
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
                                        <p>To open a program you just click the icon on the desktop {'>'} :) </p>
                                        <div className="dialog-buttons">
                                            <button className="dialog-button" onClick={() => closeWindow('welcome')}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {window.id === 'my-computer' && (
                                <div>
                                    <h3>John's Computer</h3>
                                    <p>This is where my work experience will be.</p>
                                </div>
                            )}

                            {window.id === 'network' && (
                                <div>
                                    <h3>Network Neighborhood</h3>
                                    <p>Embed linkedin maybe?</p>
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