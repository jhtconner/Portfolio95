import React from 'react';

const RecycleBinWindow = () => {
    return (
        <div style={{ fontFamily: "'MS Sans Serif', 'Arial', sans-serif", padding: '8px' }}>
            <h3 style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: 'bold',
                textShadow: 'none'
            }}>Check out my GitHub Projects!</h3>
            <br />

            <GitHubButton
                href="https://github.com/0x1kero"
                label="This Website!"
                icon="/favicon.png"
            />

            <br />
            <GitHubButton
                href="https://github.com/0x1kero/PokeDexJS"
                label="PokedexJS"
                icon="/images/MasterBall.png"
            />

            <br />
            <GitHubButton
                href="https://github.com/0x1kero/DotPlotHackathon"
                label="Medical Patient System"
                icon="/images/doctor.png"
            />
        </div>
    );
};

// github button
const GitHubButton = ({ href, label, icon }) => {
    return (
        <a
            href={href}
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
                src={icon}
                alt={label}
                style={{ width: '20px', height: '20px', marginRight: '4px' }}
            />
            {label}
        </a>
    );
};

export default RecycleBinWindow;
