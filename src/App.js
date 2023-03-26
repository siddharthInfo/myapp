import logo from './logo.svg';
import './App.css';
import User from './components/User'
import New from './components/New';
import PS from './components/PS';
import Calling ,{Calling1}from './components/Calling'
import Count from './components/Count';
import Testing_Color from './components/Testing_Color';
import Listing_Names from './components/Listing_Names';
import Conditional_Rendering from './components/Conditional_Rendering';
import Rough,{Rough1} from './components/Rough';
import Name from './components/Name';
import Form_do from './components/Form_do';
import Table from './components/Table';
import lifecycleA from './components/lifecycleA';
import ValidNum from './components/ValidNum'
import FormVal from './components/FormVal';
import HomePage from './components/HomePage';
import ToDoMemo from './components/ToDoMemo';
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/UserContext'
import Site from './Site'
import Effect from './components/Effect'
import UseRef from './components/UseRef'
import Reducer from './components/Reducer'
import Memoisation from './components/Memoisation';
import UseCallback from './components/UseCallback'
import Reducer1 from './components/Reducer1'
import Car from './components/Car'



import Book from './components/Book';
import store from './components/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <div className="App">
      {/* <ToDoMemo></ToDoMemo> */}
      {/* <HomePage></HomePage> */}
     
      {/* <FormVal></FormVal> */}
              {/* {<UserProvider value='Siddharth'>
              <ComponentC></ComponentC>
               </UserProvider>  } */}
        {/* <Site></Site> */}
        {/* <Effect></Effect> */}

        <UseRef></UseRef>
        {/* { <Reducer></Reducer>} */}
        {/* <Memoisation></Memoisation> */}
        {/* <UseCallback></UseCallback> */}
     {/* <Reducer1></Reducer1>
     <Car></Car> */}
     {/* <Provider store={store}>
    <div>  <Book/></div>
     </Provider> */}
    </div>
  );
}


export default App;
