import getSongsByTitle from "@/actions/getSongsByTitle";
import SearchContent from "./components/SearchContent";

type IProps = {
  searchParams: {
    title: string;
  }
};

export const revalidate = 0;

const Search = async ({ searchParams }: IProps) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <SearchContent songs={songs}/>
  ) 
}

export default Search;