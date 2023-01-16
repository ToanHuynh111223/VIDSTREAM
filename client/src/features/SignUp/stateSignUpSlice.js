import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    inputEmail: '',
    inputPassword: '',
    inputUserName: '',
}
export const stateSignUpSlice = createSlice({
    name: 'stateSignUpSlice',
    initialState,
    reducers: {
        setInputEmail: (state, action) => { state.inputEmail = action.payload },
        setInputPassword: (state, action) => { state.inputPassword = action.payload },
        setInputUserName: (state, action) => { state.inputUserName = action.payload }
    },
})

// Action creators are generated for each case reducer function
export const { setInputEmail, setInputPassword, setInputUserName } = stateSignUpSlice.actions

export default stateSignUpSlice.reducer