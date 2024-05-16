import CardSkeleton from "./CardSkeleton";

const ListSkeleton = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index: number) => {
        return <CardSkeleton key={index} />;
      })}
    </div>
  );
};
export default ListSkeleton;
