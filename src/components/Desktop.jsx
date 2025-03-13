import React from 'react';

const Desktop = ({ desktopIcons, openWindow }) => {
    return (
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
        </div>
    );
};

export default Desktop;