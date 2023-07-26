import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, clientAuth } from "./clients";

const namespace = 'auth';

export const fetchRegister = createAsyncThunk(`${namespace}/sign_up`, async (payload) => {
    const { data } = await client.post(`/${namespace}/sign_up`, payload);
    return data;
});

export const fetchLogin = createAsyncThunk(`${namespace}/sign_in`, async (payload) => {
    const { data } = await client.post(`/${namespace}/sign_in`, payload);
    return data;
});

export const fetchMe = createAsyncThunk(`${namespace}`, async () => {
    const { data } = await clientAuth.get(`/${namespace}`, null);
    return data;
});

const initialState = {
    data: null,
    status: 'idle',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
            state.status = null;
            localStorage.removeItem('auth-token');
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRegister.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchRegister.rejected, (state) => {
            state.data = null;
            state.status = 'rejected';
        });
        builder.addCase(fetchLogin.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchLogin.rejected, (state) => {
            state.data = null;
            state.status = 'rejected';
        });
        builder.addCase(fetchMe.pending, (state) => {
            state.data = null;
            state.status = 'pending';
        });
        builder.addCase(fetchMe.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchMe.rejected, (state) => {
            state.data = null;
            state.status = 'rejected';
        });
    }
});

export const userReducer = userSlice.reducer;

export const { logout } = userSlice.actions;