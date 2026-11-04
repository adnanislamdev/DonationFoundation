function VideoCard({ vids, title }) {
  return (
    <figure className="rounded-2xl overflow-hidden bg-[#181847] shadow-lg">
      <video src={vids} controls preload="metadata" className="w-full aspect-video bg-black" />
      <figcaption className="px-4 py-3 text-sm text-[#d7d7f4]">{title}</figcaption>
    </figure>
  )
}

export default VideoCard
