/* ===========================================================
   File       : SectionTitle.jsx
   Folder     : components/ui
   Purpose    : Reusable section heading.
=========================================================== */

function SectionTitle({
  children,
  className = "",
}) {
  return (
    <h2
      className={`
        mb-6
        text-3xl
        font-bold
        text-[#1A1A2E]
        ${className}
      `}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;