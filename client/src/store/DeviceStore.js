import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ];
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Samsung'},
            {id: 4, name: 'Lenovo'},

        ];
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 96000, rating: 5, img: 'https://app-room76.ru/wp-content/uploads/2020/10/iphone-12-pro-silver-hero.png'},
            {id: 2, name: "Iphone 12 pro", price: 96000, rating: 5, img: 'https://app-room76.ru/wp-content/uploads/2020/10/iphone-12-pro-silver-hero.png'},
            {id: 3, name: "Iphone 12 pro", price: 96000, rating: 5, img: 'https://app-room76.ru/wp-content/uploads/2020/10/iphone-12-pro-silver-hero.png'},
            {id: 4, name: "Iphone 12 pro", price: 96000, rating: 5, img: 'https://app-room76.ru/wp-content/uploads/2020/10/iphone-12-pro-silver-hero.png'},
            {id: 5, name: "Iphone 12 pro", price: 96000, rating: 5, img: 'https://app-room76.ru/wp-content/uploads/2020/10/iphone-12-pro-silver-hero.png'},
            {id: 6, name: "Iphone 12 pro", price: 96000, rating: 5, img: 'https://app-room76.ru/wp-content/uploads/2020/10/iphone-12-pro-silver-hero.png'},

        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this); //теперь mobx будет следить за изменениями этих переменных и при их изменении компоненты будут перерендедориваться
    }
    //создаем экшены
    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }


    //computed функции, они вызываются в том случае, если переменная внутри была изменена
    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}