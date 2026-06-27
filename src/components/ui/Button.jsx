/* ===========================================================
   File       : Button.jsx
   Folder     : components/ui
   Purpose    : Reusable application button.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Component
=========================================================== */

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  icon = null,
  disabled = false,
  fullWidth = false,
  className = "",
}) {
  /* ===========================================================
     Button Variants
  =========================================================== */

  const variants = {
    primary:
      "bg-[#FF6B35] text-white hover:bg-[#e85d2c]",

    outline:
      "border border-[#FF6B35] bg-white text-[#FF6B35] hover:bg-orange-50",

    danger:
      "bg-red-500 text-white hover:bg-red-600",

    ghost:
      "bg-transparent text-[#1A1A2E] hover:bg-gray-100",
  };

  /* ===========================================================
     Render
  =========================================================== */

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-xl
        px-6
        py-3

        font-medium

        transition-all
        duration-300

        disabled:cursor-not-allowed
        disabled:opacity-50

        ${fullWidth ? "w-full" : ""}

        ${variants[variant]}

        ${className}
      `}
    >
      {icon && icon}

      {children}
    </button>
  );
}

export default Button;