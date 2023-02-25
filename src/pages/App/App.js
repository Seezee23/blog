import { useState, useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom';
import ChinaPage from '../ChinaPage/ChinaPage';
import CanadaPage from '../CanadaPage/CanadaPage';
import USAPage from '../USAPage/USAPage';
import ItalyPage from '../ItalyPage/ItalyPage';
import HomePage from '../HomePage/HomePage';
import TravelsPage from '../TravelsPage/TravelsPage';


function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])
  
  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/travels" element={<TravelsPage />} />
            <Route path="/china" element={<ChinaPage user={user} setUser={setUser} />} />
            <Route path="/italy" element={<ItalyPage user={user} setUser={setUser} />} />
            <Route path="/usa" element={<USAPage user={user} setUser={setUser} />}/>
            <Route path="/canada" element={<CanadaPage user={user} setUser={setUser} />} />
            <Route path="/home" element={<HomePage user={user} setUser={setUser} />} />

          </Routes>
          <Footer />
        </>
         :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;