import React, { useState, useMemo } from 'react';

const BASE_PROJECTS = [
    { href: "https://github.com/jhtconner/PokeDexJS", label: "PokedexJS", icon: "/images/MasterBall.png" },
    { href: "https://github.com/jhtconner/DotPlotHackathon", label: "Medical Patient System", icon: "/images/doctor.png" },
    { href: "https://github.com/jhtconner/RWFM-72", label: "RWFM-72", icon: "/images/windturbine.png" },
    { href: "https://github.com/jhtconner/RWFM72-webapp", label: "RWFM-72 Web-App", icon: "/images/windmap.png" },
];

const ICON_W = 72;
const ICON_H = 80;
const PADDING = 10;
const MAX_X = 330;
const MAX_Y = 130;
const MAX_ATTEMPTS = 200;

function noCollision(x, y, placed) {
    return placed.every(p =>
        x + ICON_W + PADDING < p.x ||
        p.x + ICON_W + PADDING < x ||
        y + ICON_H + PADDING < p.y ||
        p.y + ICON_H + PADDING < y
    );
}

function scatterIcons(projects) {
    const placed = [];
    return projects.map(p => {
        let x, y, attempts = 0;
        do {
            x = Math.floor(Math.random() * MAX_X);
            y = Math.floor(Math.random() * MAX_Y);
            attempts++;
        } while (!noCollision(x, y, placed) && attempts < MAX_ATTEMPTS);
        placed.push({ x, y });
        return { ...p, x, y, rotate: Math.floor(Math.random() * 24) - 12 };
    });
}

const DesktopIcon = ({ href, label, icon, x, y, rotate }) => {
    const [selected, setSelected] = useState(false);

    return (
        <a href={href} target="_blank" rel="noopener noreferrer"
           onMouseDown={() => setSelected(true)}
           onMouseLeave={() => setSelected(false)}
           onBlur={() => setSelected(false)}
           style={{
               position: 'absolute', left: x, top: y,
               display: 'flex', flexDirection: 'column', alignItems: 'center',
               width: '72px', padding: '3px', textDecoration: 'none',
               cursor: 'default', userSelect: 'none', zIndex: selected ? 10 : 1,
               transform: `rotate(${rotate}deg)`,
           }}
        >
            <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3px' }}>
                <img src={icon} alt={label} draggable={false}
                     style={{
                         width: '32px', height: '32px', imageRendering: 'pixelated',
                         filter: selected ? 'brightness(0.5) sepia(1) hue-rotate(190deg) saturate(5)' : 'none',
                     }}
                />
            </div>
            <span style={{
                fontFamily: "'MS Sans Serif', Arial, sans-serif", fontSize: '11px',
                lineHeight: '1.3', textAlign: 'center', padding: '1px 2px',
                backgroundColor: selected ? '#000080' : 'transparent',
                color: selected ? '#ffffff' : '#000000',
                outline: selected ? '1px dotted #ffffff' : 'none',
                outlineOffset: '-1px', wordBreak: 'break-word', maxWidth: '72px', display: 'block',
            }}>
                {label}
            </span>
        </a>
    );
};

const RecycleBinWindow = () => {
    const projects = useMemo(() => scatterIcons(BASE_PROJECTS), []);

    return (
        <div style={{ fontFamily: "'MS Sans Serif', Arial, sans-serif", padding: '8px' }}>
            <h3 style={{ color: 'white', fontSize: '14px', fontWeight: 'bold', margin: '0 0 6px 0' }}>
                GitHub Recycle Bin
            </h3>
            <div style={{
                position: 'relative', width: '100%', minHeight: '210px',
                backgroundColor: '#ffffff', border: '2px inset #808080', overflow: 'hidden',
            }}>
                {projects.map((project) => (
                    <DesktopIcon key={project.label} {...project} />
                ))}
            </div>
        </div>
    );
};

export default RecycleBinWindow;