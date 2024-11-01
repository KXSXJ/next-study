import { Metadata } from "next"
import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieInfo from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"

export const metadata :Metadata={
    title:'MovieDetail'
}



export default async function MovieDetail({params:{id}}:{params:{id:string}}){

    return(
        <div>
            <h3>Movie Detail</h3>
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