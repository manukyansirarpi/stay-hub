import Home from "@/components/home";
import Error from "./error";

export const revalidate = 0;

const getRooms = async () => {
  const res = await fetch(`${process.env.API_URL}/api/rooms`);
  return res.json();
};
export default async function HomePage() {
  const data = await getRooms();

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return <Home data={data}></Home>;
}
