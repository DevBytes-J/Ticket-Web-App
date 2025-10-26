import { Edit2, Trash2 } from "lucide-react";
import { getPriorityColor, getStatusColor } from "../../utils/colors";

export const TicketCard = ({ ticket, onEdit, onDelete }) => (
  <div className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-md transition bg-white">
    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
      <h3 className="text-xl font-bold text-gray-800">{ticket.title}</h3>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(ticket)}
          className="text-indigo-600 hover:text-indigo-800 p-2 hover:bg-indigo-50 rounded-lg transition"
        >
          <Edit2 className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(ticket.id)}
          className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
    {ticket.description && (
      <p className="text-gray-600 mb-4">{ticket.description}</p>
    )}
    <div className="flex gap-2 flex-wrap">
      <span
        className={`px-4 py-2 rounded-full text-sm font-bold ${getPriorityColor(
          ticket.priority
        )}`}
      >
        {ticket.priority}
      </span>
      <span
        className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(
          ticket.status
        )}`}
      >
        {ticket.status.replace("_", " ")}
      </span>
    </div>
  </div>
);
