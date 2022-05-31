import React, { useState, useContext } from 'react';
import { Container, Form, Card, Button} from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Context from '../index';
import { observer } from 'mobx-react-lite';



const Auth = observer( () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user } = useContext(Context);
    const navigate = useNavigate();

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data)
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
        
    }

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    
                    <Button 
                        className="mt-3" 
                        variant={'outline-success'}
                        onClick={click}
                    >
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                    {isLogin ? 
                    <React.Fragment>
                        <NavLink to={REGISTRATION_ROUTE} className="mt-3 d-flex justify-content-center">
                            Зарегистрироваться
                        </NavLink>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <NavLink to={LOGIN_ROUTE} className="mt-3 d-flex justify-content-center">
                            Авторизация
                        </NavLink>
                    </React.Fragment>}
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
