import {
  LayoutDashboard,
  Wallet,
  BarChart3,
  Settings,
  User,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-black border-r border-zinc-800 p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          Spendly
        </h1>

        <p className="text-zinc-400 text-sm">
          Financial Clarity
        </p>
      </div>

      <nav className="space-y-2">
        <SidebarLink
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active
        />

        <SidebarLink
          icon={<Wallet size={18} />}
          label="Expenses"
        />

        <SidebarLink
          icon={<BarChart3 size={18} />}
          label="Analytics"
        />

        <SidebarLink
          icon={<Settings size={18} />}
          label="Settings"
        />
      </nav>

      <button className="w-full mt-8 bg-white text-black py-3 rounded-lg font-semibold">
        + Add Expense
      </button>

      <div className="absolute bottom-6 w-[212px]">
        <SidebarLink
          icon={<User size={18} />}
          label="Profile"
        />
      </div>
    </aside>
  );
}

function SidebarLink({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
        active
          ? "bg-zinc-800 text-white"
          : "text-zinc-400 hover:bg-zinc-900"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}