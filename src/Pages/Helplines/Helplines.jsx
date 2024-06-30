import React from 'react';

const Helplines = () => {
    return (
        <div>
            <header style={headerStyle}>
                <h1>Welcome to Bangladesh Helplines</h1>
            </header>
            <div style={containerStyle}>
                <section style={sectionStyle}>
                    <h2>Helpline Information</h2>
                    <p>If you need assistance during your stay in Bangladesh, here are some important helpline numbers:</p>
                    <ul style={ulStyle}>
                        <li style={liStyle}>Emergency Services: 999</li>
                        <li style={liStyle}>Tourist Police : +880 1713-398167 </li>
                        <li style={liStyle}>Fire Service and Civil Defense: 199</li>
                        <li style={liStyle}>Ambulance Service: +880 1990-110001</li>
                    </ul>
                </section>
            </div>
            <div style={containerStyle}>
                <section style={sectionStyle}>
                    <h2>Helpline Information</h2>
                    <p>If you need assistance during your stay in Bangladesh, here are some important websites:</p>
                    <ul style={ulStyle}>
                        <li style={liStyle}>Tourist Police : <a href="https://tourist.police.gov.bd/" target="_blank" rel="noopener noreferrer">www.tourist.police.gov.bd</a> </li>
                        <li style={liStyle}>Fire Service and Civil Defense: <a href="https://fireservice.gov.bd/" target="_blank" rel="noopener noreferrer">www.fireservice.gov.bd</a></li>
                        <li style={liStyle}>Local Police Stations: <a href="http://www.police.gov.bd" target="_blank" rel="noopener noreferrer">www.police.gov.bd</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center'
};

const containerStyle = {
    width: '80%',
    margin: 'auto',
    overflow: 'hidden'
};

const sectionStyle = {
    background: '#fff',
    margin: '20px 0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
};

const ulStyle = {
    listStyle: 'none',
    padding: '0'
};

const liStyle = {
    background: '#e4e4e4',
    margin: '5px 0',
    padding: '10px',
    borderRadius: '4px'
};

export default Helplines;
