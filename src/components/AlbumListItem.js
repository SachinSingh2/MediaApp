import React from 'react'
import Button from './Button'
import { GoTrash } from "react-icons/go";
import ExpandablePanel from './ExpandablePanel'
import { useRemoveAlbumsMutation } from '../store';
import PhotoList from './PhotoList';

export default function AlbumListItem({album}) {

   const [ removeAlbums , results] =   useRemoveAlbumsMutation()

   const handleOnDelete = ()=>{
    removeAlbums(album)
   }

    const header = <> <Button className = 'mr-2' loading={results.isLoading} onClick={handleOnDelete}> <GoTrash/> </Button> {album.title}</>
  return (
      <ExpandablePanel header={header} key={album.id}>
         <PhotoList album={album}/>
       </ExpandablePanel>
  )
}
