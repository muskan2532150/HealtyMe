import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardThunk } from "./redux/CardSlice";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import CarouselCard from "./Components/CarouselCard";

function App() {
  const store = useSelector((state) => state.card.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (store.length === 0) {
      dispatch(CardThunk());
    }
  });

  return (
    <div className="App">
      {/* <Navbar /> */}
      <CarouselCard/>
      <Product/>
    </div>
  );
}

export default App;
