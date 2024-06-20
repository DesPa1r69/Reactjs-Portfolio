import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Work from "./components/Work"



function App() {
  

  return (
    
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
       <Header />
       <Navbar />
       <Banner />
       <About/>
       <Services />
       <Work />
       <Contact/>
       

                
       </div>
        
    
  )
}

export default App
