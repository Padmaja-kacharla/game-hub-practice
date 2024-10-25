
import genres from "../data/genres"

export interface Genre {
    id:number,
    name:string,
    image_background:string
}


 const UseGenre=()=>({data:genres,isLoading:false,error:null})

 

 export default UseGenre