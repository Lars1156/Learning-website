import React from "react";
import '../css file/About.css';
export  function About(){
    return(
        <section className="about-us">
         <div className="container">
            <div className="about-content">
                <h2>Elearning-Platfrom</h2>
                <p> Spark Acadamy empowers learners of all backgrounds with accessible and engaging educational experiences. We're passionate about making high-quality learning materials readily available, fostering a vibrant community of knowledge seekers.</p>
                <ul className="key-features">
                     <li>Curated Courses:</li>
                      <p>Explore a diverse range of courses, meticulously crafted by industry experts, to equip you with the skills you need to succeed.</p>
                       <li>Interactive Learning:</li>
                       <p>Engage with interactive elements, quizzes, and practical exercises to solidify your learning and make it enjoyable.</p>
                        <li>Community Support:</li>
                         <p>Connect with fellow learners, ask questions, and share insights in our supportive online community.</p>
               </ul>
               <button className="learn-more">Learn More</button>
            </div>
              <div className="about-image">
                <img src="path/to/your/image.jpg" alt="About Us Image" />
             </div>
         </div>
        </section>
    )
}