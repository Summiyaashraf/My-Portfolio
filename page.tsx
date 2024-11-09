import Navbar from '../components/Navbar'; 
import Hero from '../components/Hero';
import About from '../components/About'; 
import Projects from '../components/Projects'; 
import Contact from '../components/Contact'; 
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      </div>
  )
};
export default HomePage;