import { useState } from "react";
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
const blogs = [
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
];
function App() {
  return (
    <>
      <main className="min-h-screen flex p-32px gap-3 bg-gray-200 font-poppins">
        <div className="w-[70%] space-y-3">
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
            <BlogCard {...blogOne} />
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
            />
           
          </div>
        </div>
        <div className="flex-1 ">News</div>
      </main>
    </> // called react fragments. used to group components
  );
}

export default App;
