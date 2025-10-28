import React, { useMemo } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export const DashboardPage = ({ user, onLogout, onNavigate, tickets = [] }) => {
  // ✅ Compute stats directly from tickets prop
  const stats = useMemo(() => {
    return {
      total: tickets.length,
      open: tickets.filter((t) => t.status === "open").length,
      in_progress: tickets.filter((t) => t.status === "in_progress").length,
      resolved: tickets.filter((t) => t.status === "closed").length,
    };
  }, [tickets]);

  const statItems = [
    {
      name: "Total Tickets",
      value: stats.total,
      color: "bg-indigo-600",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-3-3 1.41-1.41L11 14.17l4.59-4.59L17 11l-6 6z",
    },
    {
      name: "Open Tickets",
      value: stats.open,
      color: "bg-green-600",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-3-3 1.41-1.41L11 14.17l4.59-4.59L17 11l-6 6z",
    },
    {
      name: "In Progress",
      value: stats.in_progress,
      color: "bg-amber-600",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-3-3 1.41-1.41L11 14.17l4.59-4.59L17 11l-6 6z",
    },
    {
      name: "Resolved Tickets",
      value: stats.resolved,
      color: "bg-gray-600",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-3-3 1.41-1.41L11 14.17l4.59-4.59L17 11l-6 6z",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar
        user={user}
        onLogout={onLogout}
        onNavigate={onNavigate}
        currentPage="dashboard"
      />

      <main className="p-8 bg-gray-50 flex-grow">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900">Dashboard</h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {statItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-2xl border border-gray-100 transition transform hover:scale-[1.02]`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${item.color} text-white`}>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.name}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ticket Actions */}
        <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 border-b pb-3">
            Ticket Actions
          </h3>
          <p className="text-gray-600 mb-6">
            Manage, view, and create new support tickets for the platform.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => onNavigate("tickets")}
              className="py-3 px-8 text-lg font-bold rounded-lg bg-dark-bg text-white shadow-lg transition transform hover:bg-primary hover:scale-[1.01]"
            >
              Go to Ticket Management
            </button>
            <button
              onClick={() => onNavigate("tickets", { openForm: true })}
              className="py-3 px-8 text-lg font-bold rounded-lg bg-gray-100 text-gray-900 shadow-lg transition transform hover:bg-gray-200 hover:scale-[1.01]"
            >
              Create New Ticket
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
