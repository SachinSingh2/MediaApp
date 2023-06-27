import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {faker} from '@faker-js/faker'


// const pause = (duration)=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve()
//     } , duration)
//   })
// }

// The above function is only for checking we will remove it while we go for the production.

const albumApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    // fetchFn : async (...args)=>{
    //   await pause(1000)
    //   return fetch(...args)
    // }
  }),
//  So as we know now we are using the redux toolkit querry so the structure of the below code is going to be explain 
// Here first we have to decide a name so we gave it a name fetchAlbums and then using the builder if we put querry after the builder it means we are not going to do anychange with the data and that is the point we are not we are just fetching the data and reading it.

// Then query is having the users which is the data which we fetched through the async thunk method then in return url = /albums means what is the path to the request to the URL means it will be stick at the end of the http://localhost:3005/users and params means what is the query string for the request as we are fetching data and want to know what we want to fetch and all.

// Then the method which means what method we are going to use which is GET and in this we are not adding anythind so we are not writing body of the request which means what we want to add in the album.
  endpoints(builder) {
    return {
      // For removing the albums
      removeAlbums:builder.mutation({
      invalidatesTags:(result , error , album)=>{
        return [{type : 'Albums' , id:album.id }]
      },
        query : (album)=>{
          return{
            url : `/albums/${album.id}`,
            method : 'DELETE'
          }
        }
      }),

      // For adding the albums
      addAlbum:builder.mutation({
        invalidatesTags : (result , error , users)=>{
          return [{type:'UsersAlbums' , id:users.id}]
        },
        query : (users)=>{
          return{
            url : '/albums',
            method: 'POST',
            body:{
              userId : users.id,
              title : faker.commerce.productName()
            }
          }

        }
      }),

      // For fetching the albums
      fetchAlbums: builder.query({
        providesTags : (result , error , users)=>{
          // return [{type:'albums' , id:users.id}]
          const tags  = result.map((album)=>{
            return {type : 'Albums' , id :album.id}
          })
          tags.push({type : 'UsersAlbums' , id:users.id})
          return tags
        },
        query: (users) => {
          return {
            url: "/albums",
            params: {
              userId: users.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

// In this we will now get acces to a hook 
export const  {useFetchAlbumsQuery , useAddAlbumMutation  , useRemoveAlbumsMutation}  = albumApi
export {albumApi}
