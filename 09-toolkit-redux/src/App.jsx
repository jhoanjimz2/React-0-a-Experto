import { useDispatch, useSelector } from 'react-redux'


import reactLogo from './assets/react.svg'
import { increment, decrement, incrementBy } from './store/slices/counter';
import './App.css'

function App() {

  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>Increment</button>
        <div className="separador"></div>
        <button onClick={() => dispatch( decrement() )}>Decrement</button>
        <div className="separador"></div>
        <button onClick={() => dispatch( incrementBy(2) )}>Increment 2</button>
      </div>
    </div>
  )
}

export default App
