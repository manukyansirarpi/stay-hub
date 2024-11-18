import { RoomI } from "@/models/room";
import React from "react";

interface RoomFeaturesProps {
  room: RoomI;
}

const RoomFeatures = ({ room }: RoomFeaturesProps) => {
  return (
    <div className="features mt-5">
      <h3 className="mb-4">Features:</h3>
      <div className="room-feature">
        <i className="fa fa-cog fa-fw fa-users"></i>
        <p>{room?.guestCapacity} Guests</p>
      </div>
      <div className="room-feature">
        <i className="fa fa-cog fa-fw fa-bed"></i>
        <p>{room?.numOfBeds} Beds</p>
      </div>
      <div className="room-feature">
        <i
          className={
            room?.isBreakfast
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
        ></i>
        <p>Breakfast</p>
      </div>
      <div className="room-feature">
        <i
          className={
            room?.internet
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
        ></i>
        <p>Internet</p>
      </div>
      <div className="room-feature">
        <i
          className={
            room?.isAirConditioned
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
        ></i>
        <p>Air Conditioned</p>
      </div>
      <div className="room-feature">
        <i
          className={
            room?.isPetsAllowed
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
        ></i>
        <p>Pets Allowed</p>
      </div>
      <div className="room-feature">
        <i
          className={
            room?.isRoomCleaning
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
        ></i>
        <p>Room Cleaning</p>
      </div>
    </div>
  );
};

export default RoomFeatures;
