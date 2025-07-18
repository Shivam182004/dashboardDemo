import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/card"
import Footer from "./components/footer"
import RoleBasedAccess from "./page/RoleBasedAccess";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome to My Website</h2>

      </section>

      <Card
        title="Explore Nature"
        description="Discover the beauty of nature through our exclusive collection of scenic images."
        imageUrl="https://www.pixelstalk.net/wp-content/uploads/2016/06/Nature-Wallpaper.jpg"
        buttonText="Read More"
      />
      <RoleBasedAccess />
      <Footer />
    </div>
    // </div>
  );
}

export default App;
