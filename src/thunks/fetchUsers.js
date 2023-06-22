import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const fetchUsers = createAsyncThunk('users/fetch' , async()=>{
    const res = await axios.get('http://localhost:3005/users')
    await pause(2000)
    return res.data
})


// dev only
const pause = (duration)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },duration)
    });
};

export {fetchUsers}
