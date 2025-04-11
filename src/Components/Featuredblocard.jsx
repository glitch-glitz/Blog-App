export function FeaturedBlogCard() {
  return (
    <div className="flex bg-white rounded-12px shadow h-56 overflow-hidden">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-YBbsWULLQ0etW0z-1qVWFfC3SSfUkHKbg&s"
        className="h-full w-[30%] object-cover"
      />
      <div className="p-4 flex-1 text-left">
        <h3 className="text-blue-800 text-sm">Marketting</h3>
        <h1 className="font-bold text-2xl">
          Embrace the Power of Storytellling in Business
        </h1>
        <p className="line-clamp-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          consequuntur, soluta vitae provident repellendus pariatur. Ut, magni
          perferendis? Soluta delectus aut adipisci mollitia atque inventore
          repudiandae non repellat id officiis!
        </p>
        <div className="flex  justify-between mt-10px">
          <span>1.6k</span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}
