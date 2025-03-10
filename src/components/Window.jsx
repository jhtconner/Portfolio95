import React, { useState, useRef, useEffect } from 'react';

const Window = ({
                    title,
                    children,
                    initialPosition = { x: 50, y: 50 },
                    initialSize = { width: 300, height: 200 },
                    onClose,
                    zIndex = 100,
                    icon  // Add this new prop
                }) => {
    const [position, setPosition] = useState(initialPosition);
    const [size, setSize] = useState(initialSize);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const windowRef = useRef(null);

    const handleMouseDown = (e) => {
        if (e.target.closest('.window-control')) return;

        setIsDragging(true);
        const rect = windowRef.current.getBoundingClientRect();
        setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;

        setPosition({
            x: Math.max(0, newX),
            y: Math.max(0, newY)
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            className="window"
            ref={windowRef}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size.width}px`,
                height: `${size.height}px`,
                zIndex
            }}
        >
            <div
                className="window-header"
                onMouseDown={handleMouseDown}
            >
                {icon && <img src={icon} alt="" className="window-icon" />}
                <div className="window-title">{title}</div>
                <div className="window-controls">
                    <div className="window-control" onClick={onClose}>✕</div>
                </div>
            </div>
            <div className="window-body">
                {children}
            </div>
        </div>
    );
};

export default Window;