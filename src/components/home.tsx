"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import RoomItem from "@/components/room/roomItem";
import CustomPagination from "@/components/layout/customPagination";

import { RoomI } from "@/models/room";

interface HomeProps {
  data: {
    success: boolean;
    resultPerPage: number;
    filteredRoomCount: number;
    rooms: RoomI[];
  };
}

const Home = ({ data }: HomeProps) => {
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
        <Link href="/search" className="ml-2 back-to-search">
          <i className="fa fa-arrow-left"></i> Back to Search
        </Link>
        <div
          className=" mt-4"
          style={{
            columnCount: 3,
            columnGap: "16px",
            padding: "16px",
          }}
        >
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
