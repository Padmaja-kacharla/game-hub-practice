import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";



export interface fetchResponse<T> {
    count:number,
    results:T[]
}

 const UseData=<T>(endpoint:string)=>{
    const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    isLoading(true);
    apiClient
      .get<fetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        isLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        isLoading(false);
      });
    return () => controller.abort();
  }, []);
  return {data, error, loading}

 }

 export default UseData; 