import styles from './loading.module.css'

export default function Loading(){
    return (
        <div className={styles.container}>
            <div className={styles.lds_ripple}><div></div><div></div></div>
        </div>
    )
}