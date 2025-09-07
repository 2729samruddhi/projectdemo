import './App.css';
import Header from './Header';
import { ImageSlider } from './ImageSlider';
import MemoHook from './MemoHook'

function App() {
  const country = "India";
  return (
    <div className="abosulate">
      {/* <Header country= {country}/> <br/>
      <ImageSlider /><br/> */}
      <MemoHook />
    </div>
  );
}

export default App;
