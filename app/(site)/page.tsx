import getSongs from "@/actions/getSongs";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  return (
    <main>
      <PageContent songs={songs} />
    </main>
  )
};