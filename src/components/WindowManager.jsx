import React from 'react';
import Window from './Window';
import WindowContent from './WindowContent';

const WindowManager = ({ windows, desktopIcons, activeWindowId, closeWindow, activateWindow }) => {
    return (
        <>
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
                        <WindowContent
                            windowId={window.id}
                            closeWindow={closeWindow}
                        />
                    </Window>
                )
            ))}
        </>
    );
};

export default WindowManager;