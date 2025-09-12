import './App.css';
import Header from './Header';
import { ImageSlider } from './ImageSlider';
import MemoHook from './MemoHook';
import CallbackHook from './CallbackHook';
import RefHook from './RefHook';
import Counter from './Counter';
import ContextHook from './ContextHook';
import About from './About';

function App() {
  const country = "India";
  return (
    <div className="abosulate">
     {/* <Header country= {country}/> <br/> 
      <ImageSlider /><br/> 
      <MemoHook />
      <CallbackHook/> 
       <RefHook/>
      <Counter/> */}
      <ContextHook/>
      <About/>

    </div>
  );
}

export default App;
