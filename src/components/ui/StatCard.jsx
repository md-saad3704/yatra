/* ===========================================================
   File       : StatCard.jsx
   Folder     : components/ui
   Purpose    : Displays dashboard statistics.
=========================================================== */

function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <div className="mb-3">
        {icon}
      </div>

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-[#1A1A2E]">
        {value}
      </h2>

    </div>
  );
}

export default StatCard;