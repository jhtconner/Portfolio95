import React from 'react';

const Taskbar = ({ windows, activeWindowId, activateWindow, currentTime }) => {
    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="taskbar">
            <div className="start-button">
                <img src="/images/start.jpg" alt="Start" />
            </div>

            <div className="taskbar-divider"></div>

            <div className="taskbar-items">
                {windows.map(window => (
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
    );
};

export default Taskbar;