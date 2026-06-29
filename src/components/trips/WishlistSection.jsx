import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import DestinationCard from "../home/DestinationCard";

import { featuredDestinations } from "../../data/featuredDestinations";
import { getWishlist } from "../../services/wishlistService";
import { useNavigate } from "react-router-dom";

function WishlistSection() {
    const navigate = useNavigate();


    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const loadWishlist = () => {
            setWishlist(getWishlist());
        };

        loadWishlist();

        window.addEventListener(
            "wishlistUpdated",
            loadWishlist
        );

        return () => {
            window.removeEventListener(
                "wishlistUpdated",
                loadWishlist
            );
        };
    }, []);

    const destinations = featuredDestinations.filter(
        (destination) =>
            wishlist.includes(destination.id)
    );

    if (destinations.length === 0) {
        return (
            <section className="mb-16 rounded-3xl bg-white p-12 text-center shadow-sm">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
                    <Heart
                        size={38}
                        className="text-red-500"
                    />
                </div>

                <h2 className="text-3xl font-bold text-[#1A1A2E]">
                    Your Wishlist is Empty
                </h2>

                <p className="mx-auto mt-4 max-w-lg text-gray-500">
                    Save your favourite destinations and they'll
                    appear here for quick access.
                </p>

                <button
                    onClick={() => navigate("/destinations")}
                    className="mt-8 rounded-xl bg-[#FF6B35] px-8 py-4 font-medium text-white transition hover:bg-[#e85d2c]"
                >
                    Explore Destinations
                </button>

            </section>
        );
    }
    return (
        <section className="mb-16">

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <h2 className="flex items-center gap-3 text-3xl font-bold">

                        <Heart
                            className="fill-red-500 text-red-500"
                            size={28}
                        />

                        Wishlist

                    </h2>

                    <p className="mt-2 text-gray-500">

                        {destinations.length} saved destination
                        {destinations.length > 1 && "s"}

                    </p>

                </div>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                {destinations.map((destination) => (

                    <DestinationCard
                        key={destination.id}
                        {...destination}
                    />

                ))}

            </div>

        </section>
    );
}

export default WishlistSection;