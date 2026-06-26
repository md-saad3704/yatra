/* ===========================================================
   File       : PageHeader.jsx
   Folder     : components/ui
   Purpose    : Displays a reusable page heading.
=========================================================== */

function PageHeader({
  title,
  subtitle,
}) {
  return (
    <div className="mb-12 text-center">

      <h1 className="mb-4 text-5xl font-bold text-[#1A1A2E]">
        {title}
      </h1>

      <p className="mx-auto max-w-2xl text-lg text-gray-600">
        {subtitle}
      </p>

    </div>
  );
}

export default PageHeader;