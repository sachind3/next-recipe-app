import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ item }: { item: any }) => {
  return (
    <>
      <Card>
        <Link href={`/recipe/${item.id}`}>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={item.image}
              alt={item.name}
              className="rounded-md object-cover"
              fill
              sizes="100%"
            />
          </AspectRatio>
          <CardHeader>
            <CardTitle className="text-xl">{item.name}</CardTitle>
          </CardHeader>
        </Link>
      </Card>
    </>
  );
};
export default RecipeCard;
