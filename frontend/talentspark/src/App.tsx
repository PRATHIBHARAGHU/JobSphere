import Welcome from './components/Welcome';
import Navbar from './components/NavBar';
import CompanyCard from './components/CompanyCard';
import JobCard from './components/JobCard';
import Footer from './components/Footer';
function App(){
  return(
    <div>
      <Navbar />
      <Welcome />
      <br />
      <CompanyCard />
      <br />
      <JobCard />
      <br />
      <Footer />
    </div>
  )
}

export default App
