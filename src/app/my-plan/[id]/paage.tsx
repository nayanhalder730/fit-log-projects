import Details from "@/components/homePage/Details";
import { fetchALLData } from "@/lib/fetchALLData";

interface SlugPageProps {
  params: Promise<{
    id: string;
  }>;
}

const SlugPage = async ({ params }: SlugPageProps) => {
  const { id } = await params;

  const fetchData = await fetchALLData();

  const workout = fetchData.find(
    (w) => w.id === Number(id)
  );

  console.log("Workout data for ID:", workout);

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return <Details workout={workout} />;
};

export default SlugPage;