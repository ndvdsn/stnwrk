
import Home from './components/Home'
import Projects from './components/Projects'
import Project from './components/Project'
// import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<Home />} path="/" exact="true"/>
      {/* <Route element={<About />} path="/about"/> */}
      {/* <Route element={<About />} path="/about" /> */}
      <Route element={<Project />} path="/projects/:slug" />
      <Route element={<Projects />} path="/projects" />
      
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
