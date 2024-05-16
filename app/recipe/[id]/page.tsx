import RelatedRecipes from "@/components/shared/RelatedRecipes";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function fetchSingleRecipe(id: string) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}

const page = async ({ params }: { params: { id: string } }) => {
  const recipe = await fetchSingleRecipe(params.id);
  const tagList = recipe.tags.map((tag: string, index: number) => {
    return (
      <React.Fragment key={tag}>
        <Link href={`/recipe/tags/${tag}`}>{tag}</Link>
        {index !== recipe.tags.length - 1 && ", "}
      </React.Fragment>
    );
  });
  return (
    <>
      <div className="grid gap-3 lg:grid-cols-2 grid-cols-1">
        <div className="relative ">
          <div className="bg-blue-600 text-white absolute left-0 px-2 py-1 text-sm z-10 shadow-md">
            {recipe.cuisine}
          </div>
          <AspectRatio ratio={1 / 1}>
            <Image
              src={recipe.image}
              alt={recipe.name}
              className="object-cover"
              fill
              sizes="100%"
              priority
            />
          </AspectRatio>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>{recipe.name}</CardTitle>
            <CardDescription>{tagList}</CardDescription>
            <div className="flex gap-2">
              <Rating
                value={recipe.rating}
                readOnly
                style={{ maxWidth: 100 }}
              />
              {recipe.rating}/5
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold uppercase">instructions</h4>
              <p className="text-sm">{recipe.instructions}</p>
            </div>
            <div>
              <h4 className="font-semibold uppercase">ingredients</h4>
              <ul className="text-sm list-disc pl-4">
                {recipe.ingredients.map((ing: string) => {
                  return <li key={ing}>{ing}</li>;
                })}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <RelatedRecipes cuisine={recipe.cuisine} />
      </div>
    </>
  );
};
export default page;
