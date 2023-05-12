import {createSlice} from "@reduxjs/toolkit"

const initialState={
    token:null,
    userDetail:null
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setLogin:(state, action)=>{
            state.token=action.payload.token;
        },
        setLogout:(state, action)=>{
            state.token=null;
        }
    }
})

export const {setLogin, setLogout} = userSlice.actions;
export default userSlice.reducer