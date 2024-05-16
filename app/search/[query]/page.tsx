import RecipeCard from "@/components/shared/RecipeCard";
import { Suspense } from "react";

async function searchRecipe(query: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    const data = await response.json();
    return data.recipes;
  } catch (error: any) {
    throw new Error(error);
  }
}

const page = async ({ params }: { params: { query: string } }) => {
  const recipes = await searchRecipe(params.query);
  return (
    <div>
      <h4 className="font-bold text-xl mb-3">Search: {params.query}</h4>
      <Suspense fallback={<p>Loading feed...</p>}>
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
        {recipes && !recipes.length && <div>No recipe found :(</div>}
      </Suspense>
    </div>
  );
};
export default page;
