import { Navbar } from "../components/layout/Navbar";
import { StatsCard } from "../components/dashboard/StatsCard";
import { QuickActions } from "../components/dashboard/QuickActions";
import { Footer } from "../components/layout/Footer";

export const DashboardPage = ({ user, onLogout, onNavigate, stats }) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Navbar
      user={user}
      onLogout={onLogout}
      onNavigate={onNavigate}
      currentPage="dashboard"
    />

    <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Overview of your ticket management system
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Tickets" value={stats.total} color="gray" />
        <StatsCard title="Open" value={stats.open} color="green" />
        <StatsCard title="In Progress" value={stats.inProgress} color="amber" />
        <StatsCard title="Closed" value={stats.closed} color="gray" />
      </div>

      <QuickActions onManageTickets={() => onNavigate("tickets")} />
    </div>

    <Footer />
  </div>
);
