export const getPriorityColor = (priority) =>
  ({
    low: "bg-blue-100 text-blue-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  }[priority] || "bg-yellow-100 text-yellow-800");

export const getStatusColor = (status) =>
  ({
    open: "bg-green-600 text-green-800",
    in_progress: "bg-amber-600 text-amber-800",
    closed: "bg-gray-600 text-gray-800",
  }[status] || "bg-green-100 text-green-800");
