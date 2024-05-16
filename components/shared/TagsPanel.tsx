import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";

async function getAllTags() {
  try {
    const response = await fetch("https://dummyjson.com/recipes/tags");
    const data = response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
const TagsPanel = async () => {
  const allTags = await getAllTags();
  return (
    <div>
      <h4 className="font-bold mb-3">Tags</h4>
      {allTags && allTags.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {allTags.map((tag: string) => {
            return (
              <Link
                href={`/recipe/tags/${tag}`}
                key={tag}
                className={badgeVariants({ variant: "outline" })}
              >
                {tag}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default TagsPanel;
