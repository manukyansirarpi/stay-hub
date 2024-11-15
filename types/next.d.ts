import { UserI } from "@/models/user";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { NextRequest } from "next/server";

declare module "next/server" {
  interface NextRequest {
    user: UserI;
  }
}

declare module "@reduxjs/toolkit/query/react" {
  interface FetchBaseQueryError {
    data?: any;
  }
}
