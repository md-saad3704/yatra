import { Compass, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#1A1A2E] to-[#111827] text-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Compass className="text-[#FF6B35]" size={28} />
              <h3 className="font-display text-2xl font-bold">
                YĀTRĀ
              </h3>
            </div>

            <p className="leading-relaxed text-gray-400">
              Discover destinations, plan smarter
              journeys, and create unforgettable
              travel experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li className="cursor-pointer hover:text-white">
                Home
              </li>
              <li className="cursor-pointer hover:text-white">
                Destinations
              </li>
              <li className="cursor-pointer hover:text-white">
                Trip Planner
              </li>
              <li className="cursor-pointer hover:text-white">
                Analytics
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Popular Destinations
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>Manali</li>
              <li>Goa</li>
              <li>Jaipur</li>
              <li>Bali</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Contact
            </h4>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>hello@yatra.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2026 YĀTRĀ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;