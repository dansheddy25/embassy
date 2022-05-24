import Head from 'next/head'
import Layout from './components/Layout'
const Consular = () => {
    return ( 
      <>
      <Head>
      <title>Home page | Home </title>
    </Head>

      

       <div className='top-margin row  conSec container'>
       <div className="col-5 col-md">
            <img src='https://i1.wp.com/immigration-ways.com/wp-content/uploads/2018/12/10-things-you-need-to-know-about-the-new-UK-visa-application-process.jpg?fit=1688%2C1125&ssl=1' className='w-100 h-51 buhari-img' />
       </div>
        <div className="col-5 col-md aami-content">
          <h1>Visa Requirements</h1>
          <p>Procedure for to obtain your visa</p>
          <p>Download Visa Application Forms, complete and signed four (4) copies
Colour Passport size photos (4) to be pasted or stapled in designated place on application forms. Photos must be taken against a white backdrop, with, no hats, the two ears showing and without spectacles
Business, Residential addresses and contact telephone numbers to be provided
Financial means to be indicated
Proposed date of travel
Names and Addresses of references and/ Accommodation in Ghana (if it is a hotel, details are to be provided)
Letter of consent from parent/legal guardian for children under 18 years</p>
        </div>
        
      </div>
      {/* href=#sectionName */}
       <div className='top-margin row conSec container' id=''>
       <div className="col-5 col-md">
            <img src='http://nigeriansindubai.com/wp-content/uploads/2019/08/Nigerian-Passport.jpg' className='w-100 h-51 buhari-img'/>
       </div>
        <div className="col-7 col-md aami-content">
          <h1>Passport Requirements</h1>
          <p>Procedure for to obtain your visa</p>
          <p>Download Visa Application Forms, complete and signed four (4) copies
Colour Passport size photos (4) to be pasted or stapled in designated place on application forms. Photos must be taken against a white backdrop, with, no hats, the two ears showing and without spectacles
Business, Residential addresses and contact telephone numbers to be provided
Financial means to be indicated
Proposed date of travel
Names and Addresses of references and/ Accommodation in Ghana (if it is a hotel, details are to be provided)
Letter of consent from parent/legal guardian for children under 18 years</p>
          

        </div>
        
      </div>




      </>
     );
}
 
export default Consular;