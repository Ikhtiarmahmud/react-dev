import './App.css';
import MyComponent from './Component/MyComponent';
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

  let information = clicked === 'contact' ?  contactInfo : personalInfo;

  return (
    <>
      <button onClick={()=>menuClicked('home')}>Home</button>
      <button onClick={()=>menuClicked('contact')}>Contact</button>
      <MyComponent info={information}/>
    </>
  );
}

export default App;
