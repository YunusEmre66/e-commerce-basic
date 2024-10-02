import { createSlice } from "@reduxjs/toolkit"

//! bütün uygulamayı ilgilendiriyorsa appslice da olabilir , mesela loading durumu


const initialState = {
    loading: false,

}
export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export const { } = appSlice.useActionState
export default appSlice.reducer