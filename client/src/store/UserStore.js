import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false; //переменная изменяться не может
        this._user = {};
        makeAutoObservable(this); //теперь mobx будет следить за изменениями этих переменных и при их изменении компоненты будут перерендедориваться
    }
    //создаем экшены
    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setUser(user) {
        this._user = user;
    }

    //computed функции, они вызываются в том случае, если переменная внутри была изменена
    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._isAuth;
    }
}