import './App.css'
import styles from './App.module.css';
import React, { useState } from 'react';
// Styles from bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/esm/Button';


// File Components
import Card from '../Card'
import iphones from "../Phoneimage";
import LoginForm from '../UseState'
import ObjUseState from '../UseStateobj'
import { UseStateArray, UseStateArrayList } from '../UseStateArray';
import ToggleButton from '../ToggleButton/ToggleButton';
import AlertDismissible from '../Button';
import Header from '../Header';


// export const Daylight = () => {
//   const [isDarkMode, setIsDarkMode] = useState();

//   function changeHandler() {
//     setIsDarkMode(isDark => !isDark)
//   }

//   return (
//     <>
//       <div>
//         <Button>Click To change</Button>
//       </div>
//     </>
//   );

// }

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const light = <i class="bi bi-moon-stars daybtn" ></i>
  const dark = <i class="bi bi-brightness-high nightbtn"></i>


  function dayLightHandler() {
    setIsDarkMode(isDark => !isDark)
  }

  return (

    <body className={isDarkMode ? styles.darkStyles : styles.lightStyles}>

      <Header />
      <Button className={styles.Daylightbtn} variant='default' onClick={dayLightHandler}>{isDarkMode ? light : dark}</Button>
      <br />
      <AlertDismissible />

      <div className={isDarkMode ? styles.darkStyles : styles.lightStyles}>
        <Card name={iphones} category="Iphones Products" />
      </div>


      {/* <div>
      <ObjUseState />
      <UseStateArrayList /> <br />
      </div> */}

<br /><br />
<div className='formContainer'>

<LoginForm /> 

</div>


    </body>








  );
}

export default App



// <>
//   <div>
//    
//     <ToggleButton />
//     
//   </div>
//   

//   <>
//   
//   </>
//   <>
//    
//     
   
//   </>
// </>