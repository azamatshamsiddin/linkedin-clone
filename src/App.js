import {Routes, Route} from "react-router-dom";
import './App.css'
import Login from './components/Login'
import Header from "./components/Header";
import Home from "./components/Home";
import Layout from "./components/Layout";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>

        <Route path='/home' element={<Layout/>}>
          <Route index element={<Header/>}/>
          <Route index element={<Home/>}/>
        </Route>


      </Routes>
    </div>
  )
}

export default App;
