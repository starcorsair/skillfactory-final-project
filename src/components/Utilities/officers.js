import { clientAuth } from "./clients"

const namespace = 'officers';

const getOfficers = async () => {
    const { data } = await clientAuth.get(`/${namespace}`, null);

    return data;
};

const getOfficer = async (id) => {
    const { data } = await clientAuth.get(`/${namespace}/${id}`, null);

    return data;
};

const removeOfficer = async (id) => {
    const { data } = await clientAuth.delete(`/${namespace}/${id}`, null);

    return data;
};

const createOfficer = async (payload) => {
    const { data } = await clientAuth.post(`/${namespace}`, payload);

    return data;
};

const editOfficer = async (payload) => {
    const { data } = await clientAuth.put(`/${namespace}/${payload.id}`, payload);

    return data;
};

export {
    getOfficers,
    getOfficer,
    removeOfficer,
    createOfficer,
    editOfficer
}