import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import EventsPage from './Pages/EventsPage';
import StudyPlacesPage from './Pages/StudyPlaces/StudyPlacesPage';
import FCLPage from './Pages/FCLPage';
import EventInfoPage from './Pages/EventsInfoPage/EventInfoPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/iletişim" element={<ContactPage />} />
            <Route path="/fclNedir" element={<FCLPage />} />
            <Route path="/etkinliklerimiz" element={<EventsPage />} />
            <Route path="/fclAlanları">
              <Route path=":path/:routeId" element={<StudyPlacesPage />} />
            </Route>
            <Route path="/etkinlikler">
              <Route path=":path/:routeId" element={<EventInfoPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
