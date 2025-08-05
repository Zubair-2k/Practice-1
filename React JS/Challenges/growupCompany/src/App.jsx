import './App.css'
import AboutUs from './Components/About/AboutUs'
import ClientsPage from './Components/ClientsPage/ClientsPage'
import ContactPage from './Components/ContactPage/ContactPage'
import Header from './Components/Header/Header'
import Navbar from "./Components/Navbar/Navbar"
import ServicesPage from './Components/ServicesPage/ServicesPage'

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <ContactPage/>
      <ServicesPage/>
      <ClientsPage/>
    </>
  )
}

export default App
