import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './ToggleButton.module.css'


// function ToggleButton() {
//   // State to track toggle (light or dark mode)
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Toggle handler
//   const toggleHandler = () => {
//     setIsDarkMode(t => !t); // Toggle the state
//   };

//   // isDarkMode ? styles.lightStyles : styles.darkStyles
//   return (
//     <div className={isDarkMode ? styles.lightStyles : styles.darkStyles}>
//       <Button onClick={toggleHandler}>
//         {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//       </Button>
//     </div>
//   );
// }




function ToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleHandler() {
    setIsDarkMode(is => !is)
  }

  return (
    <>
      <div className={styles.darkStyles}>

      </div>
      <div className={isDarkMode ? styles.darkStyles : styles.lightStyles }>
        <Button onClick={toggleHandler}> {isDarkMode ? 'Switch to light' : 'Switch to Dark'}</Button>
      </div>

    </>
  );
}


export default ToggleButton;