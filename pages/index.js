import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/dist/client/link'
import Info from './components/Info'
import Service from './components/Service'
// import { Carousel } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Head>
          <title>Home page | Home </title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
          <title>Home page | Home </title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
          {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link> */}
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
          
      </Head>

    

        <div className={styles.container1}>

        {/* 
            <div className={styles.containerBuhari}>
            <img src="/pytho
              
            n.jpg"  />
            </div> */}
   
        <div className={styles.containerAmbas}>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
        <img src="https://i2.wp.com/media.premiumtimesng.com/wp-content/files/2021/06/President-Buhari.jpg?fit=1500%2C1000&ssl=1" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5 className='text-white display-2'>First slide label</h5>
        <p className='text-white'>His Excellency M.Buhari, The president of the fedral republic of Nigeria.</p>
        </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
        <img src="https://cdn.vanguardngr.com/wp-content/uploads/2020/09/Buhari.jpg?width=1500&auto_optimize=medium" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5 className='text-white display-2'>Second slide label</h5>
        <p className='text-white'>Some representative placeholder content for the second slide.</p>
        </div>
        </div>
        <div class="carousel-item">
        <img src="https://medafricatimes.com/wp-content/uploads/2016/08/morocco1.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5 className='text-white display-2'>Third slide label</h5>
        <p className='text-white'>His Royal Majesty Mohamed VI, the king of morocco.</p>
        </div>
        </div>
        </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          </div>
          </div> 

      
       
          {/* <div className={styles.mainContainer}>     
          <div className="containerBuhari">HHHhh</div>
          
            <div className={styles.mainContainerChild2}>
            <p className={styles.text1}><h1>Te</h1> </p>
            <p className={styles.text}> thidd</p>
            </div>

          

          </div> */}

   
    
        </div>
    
    <Service/>

    </>
  )
}
  