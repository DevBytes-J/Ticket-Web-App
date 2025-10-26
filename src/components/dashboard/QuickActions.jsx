import { LayoutDashboard } from "lucide-react";

export const QuickActions = ({ onManageTickets }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
    <button
      onClick={onManageTickets}
      className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition inline-flex items-center gap-2"
    >
      <LayoutDashboard className="w-5 h-5" />
      Manage Tickets
    </button>
  </div>
);
