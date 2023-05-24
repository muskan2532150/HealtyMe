import { useEffect} from 'react'
import './App.css'
import {useDispatch, useSelector } from 'react-redux'
import {CardThunk} from './redux/CardSlice'
import Banner from './Components/Banner'

function App() {
const store = useSelector((state)=>state.card.value);
const dispatch = useDispatch();

useEffect(() =>{
  if (store === 0)
  dispatch(CardThunk())
},[]);

  return (
      <Banner/>
  )
}

export default App
