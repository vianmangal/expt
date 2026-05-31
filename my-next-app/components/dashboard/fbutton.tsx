import { Plus } from "lucide-react";

export default function FloatingActionButton() {
  return (
    <button
      className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-white text-black shadow-xl flex items-center justify-center"
      aria-label="Add"
      title="Add"
    >
      <Plus />
      <span className="sr-only">Add</span>
    </button>
  );
}