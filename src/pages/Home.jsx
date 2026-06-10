import Hero from '../components/Hero'
import VideoCard from '../components/VideoCard'
function Home() {
    return(
        <div>
            <Hero/>
            <h1 className = "text-center text-gray-100 m-2 text-2xl">Collaborations with East Mathurapur Human Welfare Organization</h1>
            <div className="flex justify-center mx-8 mb-4">
                <VideoCard vids = "/donationdemo1.mp4" />
                <VideoCard vids = "/donationdemo2.mp4" />
            </div>
        </div>
    )
}
export default Home