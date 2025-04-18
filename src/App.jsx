import { useEffect, useState } from "react"; //
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SearchBar } from "./Components/Search";
import { FeaturedBlogCard } from "./Components/Featuredblocard";
import { BlogCard } from "./Components/BlogCard";

const blogOne = {
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxq2rx8L2_5PTUI7aA57jJ8z_NPecD2tmNWg&s",
  category: "Sales",
  title: "Embrace the Power of Storytelling in Business",
  description:
    "Illustrations are visual images, often created by an illustrator, that accompany and enhance text to help readers understand a concept or story. They can be used in various forms like pictures, diagrams, or even symbols, and are commonly found in books, magazines, and digital media. ",
};
const obj = { ...blogOne }; //the spread operator createsa copy of this
const blogTwo = {
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVtwDS9xw7hu5qmNDI-Xu9pjSXaMaz108xA&s",
  category: "Entrepreneur",
  title: "How to be a good Entrepreneur",
  description:
    "Types of Illustrations: Editorial Illustrations (used in publications like magazines and newspapers), Fashion Illustrations (used to visually represent fashion designs), and Concept Art (created for media like video games, movies, and animations to convey ideas). ",
};

//array iterating methods
//map, reduce, find,foEach, filter
const data = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxq2rx8L2_5PTUI7aA57jJ8z_NPecD2tmNWg&s",
    category: "Sales",
    title: "Embrace the Power of Storytelling in Business",
    description:
      "Illustrations are visual images, often created by an illustrator, that accompany and enhance text to help readers understand a concept or story. They can be used in various forms like pictures, diagrams, or even symbols, and are commonly found in books, magazines, and digital media. ",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVtwDS9xw7hu5qmNDI-Xu9pjSXaMaz108xA&s",
    category: "Entrepreneur",
    title: "How to be a good Entrepreneur",
    description:
      "Types of Illustrations: Editorial Illustrations (used in publications like magazines and newspapers), Fashion Illustrations (used to visually represent fashion designs), and Concept Art (created for media like video games, movies, and animations to convey ideas). ",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JIL6psr4FY8AmM-sRbRFmMIqE4Oni2yZXA&s",
    category: "Tech",
    title: "How to Tevjh",
    description:
      "Download the most popular free Illustrations vectors from Freepik. Explore AI-generated vectors and stock vectors, and take your projects to the next level ...",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5q55x__wyMIMBpwrNrC8ai8H-aNm8Rk1Ayw&s",
    category: "Bus",
    title: "Becoming",
    description:
      "Download People illustrations for free to make outstanding designs! Browse our collection and customize a vector so it better fits your projects.",
  },
];
function App() {
  // React State-> is dynamic data in a component
  const [count, setCount] = useState(0);
  const [blogs, setBlogs] = useState(data);
  console.log(blogs);
  //Update funtions---state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  {
    /**
    useEffect(() => {
    fetch('http:localhost:300/blogs')
      .then((res) => res.json())
      .then(data)=> {
      setBlogs(data)
    }
  })
    */
  }
  return (
    <>
      <main className="min-h-screen flex p-32px gap-3 bg-gray-200 font-poppins">
        <div className="w-[70%] space-y-3">
          <button
            className="border bg-amber-300 p-3"
            onClick={() => {
              console.log("Button clicked");
              setCount(count + 1);
            }}
          >
            Count {count}
          </button>

          <h1 className="font-semibold text-2xl ">Latest Blogs</h1>
          <SearchBar />
          <FeaturedBlogCard
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQPgc6O5XHwyqMU2TL1pRJW4B7CdAjak4SQ&s"
            }
            title="How much can an App make for you"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          consequuntur, soluta vitae provident repellendus pariatur. Ut, magni
          perferendis? Soluta delectus aut adipisci mollitia atque inventore
          repudiandae non repellat id officiis!"
            category="Marketting"
          />
          <div className="grid grid-cols-2 gap-6">
            {/*<BlogCard {...blogOne} />
            <BlogCard {...blogTwo} />
            <BlogCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JIL6psr4FY8AmM-sRbRFmMIqE4Oni2yZXA&s"
              category="Tech"
              title="How to Tevjh"
              description="Download the most popular free Illustrations vectors from Freepik. Explore AI-generated vectors and stock vectors, and take your projects to the next level ..."
            />
            <BlogCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5q55x__wyMIMBpwrNrC8ai8H-aNm8Rk1Ayw&s"
              category="Bus"
              title="Becoming"
              description="Download People illustrations for free to make outstanding designs! Browse our collection and customize a vector so it better fits your projects."
            />*/}
            {/*List and Keys */}
            {blogs.map((blog, index) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
            {/*
            *{blogs.map(function (blog) {
              return<BlogCard key={blog.id}{...blog}/>
            })} */}
          </div>
        </div>
        <div className="flex-1 ">
          News
          <form
            action=""
            className="border p-2 rounded-xl w-full space y-3"
            onSubmit={(e) => {
              e.preventDefault();
              console.log({ title, image, description, category });
              setBlogs([
                ...blogs,
                ...[{ title, image, description, category }],
              ]);
            }}
          >
            <div>
              <label htmlFor="">Title</label>
              <input
                type="text"
                placeholder="title"
                className="p-2 bg-white boarder w-full rounded-lg"
                onChange={(e) => {
                  setTitle(e.target.value);

                  //console.log(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="">Description</label>
              <textarea
                name=""
                id=""
                placeholder="description"
                className="p-2 bg-white boarder w-full rounded-lg"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <div>
              <label htmlFor="">Category</label>
              <input
                type="text"
                placeholder="Category"
                className="p-2 bg-white boarder w-full rounded-lg"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="image"
                className="p-2 bg-white boarder w-full rounded-lg"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </div>
            <button className="w-full p-2 bg-amber-300 rounded-full">
              Save
            </button>
          </form>
        </div>
      </main>
    </> // called react fragments. used to group components
  );
}

export default App;
