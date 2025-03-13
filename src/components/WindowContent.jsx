import React from 'react';
import WelcomeWindow from './windows/WelcomeWindow';
import ComputerWindow from './windows/ComputerWindow';
import NetworkWindow from './windows/NetworkWindow';
import RecycleBinWindow from './windows/RecycleBinWindow';
import DocumentsWindow from './windows/DocumentsWindow';
import InternetExplorerWindow from './windows/InternetExplorerWindow';

const WindowContent = ({ windowId, closeWindow }) => {
    switch (windowId) {
        case 'welcome':
            return <WelcomeWindow closeWindow={closeWindow} />;
        case 'my-computer':
            return <ComputerWindow />;
        case 'network':
            return <NetworkWindow />;
        case 'recycle-bin':
            return <RecycleBinWindow />;
        case 'my-documents':
            return <DocumentsWindow />;
        case 'internet-explorer':
            return <InternetExplorerWindow />;
        default:
            return <div>Window content not found</div>;
    }
};

export default WindowContent;