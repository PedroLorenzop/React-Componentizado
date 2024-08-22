import Header from './Componentes/Header';
import ConteudoPrincipal from './Componentes/ConteudoPrincipal';
import Footer from './Componentes/Footer'; 
import fotinho from './assets/vite.svg';
import { Outlet } from 'react-router-dom';


function App() {
 
  return (
    <>
      <img src={fotinho}/>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
