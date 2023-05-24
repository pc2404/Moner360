import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null,
    userDetail: null,
    activeCard:"Candace - 7200"
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.token = action.payload.token;
        },
        setLogout: (state, action) => {
            state.token = null;
        },
        setActiveCard:(state, action)=>{
            state.activeCard=action.payload.card
        }
    }
})

export const { setLogin, setLogout, setActiveCard} = userSlice.actions;
export default userSlice.reducer


