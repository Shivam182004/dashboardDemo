import React from "react";
import Navbar from "./components/Navbar"; // Make sure the path is correct

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Sample content */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome to My Website</h2>
        <p className="mt-4 text-gray-600">
          This is a simple page with a responsive navbar built using React and Tailwind CSS.
        </p>
      </section>
    </div>
  );
}

export default App;
