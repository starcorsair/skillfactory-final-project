import { clientAuth, client } from "../Utilities/clients";

const namespace = 'cases'

const getReports = async () => {
    const { data } = await clientAuth.get(`/${namespace}`, null);

    return data;
};

const createUnauthReport = async (payload) => {
    const { data } = await client.post('/public/report', payload);

    return data;
};

const createReport = async (payload) => {
    const { data } = await clientAuth.post(`/${namespace}`, payload);

    return data;
};

const getReport = async (id) => {
    const { data } = await clientAuth.get(`/${namespace}/${id}`, null);

    return data;
};

const removeReport = async (id) => {
    const { data } = await clientAuth.delete(`/${namespace}/${id}`, null);

    return data;
};

const editReport = async (payload) => {
    const { data } = await clientAuth.put(`/${namespace}/${payload.id}`, payload);

    return data;
};

export {
    getReports,
    createUnauthReport,
    createReport,
    getReport,
    removeReport,
    editReport
}