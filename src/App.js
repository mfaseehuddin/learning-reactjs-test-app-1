import Counter from './components/Counter.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Counter initialCount={20} maxCount={30} step={1}/>
    </div>
  );
}

export default App;
