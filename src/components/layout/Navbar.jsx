import {
  Ticket,
  LogOut,
  Home,
  LayoutDashboard
} from "lucide-react";
export const Navbar = ({ user, onLogout, onNavigate, currentPage }) => (
  <nav className="bg-white shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4">
      <div className="flex items-center">
        <Ticket className="w-8 h-8 text-dark-bg mr-3" />
        <span className="text-2xl font-bold text-gray-800">SwiftPass</span>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        {currentPage === "dashboard" && (
          <button
            onClick={() => onNavigate("tickets")}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
          >
            <LayoutDashboard className="w-5 h-5" />
            Tickets
          </button>
        )}
        {currentPage === "tickets" && (
          <button
            onClick={() => onNavigate("dashboard")}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
          >
            <Home className="w-5 h-5" />
            Dashboard
          </button>
        )}
        <span className="text-gray-700">Hello, {user?.name}</span>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  </nav>
);
