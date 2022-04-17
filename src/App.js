import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import Menu3 from './components/Menu3';
import Cuadros from './layout/Cuadros';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    <Routes>

    <Route path='/' element={<Cuadros/>}>

      <Route path='menu1' element={  <Menu1/>   }     />
      <Route path='menu2' element={  <Menu2/>   }     />
      <Route path='menu3' element={  <Menu3/>   }     />
    </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;