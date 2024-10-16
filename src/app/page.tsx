import Home from "@/components/home";
import Error from "./error";

export const revalidate = 0;

export const metadata = {
  title: "Home - Stay Hub",
};

const getRooms = async (searchParams: string) => {
  const urlParams = new URLSearchParams(searchParams);
  const queryString = urlParams.toString();
  const res = await fetch(`${process.env.API_URL}/api/rooms/?${queryString}`);
  return res.json();
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: string;
}) {
  const data = await getRooms(searchParams);

  if (data?.message) {
    return <Error error={data} />;
  }

  return <Home data={data}></Home>;
}
