"use client";
import RoomItem from "@/components/room/roomItem";

import { RoomI } from "@/models/room";
import CustomPagination from "@/components/layout/customPagination";
import { useSearchParams } from "next/navigation";

interface HomeProps {
  data: {
    success: boolean;
    resultPerPage: number;
    filteredRoomCount: number;
    rooms: RoomI[];
  };
}

const Home = async ({ data }: HomeProps) => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  const { rooms, resultPerPage, filteredRoomCount } = data;

  return (
    <div>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">
          {location
            ? `${filteredRoomCount} rooms found in ${location}`
            : "All Rooms"}
        </h2>
        <a href="/search" className="ml-2 back-to-search">
          <i className="fa fa-arrow-left"></i> Back to Search
        </a>
        <div className="row mt-4">
          {rooms?.length === 0 ? (
            <div className="alert alert-danger mt-5 w-100">
              <b>No Rooms.</b>
            </div>
          ) : (
            rooms?.map((room: RoomI) => (
              <RoomItem key={room.id} room={room}></RoomItem>
            ))
          )}
        </div>
      </section>
      <CustomPagination
        resultPerPage={resultPerPage}
        filteredRoomCount={filteredRoomCount}
      />
    </div>
  );
};

export default Home;
