import React, { useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { SearchX } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleClick = () => {
    navigate(`/details/${input}`);
    setInput("");
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        {!isSearchVisible && (
          <button onClick={handleSearchClick}>
            <Search className="w-5 h-5 font-medium" />
          </button>
        )}
        {isSearchVisible && (
          <div className="top-full left-0 mt-2 w-full max-w-md flex gap-2">
            <Input
              type="text"
              placeholder="Search..."
              className="pl-3 pr-4 py-2 w-full"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <Button onClick={handleClick}>Search</Button>
            <Button variant="outline" onClick={handleSearchClick}>
              <SearchX />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
