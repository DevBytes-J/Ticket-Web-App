export const StatsCard = ({ title, value, color = "gray" }) => {
  const colorClasses = {
    gray: "text-gray-800",
    green: "text-green-600",
    amber: "text-amber-600",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="text-gray-600 mb-2 font-semibold">{title}</div>
      <div className={`text-4xl font-bold ${colorClasses[color]}`}>{value}</div>
    </div>
  );
};
