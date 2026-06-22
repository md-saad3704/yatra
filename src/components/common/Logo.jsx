// src/components/common/Logo.jsx

import { Compass } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Compass
        size={28}
        className="text-[#FF6B35]"
      />

      <span
        className="text-2xl font-bold"
        style={{ fontFamily: "Playfair Display" }}
      >
        YĀTRĀ
      </span>
    </div>
  );
}

export default Logo;