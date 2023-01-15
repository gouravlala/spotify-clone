import logo from './logo.svg';
import './App.css';
import { LeftMenu } from './components/LeftMenu';
import { MainContainer } from './components/MainContainer';
import { RightMenu } from './components/RightMenu';

function App() {
  return (
    <div className="App">
     <LeftMenu/>
     <MainContainer/>
     <RightMenu/>
     
     <div className='backGround'>

     </div>
    </div>
  );
}

export default App;
