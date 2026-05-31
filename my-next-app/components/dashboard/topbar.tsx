import {
  Bell,
  CircleHelp,
  Search,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">
      <h2 className="font-semibold">
        Overview
      </h2>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-zinc-500"
          />

          <input
            placeholder="Search transactions..."
            className="bg-zinc-900 border border-zinc-700 rounded-lg pl-10 pr-4 py-2"
          />
        </div>

        <Bell size={20} />
        <CircleHelp size={20} />

        <div className="w-10 h-10 rounded-full bg-zinc-700" />
      </div>
    </header>
  );
}