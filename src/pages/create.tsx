import axios from "axios";
import {useMutation} from "react-query";
import Alert from "../components/Alert";
import BreadCrumb from "../components/BreadCrumb";
import RoomForm, { RoomValues } from "../components/RoomForm";

export default function Create() {
  const {isLoading, isSuccess, isError, mutate} = useMutation((room: RoomValues) => {
    return axios.post("/api/rooms/", room);
  });

  return (
    <div className="max-w-[80%] mx-auto mt-11">
      <BreadCrumb label={"Add Room"} />
      <div className="bg-white mx-auto mt-11 p-5 rounded-lg shadow-md">
        <h3 className="text-lg text-center mb-2"> Add A Room</h3>
        <RoomForm isLoading={isLoading} onSubmit={(room) => mutate(room)} />
        {isError && (
          <div className="mt-5">
            <Alert
              label="There was a sever error, could not add a room!"
              variant="warning"
            />
          </div>
        )}
        {isSuccess && (
          <div className="mt-5">
            <Alert label="Room has been created!" variant="success" />
          </div>
        )}
      </div>
    </div>
  );
}
