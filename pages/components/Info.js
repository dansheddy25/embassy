import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Image from 'next/image';

const Info = () => {
    return ( 
        <>
        <Head>
            <title>Info page | Home </title>
        </Head>
        <div className={styles.infoContainer}>

            <div className={styles.infoImages}>
                 <Image src="/logo.jpg" width={128} height={77} />    
                 <Image src="/logo.jpg" width={128} height={77} />    
                 <Image src="/logo.jpg" width={128} height={77} />        
            </div>
        </div>
        </>
    
        
     );
}
 
export default Info;