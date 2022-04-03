import styles from './FormattedTime.module.scss';


const FormattedTime = props => {
    return (
        <div className={styles.stopwatch}>
            <span>{(props.time.hours >= 10) ? props.time.hours : '0' + props.time.hours}</span>
            <span>{(props.time.minutes >= 10) ? props.time.minutes : '0' + props.time.minutes}</span>
            <span>{(props.time.seconds >= 10) ? props.time.seconds : '0' + props.time.seconds}</span>
            <span>{(props.time.miliseconds >= 10) ? props.time.miliseconds : '0' + props.time.hours}</span>
        </div>
    );
};

export default FormattedTime;