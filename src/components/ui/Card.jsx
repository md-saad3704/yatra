/* ===========================================================
   File       : Card.jsx
   Folder     : components/ui
   Purpose    : Reusable card container.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-3xl
        bg-white
        p-8
        shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;