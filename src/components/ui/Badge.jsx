/* ===========================================================
   File       : Badge.jsx
   Folder     : components/ui
   Purpose    : Reusable badge component.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

function Badge({
  children,
  className = "",
}) {
  return (
    <span
      className={`
        rounded-full
        bg-orange-100
        px-4
        py-2
        text-sm
        font-medium
        text-[#FF6B35]
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;