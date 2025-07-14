import React from "react";
import Navbar from "./components/Navbar"; 
import Card from "./components/card"

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

       {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6"> */}
      <Card
        title="Explore Nature"
        description="Discover the beauty of nature through our exclusive collection of scenic images."
        imageUrl="https://www.pixelstalk.net/wp-content/uploads/2016/06/Nature-Wallpaper.jpg"
        buttonText="Read More"
      />
    </div>
    // </div>
  );
}

export default App;
