import { useGlobalContext } from "@/context/global";

export default function Home() {
  const g = useGlobalContext();
  console.log(g);
  return <div>Hello</div>;
}
