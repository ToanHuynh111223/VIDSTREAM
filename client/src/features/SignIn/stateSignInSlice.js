import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    inputEmail: '',
    inputPassword: ''
}
export const stateSignInSlice = createSlice({
    name: 'stateSignInSlice',
    initialState,
    reducers: {
        setInputEmail: (state, action) => { state.inputEmail = action.payload },
        setInputPassword: (state, action) => { state.inputPassword = action.payload }
    },
})

// Action creators are generated for each case reducer function
export const { setInputEmail, setInputPassword } = stateSignInSlice.actions

export default stateSignInSlice.reducer