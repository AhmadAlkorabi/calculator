
import Keyboard from "./components/Keyboard";
import Screen from "./components/Screen";
import { useState } from 'react';




function App() {
  const [first, setfirst] = useState('')
  
  return (
    <div className="father">
   <Screen  first={first} setfirst={setfirst} />
   <Keyboard first={first} setfirst={setfirst}  />
    </div>
  );
}

export default App;
