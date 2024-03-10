import './App.css';
import Nav from'./components/Navigation';
import H1 from './components/Home';
import R1 from './components/Register';
import S1 from './components/Signin';
import Sho from './components/Show';
import R from './components/RN';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoG from './components/Login';
import Up from './components/Update';
import Del from './components/Delete';
function App() {
/*function Page(){
  switch(store.getState()){
    case "Login":
      return(<div><LoG /></div>)
    case "Register":
      return(<div><R1 /></div>)
    default:
      return(<div><LoG /></div>)
  }
}*/


  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={"IMG2.jpg"} className="App-logo" alt="logo" />
        &nbsp;
        <p>
          INDIAN CULTURE AND MANAGEMENT SYSTEM
        </p>
      </header>
      <div className="App-body">
      <R/>
       
     <Routes>
        <Route path="/home"element={<H1 />}></Route>
        <Route path="/Reg"element={<R1 />}></Route>
        <Route path="/B"element={<H1 />}></Route>
        <Route path="/s"element={<S1 />}></Route>
        <Route path="/Sho"element={<Sho />}></Route>
        <Route path="/log"element={<LoG />}></Route>
        <Route path="/Upd"element={<Up />}></Route>
        <Route path="/Del"element={<Del />}></Route>
  </Routes> 
       </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
