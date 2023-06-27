import React from "react";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUsers } from "../store";
import { useThunk } from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

export default function UserListItem({ users }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUsers);

  // For deleting the users
  const handleOnDelete = () => {
    doRemoveUser(users);
  };

  // Declaring the header to pass it in The expandblePanel component.
  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleOnDelete}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting users</div>}
      {users.name}
    </>
  );

  return (

      <ExpandablePanel header={header}> <AlbumList users={users}/> </ExpandablePanel>

  );
}
