import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/UserSlice";
import { albumApi } from "./APIs/AlbumsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { photoApi } from "./APIs/PhotosApi";


export const store = configureStore({
    reducer:{
        users:userReducer,
        [albumApi.reducerPath]:albumApi.reducer,
        [photoApi.reducerPath]:photoApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(albumApi.middleware).concat(photoApi.middleware)
    }
})

setupListeners(store.dispatch)

export {useFetchAlbumsQuery , useAddAlbumMutation , useRemoveAlbumsMutation } from './APIs/AlbumsApi'
export  {useFetchPhotosQuery , useAddPhotoMutation , useRemovePhotoMutation }  from './APIs/PhotosApi'
export * from '../thunks/fetchUsers'
export * from '../thunks/addUser'
export * from '../thunks/removeUser'


