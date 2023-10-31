
import './App.css';
import Navbsr from './Components/Navbar/Navbsr';


import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import LoginSign from './Pages/LoginSign';
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assetss/banner_mens.png'
import women_banner from './Components/Assetss/banner_women.png'
import kid_banner from './Components/Assetss/banner_kids.png'
import NewCollections from './Components/NewCollections/NewCollections';
import ConfirmationPage from './Components/ConfirmationPage/ConfirmationPage';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbsr/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory  banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/newcollection' element={<NewCollections />} />
        <Route path='/confirmationpage' element={<ConfirmationPage />} />
        <Route path='/cart' element={<Cart/>}/>
        
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<LoginSign/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
