import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function DestinationCard({
  slug,
  name,
  image,
  category,
  price,
  rating,
}) {
  const navigate = useNavigate();
  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-4
hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Rating Badge */}
        <div className="
absolute
right-4
top-4
flex
items-center
gap-1
rounded-full
bg-white
px-3
py-1
text-sm
font-medium
shadow-md
transition-all
duration-300
group-hover:scale-110
">
          <Star
            size={14}
            className="fill-yellow-400 text-yellow-400"
          />
          {rating}
        </div>

        {/* Category Badge */}
        <div className="
absolute
right-4
top-4
flex
items-center
gap-1
rounded-full
bg-white
px-3
py-1
text-sm
font-medium
shadow-md
transition-all
duration-300
group-hover:scale-110
">
          {category}
        </div>

        {/* Destination Name */}
        <div className="absolute bottom-5 left-5">
          <h3 className="font-heading text-2xl font-bold text-white">
            {name}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <p className="font-mono text-2xl font-bold text-[#FF6B35]">
              {price}
            </p>
          </div>
        </div>

        <button
          onClick={() =>
            navigate(`/destinations/${slug}`)
          }
          className="flex items-center gap-2 font-medium text-[#FF6B35] transition-all duration-300 group-hover:translate-x-1 group-hover:gap-4"
        >
          Explore Destination
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}

export default DestinationCard;