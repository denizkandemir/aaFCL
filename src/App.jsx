import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import EventsPage from './Pages/EventsPage';
import StudyPlacesPage from './Pages/StudyPlaces/StudyPlacesPage';
import FCLPage from './Pages/FCLPage';
import EventInfoPage from './Pages/EventsInfoPage/EventInfoPage';
import LoginPage from './Pages/LoginPage';
import AdminPage from './Pages/AdminPage';
import AddEventPage from './Pages/AddEventPage';
import EditEventPage from './Pages/EditEventPage';

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
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/etkinlikEkle" element={<AddEventPage />}/>
            <Route path="/etkinlikDüzenle">
              <Route path=":path/:routeId" element={<EditEventPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
