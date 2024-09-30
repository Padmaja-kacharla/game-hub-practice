import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id:number,
    name:string
}

interface fetchGenreResponse {
    count:number,
    results:Genre[]
}

 const UseGenre=()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    isLoading(true);
    apiClient
      .get<fetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        isLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        isLoading(false);
      });
    return () => controller.abort();
  }, []);
  return {genres, error, loading }

 }

 export default UseGenre