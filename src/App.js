
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  useEffect(()=>{
    navigate("/login");
  },[])
  
  return (
    <div className="App">

      <Routes>

            {/* public routes */}
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login/>}/>
            
            {/* we want to protect these routes */}
            {/* <Route element={<RequireAuth requireSubs={["/custom","/publish"]}/>}>
              <Route path="/home" element={<Home />} />

            </Route> */}


        </Routes>
      
    </div>
  );
}

export default App;
