import styles from './PageHelper1.module.css';
export default function PageHelper1(props) {
    return (
        <div className={styles.box}>
            <a href='#'>{props.link}</a>
            <b className={styles.public}>Public</b>
            <p className={`${styles.smallFont} ${styles.margin}`}>{props.from}<a href='https://www.google.com/' className={`${styles.smallFont} ${styles.hovering}`}>{props.author}</a></p>
            <p className={styles.smallFont}>{props.tag1}</p>  
            <p className={styles.smallFont}>{props.tag2}</p>      
        </div>

    )
}