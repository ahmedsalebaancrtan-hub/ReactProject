import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Gollis University</h2>
          <p className="text-sm leading-6">
            Gollis University is committed to academic excellence, innovation, and community development.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Admissions</a></li>
            <li><a href="#" className="hover:text-white transition">Faculties</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium">Address:</span> Hargeisa, Somaliland</li>
            <li><span className="font-medium">Phone:</span> +252 63 0000000</li>
            <li><span className="font-medium">Email:</span> info@gollisuniversity.edu</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Gollis University — All Rights Reserved.
      </div>
    </footer>
  );
}
