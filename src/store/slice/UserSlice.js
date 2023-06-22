import {createSlice} from "@reduxjs/toolkit"
import { fetchUsers } from "../../thunks/fetchUsers"
import { addUser } from "../../thunks/addUser"
import { removeUsers } from "../../thunks/removeUser"

const userSlice = createSlice({
    name:'users',
    initialState:{
        isLoading:false,
        data:[],
        error:null

    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchUsers.pending , (state ,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchUsers.fulfilled , (state , action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchUsers.rejected , (state , action)=>{
            state.isLoading = false
            state.error = action.error
        })

        // for add
        builder.addCase(addUser.pending , (state ,action)=>{
            state.isLoading = true
        })
        builder.addCase(addUser.fulfilled , (state , action)=>{
            state.isLoading = false
            state.data.push(action.payload)
        })
        builder.addCase(addUser.rejected , (state , action)=>{
            state.isLoading = false
            state.error = action.error
        })
        // For Remove
        builder.addCase(removeUsers.pending , (state ,action)=>{
            state.isLoading = true
        })
        builder.addCase(removeUsers.fulfilled , (state , action)=>{
            state.isLoading = false
            // state.data.push(action.payload)
            // console.log(action)
            state.data = state.data.filter((data)=>{
                return data.id !== action.payload.id
            })
        })
        builder.addCase(removeUsers.rejected , (state , action)=>{
            state.isLoading = false
            state.error = action.error
        })
    }

})

export const userReducer = userSlice.reducer