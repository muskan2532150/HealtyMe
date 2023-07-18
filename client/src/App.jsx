import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardThunk } from "./redux/CardSlice";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import {Navbar,Product,LoginPage,Cart,Card,UserDetail} from './Import'

function App() {
  const store = useSelector((state) => state.card.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (store.length === 0) {
      dispatch(CardThunk());
    }
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Card/>} />
          <Route path="/profile" element={<UserDetail/>} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
