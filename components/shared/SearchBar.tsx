"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search/${query}`);
    setQuery("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        type="text"
        placeholder="Search"
        id="query"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">
        <Search />
      </Button>
    </form>
  );
};
export default SearchBar;
