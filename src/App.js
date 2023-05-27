
import {Route,Link,Routes} from 'react-router-dom'
import Main from './Pages/Main';
import Login from './Pages/Login';
import Register from './Pages/Register';
function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  );
}


export default App;
