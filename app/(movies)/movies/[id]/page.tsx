import { Metadata } from "next"
import { Suspense } from "react"
import MovieInfo, { getMovie } from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"


type Props ={
    params: {id:string}
}

type Params = Promise<{id:string}>
export async function generateMetadata({params:{id}}:Props){
    const movie = await getMovie(id)
    return {
        title:movie.title,
    }
}

export default async function MovieDetail({params:{id}}:Props){

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