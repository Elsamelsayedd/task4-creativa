import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Register from './Components/Register/Register';
import { UseProvider } from './Context/LargeContext';
import ComponentOne from './Components/ComponentOne/ComponentOne';
import ComponentThree from './Components/ComponentThree/ComponentThree';
import ComponentFive from './Components/ComponentFive/ComponentFive';

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Register /> */}


      <UseProvider value={'Eslam Elsayed'}>
        <ComponentOne />
        <ComponentThree />
        <ComponentFive />
      </UseProvider>

    </>


  );
}

export default App;
