import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="text-center">
      <h5 className="text-3xl">Page not found</h5>
      <Button asChild className="mt-4" variant={"default"}>
        <Link href={"/"}>Back to home</Link>
      </Button>
    </div>
  );
};
export default page;
