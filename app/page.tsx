import { Questions } from "@/components/questions";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-primary">Open Lab Assignment</h1>
      <Questions />
    </main>
  );
}
