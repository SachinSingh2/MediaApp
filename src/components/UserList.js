import React, {  useEffect } from 'react'
import { useSelector} from 'react-redux'
import { addUser, fetchUsers } from '../store'
import SkeletonLoader from './SkeletonLoader'
import Button from './Button'
import { useThunk } from '../hooks/useThunk'
import UserListItem from './UserListItem'









export default function UserList() {
    // const [isLoadingUsers , setIsLoadingUsers] = useState(false)
    // const [loadingUsersError , setLoadingUsersError] = useState(null)
    const [dofetchusers , isLoadingUsers , loadingUsersError] = useThunk(fetchUsers)

    // FOR BUTTON
    // const [isCreatingUser , setIsCreatingUser]= useState(false)
    // const [ creatingUserError , setCreatingUserError] = useState(null)
    const [doCreateUsers , isCreatingUser , creatingUserError] = useThunk(addUser)


    // const dispatch = useDispatch()

    const {data} = useSelector((state)=>{

        return state.users

    })
    // console.log(data)
    // console.log(isLoading)
    // console.log(error)



    // Using the useEffect so whenever the page render for the first time the data fetched on its own.
    useEffect(()=>{

        // Three ways two write this
        // ---------------------------First
        // dispatch(fetchUsers()).unwrap().then(()=>{
        //     setIsLoadingUsers(false)
        // }).catch((err)=>{
        //     setLoadingUsersError(err)
        //     setIsLoadingUsers(false)
        // })

        // ----------------------------Second
        // dispatch(fetchUsers()).unwrap().catch((err)=>{
        //     setLoadingUsersError(err)
        // }).finally(()=>{
        //     setIsLoadingUsers(false)
        //     // This is also a feture of the promise and it will run weather it is fullfilled or not
        // })

        // --------------------------Third
        dofetchusers()

         

    } , [dofetchusers])


    // If else case for is loading and error
    // if(isLoadingUsers){
    //     return <SkeletonLoader className='h-10 w-full' times={data.length}/>
    // }

    // if(loadingUsersError){
    //     return <div>error</div>
    // }

    // Modifing it 
    let content;
    if(isLoadingUsers){
        content = <SkeletonLoader className='h-10 w-full' times={data.length}/> 
    }else if(loadingUsersError){
        content = <div>There is an erro</div>
    }else{
        content = data.map((users)=>{
            return <UserListItem key={users.id} users={users}/>
        })
    }



    // Function to add users
    const handleAddUsers = ()=>{
        // setIsCreatingUser(true)
        // dispatch(addUser()).unwrap().catch((err)=>{
        //     setCreatingUserError(err)
        // }).finally(()=>{
        //     setIsCreatingUser(false)
        // })
        doCreateUsers()
    
    }

// rendering data 
    // const renderUsers = data.map((users)=>{
    //     return <div key={users.id} className='mb-2 border rounded'>
    //         <div className='flex p-2 justify-between items-center cursor-pointer'>
    //             {users.name}
    //              </div>
    //     </div>
    // })

  return(<div>

    <div className='flex flex-row items-center justify-between m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
       <Button loading={isCreatingUser} onClick={handleAddUsers}>+Add user</Button>
       {creatingUserError && 'errorrrrrrrrrrrrrrrr'}
    </div>

    {content}

  </div>
  )
}
