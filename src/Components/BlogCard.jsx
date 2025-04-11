export function BlogCard({image, category, title, description}) {
  return (
    <div className="flex bg-white flex-col rounded-xl shadow overflow-hidden p-5">
      <img
        src={image}
        className="w-full h-56"
      />
          <h3 className="text-blue-800 text-sm text-left">{category}</h3>
      <h1 className="font-bold text-2xl text-left">
        {title}
      </h1>
      <p className="line-clamp-3 text-left">
       {description}
      </p>
    </div>
  );
}
