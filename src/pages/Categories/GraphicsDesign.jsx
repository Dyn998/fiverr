import React from "react";

const GraphicsDesign = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <div className="relative bg-green-200 p-8 rounded-xl flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Graphics & Design</h1>
          <p className="text-lg text-gray-700">Designs to make you stand out.</p>
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg">How Fiverr Works</button>
        </div>
        <img src="/fiverr/banner-image.png" alt="Graphics Design" className="w-1/3 rounded-lg" />
      </div>

      {/* Most Popular Categories */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Most popular in Graphics & Design</h2>
        <div className="flex gap-4 mt-4">
          {['Minimalist Logo Design', 'Architecture & Interior Design', 'Image Editing', 'NFT Art', 'T-Shirts & Merchandising'].map((category, index) => (
            <button key={index} className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200">
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Explore Graphics & Design */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Explore Graphics & Design</h2>
        <div className="grid grid-cols-4 gap-6 mt-4">
          {[
            { title: 'Logo & Brand Identity', items: ['Logo Design', 'Brand Style Guides', 'Fonts & Typography', 'Business Cards & Stationery'] },
            { title: 'Web & App Design', items: ['Website Design', 'App Design', 'UX Design', 'Landing Page Design', 'Icon Design'] },
            { title: 'Art & Illustration', items: ['Illustration', 'NFT Art', 'Pattern Design', 'Portraits & Caricatures', 'Cartoons & Comics'] },
            { title: 'Marketing Design', items: ['Social Media Design', 'Email Design', 'Web Banners', 'Signage Design'] },
          ].map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <ul className="space-y-1">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-blue-600 cursor-pointer hover:underline">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Related Services */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Services Related To Graphics & Design</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {['Minimalist logo design', '3D logo design', 'Mascot logo design', 'Hand drawn logo design', 'Remove background', 'Photo restoration', 'Photo retouching', 'Gaming logo', 'Instagram design', 'Box design'].map((service, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm">
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicsDesign;
