/* ===========================================================
   File       : Button.jsx
   Folder     : components/ui
   Purpose    : Reusable application button.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}) {
  const variants = {
    primary:
      "bg-[#FF6B35] text-white hover:bg-[#e85d2c]",

    secondary:
      "border border-[#FF6B35] text-[#FF6B35] bg-white hover:bg-orange-50",

    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-xl
        px-6
        py-3
        font-medium
        transition-all
        duration-300
        hover:scale-105
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;