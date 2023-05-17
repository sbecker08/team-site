import EditableText from "../EditableText/EditableText";
import EditableImage from "../EditableImage/EditableImage";
import styles from './AboutUs.module.css';

function HeroBanner(){

    const handleTextChange = (text) => {
        console.log(text);
    }

    return (        
        <div className={styles.aboutUsBackground}>
            <div class="content-container">
                <div className={styles.aboutUsGrid}>
                    <div className={styles.aboutUsText}>
                        <h2 className={styles.title}>
                            <EditableText onTextChange={handleTextChange} text="Creating Custom Tailored Solutions for Our Clients' Needs"></EditableText>
                        </h2>                        
                        <EditableText onTextChange={handleTextChange} text="In order to best serve our clients, we provide a truly holistic approach to their investment needs. We advise and assist them in executing their respective business plans, and help them overcome obstacles they run into along the way. Due to our state of the art research and analytical capabilities"></EditableText>
                    </div>
                    <div className={styles.aboutUsImageContainer}>
                        <EditableImage src="/team.webp" width="1184" height="880"></EditableImage>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;
  