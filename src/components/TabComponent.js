import React from 'react';

const TabSelector = ({ onSelect, value }) => {
    return (
        <div style={styles.tabContainer}>
            {[1, 7, 30].map((days) => (
                <div
                    key={days}
                    onClick={() => onSelect(days)}
                    style={{
                        ...styles.tab,
                        backgroundColor: value === days ? '#007bff' : '#f1f1f1',
                        color: value === days ? '#fff' : '#000',
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
        justifyContent: "space-evenly",
    },
    tab: {
        // flex: 1,
        padding: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        border: '1px solid transparent',
        borderBottom: 'none',

        transition: 'background-color 0.3s',
    },
};

export default TabSelector;
