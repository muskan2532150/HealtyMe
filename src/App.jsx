import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardThunk } from "./redux/CardSlice";
import Navbar from "./Components/Navbar";

function App() {
  const store = useSelector((state) => state.card.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (store === 0) dispatch(CardThunk());
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
