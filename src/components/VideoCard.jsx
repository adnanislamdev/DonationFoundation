function VideoCard({vids}){
    return(
        <div className="p-4 rounded-2xl overflow-hidden w-[600px] bg-black/60 gap-8">
            <video src= {vids} controls className="w-full" />
        </div>
    )
}
export default VideoCard

