import React, { useState } from 'react';

const TabSelector = ({ onSelect }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (days) => {
        setActiveTab(days);
        onSelect(days);
    };

    return (
        <div style={styles.tabContainer}>
            {[1, 7, 30].map((days) => (
                <div
                    key={days}
                    onClick={() => handleTabClick(days)}
                    style={{
                        ...styles.tab,
                        backgroundColor: activeTab === days ? '#007bff' : '#f1f1f1',
                        color: activeTab === days ? '#fff' : '#000',
                    }}
                >
                    {days} {days === 1 ? 'Day' : "Days"} Back
                </div>
            ))}
        </div>
    );
};

const styles = {
    tabContainer: {
        display: 'flex',
        borderBottom: '1px solid #ccc',
    },
    tab: {
        flex: 1,
        padding: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        border: '1px solid transparent',
        borderBottom: 'none',
        transition: 'background-color 0.3s',
    },
};

export default TabSelector;
