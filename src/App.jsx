import React, { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import WindowManager from './components/WindowManager';
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
            <Desktop
                desktopIcons={desktopIcons}
                openWindow={openWindow}
            />

            <WindowManager
                windows={windows}
                desktopIcons={desktopIcons}
                activeWindowId={activeWindowId}
                closeWindow={closeWindow}
                activateWindow={activateWindow}
            />

            <Taskbar
                windows={windows.filter(window => window.isOpen)}
                activeWindowId={activeWindowId}
                activateWindow={activateWindow}
                currentTime={currentTime}
            />

            <div>
                <audio src="/sound/StartUp.mp3" autoPlay></audio>
            </div>
        </div>
    );
}

export default App;