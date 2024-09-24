import axios from "axios"


export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"a136cc0fa7b7460782d7b7c6f91f9025"
    }
})