import React, { useState, useEffect } from 'react';


const Desktop = ({ openWindow }) => {

    const [selectedIcon, setSelectedIcon] = useState(null);


    const desktopIcons = [
        { id: 'my-computer', label: 'Johns Computer', icon: '/images/PC2.png', initialPosition: { x: 20, y: 20 } },
        { id: 'network', label: 'Network Neighborhood', icon: '/images/network.png', initialPosition: { x: 20, y: 100 } },
        { id: 'recycle-bin', label: 'Recycle Bin', icon: '/images/bin.png', initialPosition: { x: 20, y: 180 } },
        { id: 'my-documents', label: 'My Documents', icon: '/images/files.png', initialPosition: { x: 20, y: 260 } },
        { id: 'internet-explorer', label: 'Internet Explorer', icon: '/images/IE.png', initialPosition: { x: 20, y: 340 } }
    ];


    const handleDesktopClick = (e) => {

        if (e.target.classList.contains('desktop-background')) {
            setSelectedIcon(null);
        }
    };


    const handleIconSelect = (id) => {
        setSelectedIcon(id);
    };


    useEffect(() => {
        const desktopElement = document.querySelector('.desktop-background');
        if (desktopElement) {
            desktopElement.addEventListener('mousedown', handleDesktopClick);
        }

        return () => {
            if (desktopElement) {
                desktopElement.removeEventListener('mousedown', handleDesktopClick);
            }
        };
    }, []);

    return (
        <div className="desktop-background">
            {desktopIcons.map(icon => (
                <DesktopIcon
                    key={icon.id}
                    id={icon.id}
                    label={icon.label}
                    icon={icon.icon}
                    initialPosition={icon.initialPosition}
                    onDoubleClick={() => openWindow(icon.id, icon.label)}
                    onSelect={handleIconSelect}
                    isSelected={selectedIcon === icon.id}
                />
            ))}
        </div>
    );
};

export default Desktop;