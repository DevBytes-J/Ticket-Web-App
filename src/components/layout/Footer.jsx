import { Ticket } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <Ticket className="w-6 h-6" />
            <span className="text-xl font-bold">TicketFlow</span>
          </div>
          <p className="text-gray-400 text-sm">Streamline Your Support Workflow</p>
        </div>
        <div className="text-gray-400 text-sm">
          <p>&copy; 2025 TicketFlow. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);
