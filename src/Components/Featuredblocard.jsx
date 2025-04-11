const formatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  compactDisplay: "short",
});
export function FeaturedBlogCard({ image, title, description, category }) {
  return (
    <div className="flex bg-white rounded-12px shadow h-56 overflow-hidden p-5">
      <img src={image} className="h-full w-[30%] object-cover" />
      <div className="p-4 flex-1 text-left">
        <h3 className="text-blue-800 text-sm">{category}</h3>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="line-clamp-3">{description}</p>
        <div className="flex  justify-between mt-10px">
          <span>{formatter.format(1600)}</span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}
