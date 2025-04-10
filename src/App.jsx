import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SearchBar } from "./Components/Search";
import { FeaturedBlogCard } from "./Components/Featuredblocard";

function App() {
  return (
    <>
      <main className="min-h-screen flex p-32px gap-3 bg-gray-200">
        <div className="w-[70%] space-y-3">
          <h1 className="font-semibold text-2xl ">Latest Blogs</h1>
          <SearchBar />
          <FeaturedBlogCard/>
        </div>
        <div className="flex-1 ">News</div>
      </main>
    </> // called react fragments. used to group components
  );
}

export default App;
