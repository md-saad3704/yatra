/* ===========================================================
   File       : Card.jsx
   Folder     : components/ui
   Purpose    : Reusable application card.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Component
=========================================================== */

function Card({
  children,
  className = "",
  padding = "md",
  hover = false,
  clickable = false,
}) {
  /* ===========================================================
     Padding Variants
  =========================================================== */

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  /* ===========================================================
     Render
  =========================================================== */

  return (
    <div
      className={`
        rounded-3xl
        bg-white
        shadow-lg

        ${paddings[padding]}

        ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" : ""}

        ${clickable ? "cursor-pointer" : ""}

        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;