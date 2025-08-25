import React from 'react';

const InternetExplorerWindow = ({}) => {
    return(
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
            overflow:'auto'
        }}>

            <div className="google-container" style={{ fontFamily: "'Arial', sans-serif", padding: '50px', backgroundColor: 'white', minHeight: '100%', boxSizing: 'border-box'}}>

                <div style={{ textAlign: 'center', marginBottom: '15px', marginTop: '10px' }}>
                    <div style={{
                        fontSize: '70px',
                        fontWeight: 'bold',
                        letterSpacing: '-5px',
                        marginBottom: '5px'
                    }}>
                        <span style={{ color: 'black' }}>(N</span>
                        <span style={{ color: 'black' }}>o</span>
                        <span style={{ color: 'black' }}>t)</span>
                        <span style={{ color: '#4285F4' }}>G</span>
                        <span style={{ color: '#EA4335' }}>o</span>
                        <span style={{ color: '#FBBC05' }}>o</span>
                        <span style={{ color: '#4285F4' }}>g</span>
                        <span style={{ color: '#34A853' }}>l</span>
                        <span style={{ color: '#EA4335' }}>e</span>
                    </div>
                </div>



                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '20px'
                }}>
                    <div style={{
                        border: '1px solid #CCCCCC',
                        width: '400px',
                        padding: '3px',
                        display: 'flex',
                        backgroundColor: 'white',
                        boxShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                    }}>
                        <input
                            type="text"
                            value="What are John's notable experiences/achievements?"
                            readOnly
                            style={{
                                flex: 1,
                                border: 'none',
                                fontSize: '13px',
                                outline: 'none'
                            }}
                        />
                        <button style={{
                            backgroundColor: '#EEEEEE',
                            border: '1px solid #CCCCCC',
                            padding: '2px 6px',
                            fontSize: '11px',
                            cursor: 'default'
                        }}>
                            Search
                        </button>
                    </div>
                </div>


                <div style={{ borderBottom: '1px solid #EEEEEE', paddingBottom: '10px', marginBottom: '15px', fontSize: '13px', color: '#666' }}>
                    About 125,000 results (0.24 seconds)
                </div>


                <div className="search-results" style={{ maxWidth: '600px', margin: '0 auto' }}>

                    <div style={{ marginBottom: '20px' }}>
                        <a
                            href="https://2024.nwerc.eu/"
                            style={{ fontSize: '16px', color: '#1a0dab', fontWeight: 'normal', marginBottom: '2px', cursor: 'pointer' }}
                        >
                            Participation in NWERC 2024
                        </a>
                        <div style={{ fontSize: '13px', color: '#006621', marginBottom: '3px' }}>
                            https://2024.nwerc.eu/
                        </div>
                        <div style={{ fontSize: '13px', color: '#545454', lineHeight: '1.4' }}>
                            I was fortunate enough to participate in my second NWERC alongside the same two amazing teammates. We managed to achieve
                            the highest finish in the history of our universities time of competing in the competition, and ate a lot of Dorito bits
                            while brainstorming some insane algorithms.
                        </div>
                    </div>


                    <div style={{ marginBottom: '20px' }}>
                        <a
                            href="https://ukiepc.info/2024/"
                            style={{ fontSize: '16px', color: '#1a0dab', fontWeight: 'normal', marginBottom: '2px', cursor: 'pointer' }}
                        >
                            Winner of the Brunel Univeristy of London UKIEPC 2024
                        </a>
                        <div style={{ fontSize: '13px', color: '#006621', marginBottom: '3px' }}>
                            https://ukiepc.info/2024/
                        </div>
                        <div style={{ fontSize: '13px', color: '#545454', lineHeight: '1.4' }}>
                            Worked alongside two teammates to tackle complex programming problems under a heavy time pressure, successfully outsmarting
                            years above and postgraduates for the second year in a row. Thank you to the Brunel CS department for the amazon gift cards! (I bought some IEMs B) )
                        </div>
                    </div>


                    <div style={{ marginBottom: '20px' }}>
                        <a
                            href="https://www.techacademia.co.uk/"
                            style={{ fontSize: '16px', color: '#1a0dab', fontWeight: 'normal', marginBottom: '2px', cursor: 'pointer' }}
                        >
                            Tech Academia x DotPlot accelerator programme hackathon participant
                        </a>
                        <div style={{ fontSize: '13px', color: '#006621', marginBottom: '3px' }}>
                            https://www.techacademia.co.uk/
                        </div>
                        <div style={{ fontSize: '13px', color: '#545454', lineHeight: '1.4' }}>
                            Selected for a high-speed, high-intensity Software & Data Engineering Accelerator Programme with TechAcademia
                            and DotPlot. Led the full-stack development of a breast cancer patient dashboard, all while ensuring my code didn’t crash before
                            the coffee wore off.
                        </div>
                    </div>


                    <div style={{ marginBottom: '20px' }}>
                        <a
                            href="https://2023.nwerc.eu/"
                            style={{ fontSize: '16px', color: '#1a0dab', fontWeight: 'normal', marginBottom: '2px', cursor: 'pointer' }}
                        >
                            Participation in NWERC 2023
                        </a>
                        <div style={{ fontSize: '13px', color: '#006621', marginBottom: '3px' }}>
                            https://2023.nwerc.eu/
                        </div>
                        <div style={{ fontSize: '13px', color: '#545454', lineHeight: '1.4' }}>
                            First time out of the country in 5 years, and a memory of what binary search is.
                            Although we didn’t win, I learned so much from the experience and it really solidified
                            my passion for competitive programming.
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <a
                            href="https://ukiepc.info/2023/"
                            style={{ fontSize: '16px', color: '#1a0dab', fontWeight: 'normal', marginBottom: '2px', cursor: 'pointer' }}
                        >
                            Winner of the Brunel Univeristy of London UKIEPC 2023
                        </a>
                        <div style={{ fontSize: '13px', color: '#006621', marginBottom: '3px' }}>
                            https://ukiepc.info/2023/
                        </div>
                        <div style={{ fontSize: '13px', color: '#545454', lineHeight: '1.4' }}>
                            Outwitted, outprogrammed, and outlasted both undergraduates and postgraduates to become the first 1st years to win since 2018.
                            Thank you April! ^_^
                        </div>
                    </div>


                    <div style={{
                        textAlign: 'center',
                        marginTop: '30px',
                        marginBottom: '20px',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '13px'
                    }}>
                        <span style={{ fontWeight: 'bold', color: '#1A0DAB' }}>G</span>
                        <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>1</span>
                        <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>2</span>
                        <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>3</span>
                        <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>4</span>
                        <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>5</span>
                        <span style={{ margin: '0 10px', color: '#1A0DAB', cursor: 'pointer' }}>Next &gt;</span>
                    </div>

                    <div style={{ fontSize: '11px', color: '#666', textAlign: 'center', marginTop: '40px', borderTop: '1px solid #EEEEEE', paddingTop: '10px' }}>
                        ©1998 Google
                    </div>
                </div>
            </div>
        </div>


    )};

export default InternetExplorerWindow;