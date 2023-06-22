import React from "react";
import { GoTrash } from 'react-icons/go'
import Button from "./Button";
import { removeUsers } from "../store";
import { useThunk } from "../hooks/useThunk";

export default function UserListItem({ users }) {

    const [doRemoveUser , isLoading , error] = useThunk(removeUsers)


    const handleOnDelete = ()=>{
        doRemoveUser(users)
    }


  return (
    <div>
      <div className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
            <div className="flex flex-row items-center justify-between">
            <Button className='mr-3' loading={isLoading} onClick={handleOnDelete}> <GoTrash/> </Button>
            {error && <div>Error deleting users</div>}
          {users.name}
          </div>
        </div>
      </div>
    </div>
  );
}
