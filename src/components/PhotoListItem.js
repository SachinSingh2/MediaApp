import React from 'react'
import { useRemovePhotoMutation } from '../store'
import { GoTrash } from "react-icons/go";

export default function PhotoListItem({photos}) {
    const [removePhoto] = useRemovePhotoMutation()
    const handleRemovePhoto = ()=>{
        removePhoto(photos)
    };
  return (
    <div onClick={handleRemovePhoto} className='relative m-2 cursor-pointer '>
      <img className='h-20 w-20 ' src={photos.url} alt="random pic" />
      <div className='absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80'>
        <GoTrash className='text-3xl'/>
      </div>
    </div>
  )
}
