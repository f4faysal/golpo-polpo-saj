import TopBar from "@/components/Navbar/TopBar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="flex-center h-screen w-full flex-col gap-3">
        <h1 className="text-30-bold border-input border-2 p-5 inline-block">
          Home
        </h1>
        <Button variant="default">Click me default</Button>
      </div>
    </>
  );
}
