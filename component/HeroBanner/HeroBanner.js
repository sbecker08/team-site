import EditableText from "../../modules/EditableModule/EditableText/EditableText";
import EditableImage from "../../modules/EditableModule/EditableImage/EditableImage";
import styles from './HeroBannder.module.css';

function HeroBanner({ data, headlineFunction, buttonTextFunction, isContentEditable = true }){
    return (        
        <div className={styles.heroContainer}>
            <div>                
                <EditableImage isContentEditable={isContentEditable} src="/hero.webp" width="1184" height="880" uploadImageLocation={'top'} isPriorityImage={true}></EditableImage>
            </div>
            <div className="content-container">
                <h1 className={styles.bannerText}>
                    <EditableText isContentEditable={isContentEditable} text={headlineFunction(data)} isPriorityImage={true}></EditableText>
                </h1>
                <button className="orange-button">{buttonTextFunction(data)}</button>
            </div>
        </div>
    )
}

export default HeroBanner;
  