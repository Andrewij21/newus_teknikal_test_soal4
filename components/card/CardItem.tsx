import { Employee } from "@/app/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardItem({ item }: { item: Employee }) {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.email}</CardDescription>
      </CardHeader>
      <CardContent className="font-medium tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi
        eius consequuntur, expedita labore qui aspernatur officiis dolore
        blanditiis ipsum.
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
