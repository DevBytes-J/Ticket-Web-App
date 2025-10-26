import { CheckCircle, Ticket, AlertCircle } from "lucide-react";

export const Features = () => (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
      Why Choose TicketFlow?
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-bold text-2xl mb-3">Easy Management</h3>
        <p className="text-gray-600">
          Create, edit, and track tickets effortlessly with our intuitive
          interface
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <Ticket className="w-8 h-8 text-amber-600" />
        </div>
        <h3 className="font-bold text-2xl mb-3">Priority System</h3>
        <p className="text-gray-600">
          Organize tickets by priority and status for maximum efficiency
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="font-bold text-2xl mb-3">Real-time Updates</h3>
        <p className="text-gray-600">
          Stay informed with instant notifications and status changes
        </p>
      </div>
    </div>
  </div>
);
