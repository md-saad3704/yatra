function DestinationCard({
  name,
  image,
  category,
  price,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="h-60 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-heading text-xl font-semibold">
            {name}
          </h3>

          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
            {category}
          </span>
        </div>

        <p className="font-mono text-lg font-semibold text-[#FF6B35]">
          From {price}
        </p>
      </div>
    </div>
  );
}

export default DestinationCard;