import React from 'react'
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store'
import Button from './Button'
import SkeletonLoader from './SkeletonLoader'
import PhotoListItem from './PhotoListItem'


export default function PhotoList({album}) {

    const {data , isFetching , error} = useFetchPhotosQuery(album)

    const [addPhoto , addPhotoResults] = useAddPhotoMutation()

    const handleOnAddPhoto = ()=>{
        addPhoto(album)
    }



    let content
    if(isFetching){
        content = <SkeletonLoader className='h-8 w-8' times={4} />
    }else if (error){
        content = <div>Error fetching photos</div>
    }else{
        content = data.map((photos)=>{
            return <PhotoListItem key={photos.id} photos={photos} />
        })
    }


  return (<div>
    <div className='m-2 flex flex-row items-center justify-between'>
      <h3 className='text-lg font-bold '>Photos in {album.title}</h3>
      <Button onClick={handleOnAddPhoto} loading={addPhotoResults.isLoading}>+Add Photo</Button>
    </div>
    <div className='mx-8 flex flex-row flex-wrap justify-center'>{content}</div>
    </div>
  )
}
