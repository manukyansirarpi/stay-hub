import Error from "@/app/error";
import RoomDetails from "@/components/room/roomDetails";

interface RoomDetailsProps {
  params: {
    id: string;
  };
}

const getRoomDetails = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`, {
    next: {
      tags: ["RoomDetails"],
    },
  });
  return res.json();
};

export default async function RoomDetailsPage({ params }: RoomDetailsProps) {
  const data = await getRoomDetails(params?.id);

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return <RoomDetails data={data} />;
}

export async function generateMetadata({ params }: RoomDetailsProps) {
  const data = await getRoomDetails(params?.id);
  return {
    title: data?.room?.name,
  };
}
