import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import FooterNavbar from './Components/FooterNavbar/FooterNavbar'

function App() {

  return (
    <>
      <div className='app'>

        <Navbar />
        <Header />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
        <FooterNavbar />

      </div>
    </>
  );
}

export default App;
