import React from 'react';

function Skills() {
    return (
        <div style={styles.container}>
            <section id="skills" style={styles.skillsSection}>
                <h2 style={styles.sectionTitle}>Skills</h2>

                <div style={styles.gridContainer}>
                    {/* Frontend Skills */}
                    <div style={styles.gridColumn}>
                        <h3 style={styles.skillsTitle}>Frontend</h3>
                        <div style={styles.grid}>
                            <div style={styles.gridItem}>
                                <p>HTML</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>CSS</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>JavaScript</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>React</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Angular</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Tailwind CSS</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Shadcn UI</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Material UI</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Bootstrap</p>
                            </div>
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div style={styles.gridColumn}>
                        <h3 style={styles.skillsTitle}>Backend</h3>
                        <div style={styles.grid}>
                            <div style={styles.gridItem}>
                                <p>Node.js</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Express.js</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>MySQL</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>MongoDB</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Firebase</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>PostgreSQL</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Sections (Languages and Tools) */}
                <div style={styles.gridContainer}>
                    {/* Languages */}
                    <div style={styles.gridColumn}>
                        <h3 style={styles.skillsTitle}>Languages</h3>
                        <div style={styles.grid}>
                            <div style={styles.gridItem}>
                                <p>Python</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Java</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>TypeScript</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>JavaScript</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>C#</p>
                            </div>
                        </div>
                    </div>

                    {/* Tools */}
                    <div style={styles.gridColumn}>
                        <h3 style={styles.skillsTitle}>Tools</h3>
                        <div style={styles.grid}>
                            <div style={styles.gridItem}>
                                <p>VSCode</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Github</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>NetBeans</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Photoshop</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Canva</p>
                            </div>
                            <div style={styles.gridItem}>
                                <p>Visual Studio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#20262E',
        color: '#FFFF',
        fontFamily: 'Arial, sans-serif',
    },
    skillsSection: {
        textAlign: 'left',
        padding: '20px',
    },
    sectionTitle: {
        fontSize: '2.5rem',
        marginBottom: '20px',
    },
    gridContainer: {
        display: 'flex',
        flexWrap: 'wrap', // Allows wrapping on smaller screens
        justifyContent: 'space-between',
        marginBottom: '40px',
    },
    gridColumn: {
        flex: '1',
        minWidth: '250px', // Ensures a minimum width for each grid column
        margin: '10px',
        padding: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        backgroundColor: '#2b2e33',
    },
    skillsTitle: {
        fontSize: '1.5rem',
        marginBottom: '15px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', // Auto-adjust columns based on content size
        gap: '10px',
    },
    gridItem: {
        backgroundColor: '#20262E',
        padding: '10px',
        borderRadius: '8px',
        textAlign: 'center',
        border: '1px solid #ec6e59',
        transition: 'background-color 0.3s',
        cursor: 'pointer', // Change cursor to pointer
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50px', // Ensures a consistent height for each item
    },
    '@media (max-width: 768px)': {
        grid: {
            gridTemplateColumns: 'repeat(2, 1fr)', // 2 items per row on tablets
        },
    },
    '@media (max-width: 480px)': {
        grid: {
            gridTemplateColumns: 'repeat(1, 1fr)', // 1 item per row on mobile
        },
        sectionTitle: {
            fontSize: '1.8rem',
        },
        skillsTitle: {
            fontSize: '1.2rem',
        },
        gridItem: {
            minHeight: '50px', // Adjust height for mobile
        },
    },
};

export default Skills;
