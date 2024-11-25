"use client";

import React from "react";
import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchInputProps {
  onSearch: (query: string) => void;
  debounceTime?: number;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  debounceTime = 300,
  onSearch,
}) => {
  const [search, setSearch] = React.useState<string>("");

  React.useEffect(() => {
    const handleSearch = setTimeout(() => {
      onSearch(search);
    }, debounceTime);
    return () => {
      clearTimeout(handleSearch);
    };
  }, [search, onSearch, debounceTime]);

  return (
    <div className="relative w-full max-w-md md:max-w-sm">
      <Input
        placeholder="Search..."
        name="search"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm"
      />
      <SearchIcon className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
    </div>
  );
};
