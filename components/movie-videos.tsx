import { API_URL } from "../app/(home)/page"


const getVideos = async (id:string) =>{
    // await new Promise((resolve)=> setTimeout(resolve, 5000))
    // throw new Error('somting broke...')
    const res = await fetch(`${API_URL}/${id}/videos`)
    return res.json();
}

export default async function MovieVideos({id}:{id:string}){
    const videos = await getVideos(id)
    return(
        <h6>
            {JSON.stringify(videos)}
        </h6>
    )
}