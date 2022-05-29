import React from 'react';
import { Container, Form, Card, Button} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';



const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

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
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Пароль..."
                    />
                    
                    <Button className="mt-3" variant={'outline-success'}>
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
}

export default Auth;
