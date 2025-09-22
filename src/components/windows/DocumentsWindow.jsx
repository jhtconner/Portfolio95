import React, { useState } from 'react';

const DocumentsWindow = () => {
    const [currentPath, setCurrentPath] = useState('C:\\My Documents\\');


    const fileSystem = {
        folders: [
            { name: 'Projects', icon: '/images/file.png' },
            { name: 'Resume', icon: '/images/file.png' }
        ],
        files: [
            { name: 'CV.doc', icon: '/images/cv.png', link: 'https://www.linkedin.com/in/jhtconner/' },
        ]
    };

    return (
        <div className="file-explorer" style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            fontFamily: "'MS Sans Serif', Arial, sans-serif"
        }}>

            <div className="menu-bar" style={{
                borderBottom: '1px solid #C0C0C0',
                padding: '2px 0'
            }}>
                <span style={{ marginLeft: '5px', fontSize: '12px' }}>File</span>
                <span style={{ marginLeft: '10px', fontSize: '12px' }}>Edit</span>
                <span style={{ marginLeft: '10px', fontSize: '12px' }}>View</span>
                <span style={{ marginLeft: '10px', fontSize: '12px' }}>Help</span>
            </div>


            <div className="toolbar" style={{
                display: 'flex',
                padding: '3px',
                borderBottom: '1px solid #C0C0C0',
                backgroundColor: '#C0C0C0'
            }}>
                <ToolbarButton label="Back" />
                <ToolbarButton label="Forward" />
                <ToolbarButton label="Up" />
                <div style={{ borderLeft: '1px solid #808080', margin: '2px 5px' }}></div>
                <ToolbarButton label="Cut" />
                <ToolbarButton label="Copy" />
                <ToolbarButton label="Paste" />
                <div style={{ borderLeft: '1px solid #808080', margin: '2px 5px' }}></div>
                <ToolbarButton label="Properties" />
            </div>


            <div className="address-bar" style={{
                display: 'flex',
                padding: '3px',
                alignItems: 'center',
                borderBottom: '1px solid #C0C0C0',
                backgroundColor: '#C0C0C0'
            }}>
                <span style={{ fontSize: '12px', marginRight: '5px' }}>Address:</span>
                <input
                    type="text"
                    value={currentPath}
                    readOnly
                    style={{
                        flex: 1,
                        border: '2px inset #fff',
                        fontSize: '12px',
                        padding: '1px 5px',
                        backgroundColor: 'white'
                    }}
                />
            </div>


            <div className="explorer-content" style={{
                display: 'flex',
                flex: 1,
                borderTop: '1px solid #fff'
            }}>

                <div className="folder-tree" style={{
                    width: '25%',
                    borderRight: '2px solid #C0C0C0',
                    padding: '5px',
                    backgroundColor: '#F0F0F0',
                    overflowY: 'auto'
                }}>
                    <div style={{
                        fontSize: '12px',
                        padding: '3px',
                        marginBottom: '3px',
                        fontWeight: 'bold'
                    }}>
                        <img
                            src="/images/OpenFile.png"
                            alt="Open Folder"
                            style={{ width: '32px', height: '32px', marginRight: '5px', verticalAlign: 'middle' }}
                        />
                        John's Computer
                    </div>
                    <div style={{ marginLeft: '18px' }}>
                        <div style={{
                            fontSize: '12px',
                            padding: '3px',
                            marginBottom: '3px'
                        }}>
                            <img
                                src="/images/file.png"
                                alt="Folder"
                                style={{ width: '32px', height: '32px', marginRight: '5px', verticalAlign: 'middle' }}
                            />
                            Local Disk (C:)
                        </div>
                        <div style={{ marginLeft: '18px' }}>
                            <div style={{
                                fontSize: '12px',
                                padding: '3px',
                                marginBottom: '3px',
                                backgroundColor: '#0A246A',
                                color: 'white'
                            }}>
                                <img
                                    src="/images/OpenFile.png"
                                    alt="Open Folder"
                                    style={{ width: '32px', height: '32px', marginRight: '5px', verticalAlign: 'middle' }}
                                />
                                My Documents
                            </div>
                        </div>
                    </div>
                </div>

                <div className="files-view" style={{
                    flex: 1,
                    padding: '5px',
                    backgroundColor: 'white',
                    overflowY: 'auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start'
                }}>
                    {fileSystem.folders.map((folder, index) => (
                        <div key={`folder-${index}`} className="file-item" style={{
                            width: '100px',
                            margin: '5px',
                            textAlign: 'center',
                            cursor: 'pointer'
                        }}>
                            <img
                                src={folder.icon}
                                alt={folder.name}
                                style={{ width: '64px', height: '64px' }}
                            />
                            <div style={{ fontSize: '12px', marginTop: '10px' }}>{folder.name}</div>
                        </div>
                    ))}

                    {fileSystem.files.map((file, index) => (
                        <a
                            key={`file-${index}`}
                            href={file.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="file-item"
                            style={{
                                width: '100px',
                                marginTop: '20px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                textDecoration: 'none',
                                color: 'black'
                            }}
                        >
                            <img
                                src={file.icon}
                                alt={file.name}
                                style={{ width: '35px', height: '35px' }}
                            />
                            <div style={{ fontSize: '12px', marginTop: '26px' }}>{file.name}</div>
                        </a>
                    ))}
                </div>
            </div>


            <div className="status-bar" style={{
                borderTop: '1px solid #C0C0C0',
                padding: '3px 5px',
                fontSize: '12px',
                backgroundColor: '#C0C0C0'
            }}>
                {fileSystem.folders.length} folder(s), {fileSystem.files.length} file(s)
            </div>
        </div>
    );
};


const ToolbarButton = ({ label }) => (
    <button style={{
        padding: '2px 5px',
        margin: '0 2px',
        backgroundColor: '#C0C0C0',
        border: '2px outset #DFDFDF',
        borderRadius: '0',
        fontSize: '12px',
        cursor: 'pointer'
    }}
            onMouseDown={(e) => e.currentTarget.style.border = '2px inset #DFDFDF'}
            onMouseUp={(e) => e.currentTarget.style.border = '2px outset #DFDFDF'}
            onMouseLeave={(e) => e.currentTarget.style.border = '2px outset #DFDFDF'}
    >
        {label}
    </button>
);

export default DocumentsWindow;