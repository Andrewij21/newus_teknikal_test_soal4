import { Employee } from "@/app/page";
import CardItem from "./CardItem";

export default function CardList({ data }: { data: Employee[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      {data.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}
