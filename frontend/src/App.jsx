import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>

            <Routes>
                <Route path="/" index element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
