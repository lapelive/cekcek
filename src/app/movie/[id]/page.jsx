import MovieDetailsPage from "@/components/templates/MovieDetailsPage";
import { fetchDataById } from "@/utils/FetchData";

const MovieDetails = async ({ params }) => {
  const file_code = params.file_code;
  const result = await fetchDataById(file_code);

  return <MovieDetailsPage result={result} />;
};

export default MovieDetails;
