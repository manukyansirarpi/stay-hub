import { ReviewI } from "@/models/room";
import React from "react";
import StarRatings from "react-star-ratings";

interface ListReviewsProps {
  reviews: ReviewI[];
}

const ListReviews = ({ reviews }: ListReviewsProps) => {
  console.log(reviews);
  return (
    <div className="reviews w-75 mb-5">
      <h3>{reviews?.length} Reviews</h3>
      <hr />

      {reviews?.map((review, i) => (
        <div className="review-card my-3" key={i}>
          <div className="row">
            <div className="col-3 col-lg-1">
              <img
                src={
                  // @ts-expect-error err
                  review?.user?.avatar
                    ? // @ts-expect-error err
                      review?.user?.avatar?.url
                    : "/images/default_avatar.jpg"
                }
                // @ts-expect-error err
                alt={review?.user?.name}
                width={60}
                height={60}
                className="rounded-circle"
              />
            </div>
            <div className="col-9 col-lg-11">
              <StarRatings
                rating={review?.rating}
                starRatedColor="#e61e4d"
                numberOfStars={5}
                starDimension="24px"
                starSpacing="1px"
                name="rating"
              />
              <p className="review_user mt-1">
                by{" "}
                {
                  // @ts-expect-error err
                  review?.user?.name
                }
              </p>
              <p className="review_comment">{review?.comment}</p>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListReviews;
