import Link from 'next/link'
import Image from 'next/dist/client/image';
import Head from 'next/head'

const Navbar = () => {
    return (
      <> 
      <Head>
      <title>Home page | Home </title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link> */}
     
    </Head>
      
      {/* <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-xxl">
          <a href="#" className="navbar-brand">
            <span className="fw-bold">
              Trying
            </span> <Image src="/c.jpg" width ={120} height = {65} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBa">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end align-center" id="navBa">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">Try 1</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Try 12</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Try 122</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
     <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
  <a href="#" className="navbar-brand border border-light">
                <Image src="/coat.png" width ={120} height = {50} />
             </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
      <li className="nav-item"> <Link href="/"><a className="nav-link">Home</a></Link> </li>
      <li className="nav-item">  <Link href="/ami"><a className="nav-link">The Embassy</a></Link> </li>
              <li className="nav-item">  <Link href="/consular"><a className="nav-link"> Consular Section</a></Link> </li>
              <li className="nav-item">  <Link href="#scrollspyHeading2"><a className="nav-link"> Contact</a></Link> </li>
      </ul>
    </div>
  </div>
</nav>

      </>
     );
}
 
export default Navbar;