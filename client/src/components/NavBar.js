import React, {useContext} from 'react';
import Context from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';


const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logout = () => {
      user.setUser({});
      user.setIsAuth(false);
    }

    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Online Store</NavLink>
          {user.isAuth ?
            <Nav className="ml-auto" style={{color: 'white'}}>
              <Button 
                variant={'outline-light'} 
                className="mx-2" 
                onClick={logout}
              >
                Выйти
              </Button>
              <Button 
                onClick={() => navigate(ADMIN_ROUTE)
                }
              >
                Админ панель
              </Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
          </Nav>
          }
        </Container>
      </Navbar>
    )
});

export default NavBar;