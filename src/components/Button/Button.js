import styles from './Button.module.scss';

const Button = props => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={props.onClick}>{props.children}</button>
        </div>
    )
}

export default Button;