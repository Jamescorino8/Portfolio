import React from 'react';

import image from '../images/bg.jpg';
const imageAltText = "A background image of computer blue-screen.";

const description = "I am a software developer with a passion for learning and problem solving. I have experience with a variety of programming languages and technologies, and I am always looking to expand my skill set. I am currently seeking a full-time position as a software developer, where I can apply my skills and knowledge to create innovative solutions.";

const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "Django",
    "Java",
    "Spring",
    "SQL",
    "Git",
    "GitHub",
    "Heroku",
    "Netlify",
    "VS Code",
    "Eclipse",
    "IntelliJ IDEA",
    "Postman",
    "Jira",
    "Confluence",
    "Slack",
    "Microsoft Office",
    "Adobe Creative Suite",
    "Windows",
    "Linux",
    "macOS",
];

const quote = "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my experiences I continually look for new and better ways to make tech accessible by all.";

const About = () => {
    return (
        <section className="padding" id="about">
            <img className="background" src={image} alt={imageAltText}/>
            <div
                style={{
                    backgroundColor: "white",
                    width: "50%",
                    padding: "4rem",
                    margin: "3rem auto",
                    textAlign: "center",
                }}
            >
                <h2>About Myself</h2>
                <p className="large">{description}</p>
                <hr/>
                <ul
                    style={{
                        textAlign: "left",
                        columns: 2,
                        fontSize: "1.25rem",
                        margin: "2rem 3rem",
                        gap: "3rem",
                    }}
                >
                    {skillsList.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <hr/>
                <p style={{padding: "1rem 3rem 0"}}>{quote}</p>
            </div>
        </section>
    )
}

export default About;