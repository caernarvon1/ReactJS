// src/component/About.js
import React from 'react'; // Mengimpor React

const About = () => {
    return (
        <main className="container mt-4">
            <h2 className="mb-3" style={{ textDecoration: 'none', borderBottom: 'none' }}>About me</h2>
            <table className="table">
                <tbody>
                    <tr>
                        <td style={{ verticalAlign: 'top', paddingRight: '20px' }}>
                            <img 
                                src="./images/yondaime.jpg" 
                                alt="Yondaime Photo" 
                                className="img-fluid" 
                                style={{ maxWidth: '200px', borderRadius: '50%' }} 
                            />
                        </td>
                        <td>
                            <p className="mb-1"><strong>Name:</strong> Raha</p> {/* Mengurangi margin-bottom */}
                            <p className="mb-1"><strong>Age:</strong> 29 Years old</p> {/* Mengurangi margin-bottom */}
                            <p style={{ textAlign: 'justify' }}>
                                As a graduate in Industrial Engineering, I have cultivated a strong foundation in problem-solving and analytical thinking. 
                                Currently, I work as a developer in the field of Information Technology, where I leverage my engineering skills to design and implement efficient software solutions. 
                                My passion for technology drives me to continuously learn and adapt in this ever-evolving industry, ensuring that I contribute effectively to my team's success and the development of innovative applications.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
};

export default About; // Mengekspor komponen About
