const SearchInput = ({ onSearchInput, value }) => {
  return (
    <div className="relative hidden md:block w-64">
      <input
        type="text"
        value={value}
        onChange={(e) => onSearchInput(e.target.value)}
        placeholder="Search for products..."
        className="border-0 w-full bg-gray-100 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-black focus:black focus:bg-white transition-colors"
      />
      <span className="absolute right-3 top-2">
        <img src="/assets/icons/search.svg" alt="Search" className="h-5 w-5" />
      </span>
    </div>
  );
};

export default SearchInput;
