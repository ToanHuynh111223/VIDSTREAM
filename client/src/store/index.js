import { configureStore } from '@reduxjs/toolkit'
import stateSignUpSlice from '../features/SignUp/stateSignUpSlice'
import stateSignInSlice from '../features/SignIn/stateSignInSlice'
export default configureStore({
    reducer: {
        signUp: stateSignUpSlice,
        signIn: stateSignInSlice
    },
})