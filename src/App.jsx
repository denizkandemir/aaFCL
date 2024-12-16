import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import StudyPlacesPage from './Pages/StudyPlacesPage';
import EventsPage from './Pages/EventsPage';
import FCLPage from './Pages/FCLPage';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/iletişim" element={<ContactPage />} />
          <Route path="/fclNedir" element={<FCLPage/>}/>
          <Route path="/öğrenmeAlanlarımız" element={<StudyPlacesPage/>}/>
          <Route path="/etkinliklerimiz" element={<EventsPage/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
