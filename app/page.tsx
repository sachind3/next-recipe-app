import RecipeCard from "@/components/shared/RecipeCard";
import TagsPanel from "@/components/shared/TagsPanel";
import ListSkeleton from "@/components/shared/skeletons/ListSkeleton";
import TagSkeleton from "@/components/shared/skeletons/TagSkeleton";
import { Suspense } from "react";

async function fetchAllRecipes() {
  try {
    const response = await fetch(`https://dummyjson.com/recipes`);
    const data = await response.json();
    return data.recipes;
  } catch (error: any) {
    throw new Error(error);
  }
}

const Home = async () => {
  const recipes = await fetchAllRecipes();

  return (
    <>
      <div className="grid gap-3 lg:grid-cols-5">
        <Suspense fallback={<ListSkeleton />}>
          {recipes && recipes.length > 0 && (
            <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-4">
              {recipes.map((item: any) => {
                return (
                  <>
                    <RecipeCard key={item.id} item={item} />
                  </>
                );
              })}
            </div>
          )}
        </Suspense>
        <div className="col-span-1">
          <Suspense fallback={<TagSkeleton />}>
            <TagsPanel />
          </Suspense>
        </div>
      </div>
    </>
  );
};
export default Home;
