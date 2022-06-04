import { $authHost, $host } from './index';

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type); //authHost , т.к чтобы создать тип нужна авторизация
    return data;
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');
    return data;
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand); //authHost , т.к чтобы создать тип нужна авторизация
    return data;
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand');
    return data;
}

export const createDevice = async (device) => {
    const { data } = await $authHost.post('api/device', device); //authHost , т.к чтобы создать тип нужна авторизация
    return data;
}

export const fetchDevices = async (brandId, typeId, limit, page) => {
    const { data } = await $host.get('api/device', { params:  { brandId, typeId, limit, page } });
    return data;
}

export const fetchOneDevice = async (id) => {
    const { data } = await $host.get('api/device/' + id);
    return data;
}
