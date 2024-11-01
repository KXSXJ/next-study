import { Metadata } from "next"
import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo, { getMovie } from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"





interface IParmas{
    params:{id:string}
}

export async function generateMetadata({params:{id}}:IParmas){
    const movie = await getMovie(id)
    return {
        title:movie.title,
    }
}

export default async function MovieDetail({params:{id}}:IParmas){

    return(
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}> 
                {/* @ts-expect-error Async Server Component */}
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading video info</h1>}>                
                {/* @ts-expect-error Async Server Component */}
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    )
}