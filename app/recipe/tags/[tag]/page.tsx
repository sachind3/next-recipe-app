import RecipeCard from "@/components/shared/RecipeCard";

async function fetchAllRecipes(tag: string) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/tag/${tag}`);
    const data = await response.json();
    return data.recipes;
  } catch (error: any) {
    throw new Error(error);
  }
}

const page = async ({ params }: { params: { tag: string } }) => {
  const recipes = await fetchAllRecipes(params.tag);
  return (
    <div>
      <h4 className="uppercase font-bold text-xl mb-3">{params.tag}</h4>
      {recipes && recipes.length > 0 && (
        <div className="grid gap-4 md:grid-cols-3">
          {recipes.map((item: any) => {
            return <RecipeCard key={item.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};
export default page;
