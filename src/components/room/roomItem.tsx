"use client";
import { RoomI } from "@/models/room";
import StarRatings from "react-star-ratings";
import Image from "next/image";
import Link from "next/link";

interface RoomItemProps {
  room: RoomI;
}

const RoomItem = ({ room }: RoomItemProps) => {
  return (
    <div
      className="my-5 d-flex"
      style={{ width: "100%", height: "auto", breakInside: "avoid" }}
    >
      <div className="">
        <Image
          className="card-img-top mx-auto image my-5"
          src={
            room?.images?.length > 0
              ? room.images[0].url
              : "/images/default_room_image.jpg"
          }
          alt={room?.name}
          height={170}
          width={100}
          layout="responsive"
          objectFit="cover"
          style={{ transition: "transform 0.3s ease" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link href={`/rooms/${room?._id}`}>{room?.name}</Link>
          </h5>
          <div className="mt-auto">
            <p className="card-text mt-2">
              <b>${room?.pricePerNight}</b> / night
            </p>
          </div>
          <div>
            <div className="d-flex">
              <StarRatings
                rating={room?.ratings}
                starRatedColor="#e61e4d"
                numberOfStars={5}
                starDimension="18px"
                starSpacing="1px"
                name="rating"
              />
              <span className="no-of-reviews">
                ({room?.numOfReviews} Reviews)
              </span>
            </div>
            <Link
              className="btn view-btn mt-3 w-100"
              href={`/rooms/${room?._id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
