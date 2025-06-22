import React, { useState, useEffect, useRef } from 'react';

const CommandPrompt = () => {
    const [input, setInput] = useState('');
    const [outputLines, setOutputLines] = useState([
        'Microsoft(R) Windows 95',
        '(C)Copyright Microsoft Corp 1981-1995.',
        '',
        'C:\\USERS\\JCONNER> Type "help" for available commands',
        '',
        'Available commands:',
        '  about       - Display information about me',
        '  education   - My educational background',
        '  skills      - My technical skills',
        '  projects    - All the cool projects made by me',
        '  contact     - My contact information',
        '  clear       - Clear the terminal window',
        '  exit        - Close this window (just x out)',
        ''
    ]);
    const inputRef = useRef(null);
    const outputRef = useRef(null);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            processCommand();
        }
    };

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [outputLines]);

    const processCommand = () => {
        const command = input.trim().toLowerCase();
        const newOutput = [...outputLines, `C:\\USERS\\JCONNER> ${input}`];

        if (command === 'help') {
            newOutput.push(
                '',
                'Available commands:',
                '  about       - Display information about me',
                '  education   - My educational background',
                '  skills      - My technical skills',
                '  projects    - All the cool projects made by me',
                '  contact     - My contact information',
                '  clear       - Clear the terminal window',
                '  exit        - Close this window (just x out)',
                ''
            );
        } else if (command === 'about') {
            newOutput.push(
                '\u00A0',
                'NAME: John Conner',
                'OCCUPATION: SWE Intern @ Compare the Market',
                'INTERESTS: Quant Finance, Machine Learning, and anything to do with coding.',
                'BIO: I enjoy solving problems whether they\'re old or new, and love telling computers how to beep and boop.',
                '\u00A0',
                'ᕕ( ᐛ )ᕗ ',

                '\u00A0'
            );
        } else if (command === 'education') {
            newOutput.push(
                '\u00A0',
                'EDUCATION:',
                '  • BSc Computer Science, Brunel University London (current)',
                '      - Specialization in Software Engineering',
                '      - Key Modules: DSA, Data & Information, Group project',
                '\u00A0',
                '  • OCR Level 3 CTEC in Computing, West Suffolk College - 2021/2023',
                '      - Grade: DDM (Distinction, Distinction, Merit',
                '\u00A0'
            );
        } else if (command === 'skills') {
            newOutput.push(
                '\u00A0',
                'TECHNICAL SKILLS:',
                '  • Languages: Java, Python, Javascript, C#, Typescript, SQL',
                '  • Frameworks: Django, Spring Boot, React.js',
                '  • Dev Tools: NeoVim, IntelliJ, Webstorm, Pycharm, Git ',
                '  • Software Tools: Trello, Teams, Slack.',
                '\u00A0'
            );
        } else if (command === 'projects') {
            newOutput.push(
                '\u00A0',
                'PROJECT EXPERIENCE:',
                '  • Windows 95 themed portfolio website (ReactJS)',
                '  • Mental Health resource/support platform (ReactJS + Spring Boot',
                '  • Breast Cancer patient dashboard (Javascript + Django)',
                '  • PokeDex website (Javascript))',
                '  • Python OS based scripts (Python)',
                '\u00A0',
                'Github repos can be found in the recycling application on the desktop :)',
                '\u00A0'
            );
        } else if (command === 'contact') {
            newOutput.push(
                '\u00A0',
                'CONTACT INFORMATION:',
                '  • Email: JHTConner@outlook.com',
                '  • GitHub: github.com/0x1kero',
                '  • LinkedIn: linkedin.com/in/jhtconner',
                '\u00A0'
            );
        } else if (command === 'clear') {
            setInput('');
            setOutputLines([
                'Microsoft(R) Windows 95',
                '(C)Copyright Microsoft Corp 1981-1995.',
                '\u00A0',
                'C:\\USERS\\JCONNER> Type "help" for available commands',
                '\u00A0'
            ]);
            return;
        } else if (command === 'exit') {
            newOutput.push(
                '\u00A0',
                'System cannot exit. This is just a simulation. ',
                'Please refresh the page to exit.',
                '\u00A0'
            );
        } else if (command === '') {
            newOutput.push('');
        } else {
            newOutput.push(
                '\u00A0',
                `'${command}' is not recognized as an internal or external command,`,
                'operable program or batch file.',
                'Type "help" for available commands.',
            );
        }

        setOutputLines(newOutput);
        setInput('');
    };


    return (
        <div className="Computer-Window" style={{
            position: 'absolute',
            backgroundColor: '#000',
            color: '#15f71c',
            fontFamily: 'Courier New, monospace',
            fontSize: '13px',
            height: '175%',
            width: '100%',
            margin: '-15px',
            padding: '17px',
            boxSizing: 'border-box',
            overflow: 'auto',

        }}>
            <div className="flex-1 overflow-auto" ref={outputRef} style={{minHeight: '250px'}}>
                {outputLines.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap">{line}</div>
                ))}
                <div className="flex">
                    <div>C:\USERS\JCONNER&gt; </div>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-black text-gray-300 outline-none border-none p-0 m-0 w-full"
                        style={{
                            caretColor: '#15f71c',
                            fontFamily: 'Courier New, monospace',
                            backgroundColor: 'transparent',
                            color: '#15f71c',
                            display: 'inline',
                            fontSize: 'inherit',
                            lineHeight: 'inherit',
                            boxSizing: 'border-box',
                            top: '0',
                            left: '0'
                        }}
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
};


export default CommandPrompt;