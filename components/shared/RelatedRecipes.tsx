import RecipeCard from "./RecipeCard";

async function fetchRelatedRecipes(cuisine: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/recipes/tag/${cuisine}?limit=3`
    );
    const data = await response.json();
    return data.recipes;
  } catch (error: any) {
    throw new Error(error);
  }
}

const RelatedRecipes = async ({ cuisine }: { cuisine: string }) => {
  const recipes = await fetchRelatedRecipes(cuisine);
  return (
    <div>
      <h4 className="text-xl font-bold mb-3">Related: {cuisine}</h4>
      {recipes && recipes.length > 0 && (
        <div className="grid gap-4 grid-cols-3">
          {recipes.map((item: any) => {
            return (
              <>
                <RecipeCard key={item.id} item={item} />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default RelatedRecipes;
