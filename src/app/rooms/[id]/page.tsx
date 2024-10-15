import Error from "@/app/error";
import RoomDetails from "@/components/room/roomDetails";

const getRoomDetails = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`);
  return res.json();
};

interface RoomDetailsProps {
  params: {
    id: string;
  };
}
export default async function RoomDetailsPage({ params }: RoomDetailsProps) {
  const data = await getRoomDetails(params?.id);

  if (data?.message) {
    return <Error error={data} />;
  }

  return <RoomDetails data={data} />;
}

export async function generateMetadata({ params }: RoomDetailsProps) {
  const { room } = await getRoomDetails(params?.id);
  return {
    title: room?.name,
  };
}
