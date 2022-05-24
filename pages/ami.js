import Head from 'next/head'
import Image from 'next/image'

const Ami = () => {
    return ( 
        <>
        <Head>
        <title>Home page | Home </title>
      </Head>

         <div className='top-margin row  h-75 container'>
         <div className="col-5 col-md">
              <img src='/ambas.jpg' className='w-100 h-100 buhari-img' />
         </div>
          <div className="col-7 col-md aami-content">
            <h1>The Ambasdor</h1>
            {/* <p>this is my about page</p> */}
            <p>His Excelency Amb. Al-Bashir Ibrahim Saleh Al-Hussain, who assumed offoice on Thursday the 3 of march,2021.</p>
            <p>He complete and signed four (4) copies
Colour Passport size photos (4) to be pasted or stapled in designated place on application forms. Photos must be taken against a white backdrop, with, no hats, the two ears showing and without spectacles
Business, Residential addresses and contact telephone numbers to be provided
Financial means to be indicated
Proposed date of travel
Names and Addresses of references and/ Accommodation in Ghana (if it is a hotel, details are to be provided)
Letter of consent from parent/legal guardian for children under 18 years</p>
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
         <div className='top-margin row h-75 container' id='sectionName'>
         <div className="col-5 col-md">
              <img src='https://i0.wp.com/media.premiumtimesng.com/wp-content/files/sites/2/2017/03/national-assembly-abuja1-1.jpg' className='w-100 h-80 buhari-img' />
         </div>
          <div className="col-7 col-md aami-content">
            <h1>Embassy Officials</h1>
            <p>Here is a list of our embassy staff and their contacts</p>
            <table class="table table-sm">
  <thead class="table-success">
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Position </th>
        <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
        <tr>
            <th scope="row">Mr. zayyan</th>
            <td>Head of Consulor</td>
            <td>z@gmail.com</td>
         

        </tr>
        <tr>
        <th scope="row">Mr. zayyan</th>
            <td>Head of Consulor</td>
            <td>z@gmail.com</td>
            

        </tr>
        <tr>
        <th scope="row">Mr. zayyan</th>
            <td>Head of Consulor</td>
            <td>z@gmail.com</td>
            
        </tr>
        <tr>
        <th scope="row">Mr. zayyan</th>
            <td>Head of Consulor</td>
            <td>z@gmail.com</td>
        </tr>
        <tr>
        <th scope="row">Mr. zayyan</th>
            <td>Head of Consulor</td>
            <td>z@gmail.com</td>
        </tr>
        <tr>
        <th scope="row">Mr. zayyan</th>
            <td>Head of Consulor</td>
            <td>z@gmail.com</td>
        </tr>
        <tr>
        <th scope="row">Mr. zayyan</th>
            <td>Head of Consulor</td>
            <td>z@gmail.com</td>
        </tr>

        <tr>
        <th scope="row">Mr. zayyan</th>
            <td>Head of Consulor</td>
            <td>z@gmail.com</td>
        </tr>

        <tr>
        <th scope="row">Mr. zayyan</th>
            <td>Head of Consulor</td>
            <td>z@gmail.com</td>
        </tr>

       
        
  </tbody>
</table>
          </div>
          
        </div>




        </>
     );
}
 
export default Ami;