import AboutMe from './about_me';
import './section2.css';

function Section2(){
    return(
        <div className = "section-2-main">
            <div className = "water-mark">
                <h1>About Me...</h1>
            </div>
            <div className = "about-me-content-container">
                <AboutMe/>
            </div>
        </div>
    );
}

export default Section2;