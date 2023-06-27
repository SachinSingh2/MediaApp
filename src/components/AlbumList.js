import React from 'react'
import { useFetchAlbumsQuery , useAddAlbumMutation } from '../store'
import  SkeletonLoader from '../components/SkeletonLoader'
// import ExpandablePanel from './ExpandablePanel';
import Button from './Button'
import AlbumListItem from './AlbumListItem';



export default function AlbumList({users}) {
  const {data , error , isFetching} = useFetchAlbumsQuery(users)
  const [addAlbum , results ] = useAddAlbumMutation()
  // console.log(data , error , isLoading)


  const handleOnAddAlbum = ()=>{
    addAlbum(users)
  }



  let content;
  if(isFetching){
    content = <SkeletonLoader className='h-10 w-full' times={3}/>
  }else if (error){
    content = <div>There is an error in this code.</div>
  }else{
    content = data.map((album )=>{

      return <AlbumListItem key={album.id} album={album}/>



      // const header = <div>{album.title}</div>
      // return <ExpandablePanel header={header} key={album.id}>
      //   {album.name}
      //   List of the photos in the albums
      // </ExpandablePanel>
    })
  }

  return (<div>

    <div className='m-2 flex flex-row items-center justify-between'> <h3 className='text-lg font-bold'>Albums for {users.name}</h3>
    <Button loading={results.isLoading} onClick={handleOnAddAlbum}>
      + Add Albums
    </Button>
    
    </div>
      <div>{content}</div>
    
    </div>
    )
}
 