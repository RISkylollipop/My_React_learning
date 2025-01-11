import './App.css'
import Card from './Card'
import iphones from "./Phoneimage";
import LoginForm from './UseState'
import ObjUseState from './UseStateobj'
import {UseStateArray, UseStateArrayList} from './UseStateArray';
import './custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'

import AlertDismissible from './Button';
import Header from './Header';
function App() {



  return (
    <>
      <div>
        <Header />
        <AlertDismissible />
      </div>
      {/* <Card name={iphones} category="Iphones Products" /> */}

      <>
        <ObjUseState />
      </>
      <>
      <UseStateArray/> <br />
      <UseStateArrayList/>
        {/* <LoginForm /> */}
      </>
    </>
  )
}

export default App
