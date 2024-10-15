import mongoose, { Schema, Document } from "mongoose";

export interface ImageI {
  public_id: string;
  url: string;
}

export interface Review {
  user: mongoose.Schema.Types.ObjectId;
  rating: number;
  comment: string;
}

export interface Location {
  type: string;
  coordinates: number[];
  formattedAddress: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

export interface RoomI extends Document {
  name: string;
  description: string;
  pricePerNight: number;
  address: string;
  location: Location;
  guestCapacity: number;
  numOfBeds: number;
  internet: boolean;
  isPetsAllowed: boolean;
  isBreakfast: boolean;
  isAirConditioned: boolean;
  isRoomCleaning: boolean;
  numOfReviews: number;
  ratings: number;
  numberOfReviews: number;
  images: ImageI[];
  category: string;
  reviews: Review[];
  user: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

const RoomSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxLength: [200, "Name cannot be more than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter room price per night"],
    default: 0.0,
  },
  address: {
    type: String,
    required: [true, "Please enter room address"],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    formattedAddress: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please enter guest capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter number of beds"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  isBreakfast: {
    type: Boolean,
    default: false,
  },
  isAirConditioned: {
    type: Boolean,
    default: false,
  },
  isRoomCleaning: {
    type: Boolean,
    default: false,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter room category"],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please select correct category for room",
    },
  },

  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Room ||
  mongoose.model<RoomI>("Room", RoomSchema);
