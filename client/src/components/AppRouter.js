import React, {useContext} from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import Context from "../index";
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
    const {user} = useContext(Context);
    return (
        <Routes>
            {/* Маршруты доступные авторизированным пользователям */}
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />}/>
            )}
             {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />}/>
            )}
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
});

export default AppRouter;
