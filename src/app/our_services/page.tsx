export default function Our_Services() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white border-4 border-indigo-400 rounded-3xl shadow-2xl relative overflow-hidden">
        
        {/* Background Animation */}
        <div className="absolute inset-0 bg-opacity-30 bg-white rounded-3xl animate-pulse"></div>
  
        {/* Services Section Content */}
        <div className="relative z-10 max-w-6xl w-full">
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 drop-shadow-lg border-b-4 border-yellow-400 pb-2 transition-all duration-300 ease-in-out hover:border-white hover:text-yellow-400">
            Our <span className="text-yellow-400">Services</span>
          </h1>
  
          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            
            {/* Service 1 */}
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-yellow-100">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">Web Development</h2>
              <p className="text-lg text-gray-700">
                Building responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, and TypeScript.
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-yellow-100">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">UI/UX Design</h2>
              <p className="text-lg text-gray-700">
                Crafting user-friendly and visually appealing interfaces that enhance user experience.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-yellow-100">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">Mobile App Development</h2>
              <p className="text-lg text-gray-700">
                Developing cross-platform mobile apps with great performance and user experience.
              </p>
            </div>
  
            {/* Service 4 */}
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-yellow-100">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">SEO Optimization</h2>
              <p className="text-lg text-gray-700">
                Enhancing your website's visibility on search engines to drive more traffic and increase conversions.
              </p>
            </div>
  
            {/* Service 5 */}
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-yellow-100">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">E-commerce Solutions</h2>
              <p className="text-lg text-gray-700">
                Providing complete e-commerce solutions to help businesses establish and grow their online presence.
              </p>
            </div>
  
            {/* Service 6 */}
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-yellow-100">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">Consulting</h2>
              <p className="text-lg text-gray-700">
                Offering expert advice and guidance on web development and digital strategies to help you achieve your goals.
              </p>
            </div>
  
          </div>
        </div>
  
        {/* Background Shapes for Extra Visual Appeal */}
        <div className="absolute w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply opacity-50 animate-pulse -top-32 -right-32"></div>
        <div className="absolute w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply opacity-40 animate-ping -bottom-40 -left-24"></div>
  
      </section>
    );
  }
  

  