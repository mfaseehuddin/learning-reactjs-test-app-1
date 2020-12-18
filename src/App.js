import Counter from './components/Counter.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <h2>THE CUTEST COUNTER EVER</h2>
      <Counter initialCount={0} maxCount={30} step={1} counterSize={"200px"}/>
    </div>
  );
}

export default App;
