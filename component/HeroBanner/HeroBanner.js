import EditableText from "../EditableText/EditableText";
import styles from './HeroBannder.module.css';

function HeroBanner(){
    return (        
        <div className={styles.heroContainer}>
            <div class="content-container">
                <h1 className={styles.bannerText}>
                    <EditableText text="We Go Beyond Just Brokerage, Creating a Hassle-free and Enjoyable Experience."></EditableText>
                </h1>
                <button class="orange-button">Learn More</button>
            </div>
        </div>
    )
}

export default HeroBanner;
  