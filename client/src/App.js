import {BrowserRouter, Route, Navigator} from 'react-router-dom';
import AppRouter from './components/AppRouter';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
