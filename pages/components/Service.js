import styles from '/styles/Home.module.css'
import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
const Service = () => {
    return ( 

    <>

      {/* working Hours */}
      <div class="container-lg w-5 h-8 mt-5 work__hours">
        <div className="mb-3">
          <h1 className='fst-bold' > Welcoming Hours: Mon-Fri (9h-16h)</h1>
          </div>
        <div className="row justify-content-start align-items-center">
          <div className="col-8 col-lg-8 col-xl-3">
            <p>Submission of  Form : Mon & Thurs (9:00-12:00)</p>
            <p> </p>
            </div>
            <div className="col-8 col-lg-8 col-xl-3">
            <p>Layout Section : Mon & Thurs (9:00-12:00)</p>
            <p> </p>
        </div>
        <div className="col-8 col-lg-8 col-xl-3 ">
            <p>Layout Section : Mon & Thurs (9:00-12:00)</p>
            <p> </p>
        </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-8 col-lg-8 col-xl-3 ">
            <p>Tel:0700000000</p>
          </div>
          <div className="col-8 col-lg-8 col-xl-3 ">
            <p>Email:embasy@gmail.com</p>
          </div>
          <div className="col-8 col-lg-8 col-xl-3 ">
            <p>Email:embasy@gmail.com</p>
          </div>

        </div>
  
        <div className="d-flex justify-content-start my-3">
           <button type="button" class="btn btn-secondary btn-lg text-center"><span><Link href="/holiday"><a className="nav-link">Public Holidays</a></Link></span></button>
        </div>
      </div>

<div className="container">
<div className="w-20" id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
 <div>
   <div>
     <h1>Visa Requirements</h1>
   </div>
   <div className='text-justify'>
     <p>Download Visa Application Forms, complete and signed four (4) copies
       Colour 
     </p>
      <p>Passport size photos (4) to be pasted or stapled in designated place on application forms. </p>
      <p>Photos must be taken against a white backdrop, with, no hats, the two ears showing and without spectacles
      </p>
      <p>Business, Residential addresses and contact telephone numbers to be provided
      </p>
      <p>Financial means to be indicated </p>
      <p>Proposed date of travel
      </p>
      <p>Names and Addresses of references and/ Accommodation in Town (if it is a hotel, details are to be provided)
      Letter of consent from parent/legal guardian for children under 18 years</p>
   </div>
 </div>
</div>
</div>

        {/* Publications */}
      <div class="container mb-5">   
        
        <div className='mt-5 mb-3' >
          <h1 >Publications </h1>
        </div>
        
      <div className="row">
        <div className="col service">
        <div class="card" style={{width: '18rem'}}>
            <img src="/docAmbas.jpg" alt=""  className="card-img-top pubImg" />
            <div className="card-body">
              <p className="card-text">A meeting organised by His Excelency the Ambasador to see the student leaders hhhhhhhhhhhh </p>
              <span> <Link href="/publications"><a className="nav-link">Click to read</a></Link></span> 

            </div>
        </div>
        </div>

        <div className="col  service">
        <div className="card " style={{width: '18rem'}}>
            <img src="/minsStud.jpg" alt=""  className="card-img-top pubImg" />
            <div className="card-body">
              <p className="card-text">A Visit by His Excelency the state minister of education and His team</p>
              <span> <Link href="/publications"><a className="nav-link">Click to read</a></Link></span> 

            </div>
        </div> 
        </div>
        <div className="col  service">
        <div className="card " style={{width: '18rem'}}>
            <img src="https://medafricatimes.com/wp-content/uploads/2016/08/morocco1.jpg" alt="" className="card-img-top pubImg" />
            <div className="card-body">
              <p className="card-text">His magesty the king has made asked the traveling agency to give discounts  to reduce  expenses </p>
              <span> <Link href="/publications"><a className="nav-link">Click to read</a></Link></span> 

            </div>
        </div>
        </div>
        {/* </div> */}
            {/* <div className={styles.sascontainer}>
                <div><img src="/python.jpg" />    
            <p className={styles.text1}> thiddjdjhdjdjjdj djdjkjdjdjfh jsjjssjjjjjjjjjjjjjjjjjjjjjjjjjj nnnnnnnnnnnnnnn</p>
          </div>
                <div><img src="/python.jpg"  />    
            <p className={styles.text1}> thiddjdjhdjdjjdj djdjkjdjdjfh jsjjssjjjjjjjjjjjjjjjjjjjjjjjjjj nnnnnnnnnnnnnnn</p>
          </div>
                <div><img src="/python.jpg"  />    
            <p className={styles.text1}> thiddjdjhdjdjjdj djdjkjdjdjfh jsjjssjjjjjjjjjjjjjjjjjjjjjjjjjj nnnnnnnnnnnnnnn</p>
          </div>
            </div> */}
        </div>

        {/* miniFotter */}
        <div className="container mt-5 miniFotter " id="scrollspyHeading2">
          <div className="row">
            <div className="col">
              <h2>Contact us</h2>
              <p>Addresse: 70, Avenue Omar bin El Khattab Agdal Rabat Morocco</p>
            <p>Tel:0000000000</p>
            <p>Mail:e2@gmail.com</p>
            </div>
            <div className="col">
              <h2>Quick Links</h2>
              <p>Home</p>
            <p>Publications</p>
            <p>Holidays</p>
            <p>The Embassy</p>
            </div>
            <div className="col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.728068679847!2d-6.846594885158029!3d33.99951788062024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c85965bd8a7%3A0x7d5318aa572519d5!2s70%20Avenue%20Omar%20Ibn%20Al%20Khattab%2C%20Rabat!5e0!3m2!1sen!2sma!4v1625056271679!5m2!1sen!2sma" width="400" height="300" style={{border:"0;"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
        </div>
        </>
     );
}
 
export default Service;
