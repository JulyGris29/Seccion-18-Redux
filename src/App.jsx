import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, incrementBy } from './store/slices/counter'

function App() {

  const { counter } = useSelector ( state => state.counter )
  const dispatch = useDispatch();
  
  return (

    <div className="App">
      <header href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        {/* <a href="https://react.dev" target="_blank" rel="noreferrer"> */}
        <img src={reactLogo} className="logo react" alt="React logo" />

        <p>count is  { counter }</p>
        <p>
          <button type= "button" onClick={ () => dispatch ( increment ()) }>
            Increment
          </button>

          <button type= "button" onClick={ () => dispatch ( decrement ()) }>
            Decrement
          </button>

          <button type= "button" onClick={ () => dispatch ( incrementBy (2)) }>
            Increment by 2
          </button>

        </p>
      </header>

    </div>
  )
}

export default App
