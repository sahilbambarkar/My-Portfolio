import React from 'react';

function Skills() {
    return (
        <div style={styles.container}>
            <section id="skills" style={styles.skillsSection}>
                <h2 style={styles.sectionTitle}>Skills</h2>

                <div style={styles.topGridContainer}>
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
                <div style={styles.bottomGridContainer}>
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
    topGridContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '40px',
    },
    bottomGridContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '40px',
    },
    gridColumn: {
        flex: '1',
        margin: '0 10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        borderRadius: '8px',
        backgroundColor: '#2b2e33',
        padding: '10px', // Padding around the grid
    },
    skillsTitle: {
        fontSize: '1.5rem',
        marginBottom: '15px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Set to 4 items per row
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
    },
};

export default Skills;