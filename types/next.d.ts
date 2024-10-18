import { UserI } from "@/models/user";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

declare module "@reduxjs/toolkit/query/react" {
  interface FetchBaseQueryError {
    data?: any;
  }
}

declare module "next/server" {
  interface NextRequest {
    user: UserI;
  }
}
