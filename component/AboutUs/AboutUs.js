import EditableText from "../EditableText/EditableText";
import styles from './AboutUs.module.css';

function HeroBanner({ children }){
    return (        
        <div className={styles.aboutUsBackground}>
            <div class="content-container">
                <div className={styles.aboutUsGrid}>
                    <div className={styles.aboutUsText}>
                        <h2 className={styles.title}>
                            <EditableText text="Creating Custom Tailored Solutions for Our Clients' Needs"></EditableText>
                        </h2>                        
                        <EditableText text="In order to best serve our clients, we provide a truly holistic approach to their investment needs. We advise and assist them in executing their respective business plans, and help them overcome obstacles they run into along the way. Due to our state of the art research and analytical capabilities"></EditableText>
                    </div>
                    <img className={styles.aboutUsImage} src="./team.webp" />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;
  