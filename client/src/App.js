import { useContext, useState, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import Context from './index';
import { check } from './http/useAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally( () => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Spinner animation={'grow'} style= {{position: "fixed", top: "50%", left: "50%", width: 50, height: 50}}/>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
});

export default App;
