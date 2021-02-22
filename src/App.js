import './App.css';
import {Contact, Home} from './Component/MyComponent';
import { useState } from 'react';

function App() {
  let personalInfo = {
    name : 'Ikhtiar Uddin',
    occupation : 'Student',
    pageName : 'Home'
  }

  let contactInfo = {
    email : 'irmdmitul@gmail.com',
    mobile : '01600102219',
    pageName : 'Contact'
  }

  const [clicked, setCliked] = useState();

  const menuClicked = (param) => {
    setCliked(param);
  }

  return (
    <>
      <button onClick={()=>menuClicked('home')}>Home</button>
      <button onClick={()=>menuClicked('contact')}>Contact</button>
      {clicked === 'home' && <Home info={personalInfo}/>}
      {clicked === 'contact' && <Contact info={contactInfo}/>}
    </>
  );
}

export default App;
