export function SearchBar() {
  return (
    <div className="bg-white rounded-md h-10 w-full flex justify-between px-4">
      <input type="text" placeholder="Search blogs" />
      <select name="" id="">
        <option value="All" selected>
          All Posts
        </option>
        <option value="Tech">Tech</option>
      </select>
    </div>
  );
}
