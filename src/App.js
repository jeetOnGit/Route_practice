import './App.css';
import { Route, Routes } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Loginreg from './components/Login&reg';
import FAQ from './components/FAQ';
import OrderHistory from './components/OrderHistory';
import Breadcrumb from './components/Breadcrumb';
import Home from './components/Home';
// import AnotherPage from './components/AnotherPage';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Breadcrumb />
      <Routes>
        
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Loginreg /> } />
        <Route path="/faq" element={ <FAQ /> } />
        <Route path="/orders" element={ <OrderHistory /> } />
        
      </Routes>
      
    </div>
  );
}

export default App;
