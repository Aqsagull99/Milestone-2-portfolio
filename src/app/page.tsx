export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white border-4 border-indigo-400 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out relative overflow-hidden max-w-screen-lg mx-auto mb-12">
      
      {/* Background Animation */}
      <div className="absolute inset-0 bg-opacity-30 bg-white rounded-3xl animate-pulse"></div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg border-b-4 border-yellow-400 pb-2 transition-all duration-300 ease-in-out hover:border-white hover:text-yellow-400">
        Welcome to <span className="text-yellow-400">My Portfolio</span>
      </h1>

      {/* Introduction */}
      <p className="text-xl md:text-2xl max-w-2xl font-medium mb-4 border-l-4 border-yellow-300 pl-4 hover:border-white transition-all duration-300 ease-in-out">
        Hi, I'm <span className="font-bold text-yellow-300">[Aqsa Gull]</span>, a passionate web developer specializing in{" "}
        <span className="text-yellow-300">HTML, CSS, JavaScript, TypeScript next'js tailwind and Bootsrap </span>
      </p>

      {/* Subtext */}
      <p className="text-md md:text-lg max-w-xl font-light mb-8 border-r-4 border-yellow-300 pr-4 hover:border-white transition-all duration-300 ease-in-out">
        Explore my projects and feel free to contact me for collaborations!
      </p>

      {/* Contact button */}
      <a
        href="/contact_us"
        className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover:text-gray-800 transition transform hover:scale-110 hover:rotate-2 shadow-lg"
      >
        Contact Me
      </a>

      
      <div className="flex flex-col md:flex-row justify-around items-center max-w-screen-lg mx-auto gap-8 mt-12">
        
        {/* About Us Section */}
        <div className="section-card bg-gray-800 p-6 rounded-lg shadow-md text-white flex-1 hover:bg-gray-700 transition duration-300">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            We are a team of dedicated web developers creating responsive and modern websites.
          </p>
        </div>

        {/* Services Section */}
        <div className="section-card bg-gray-800 p-6 rounded-lg shadow-md text-white flex-1 hover:bg-indigo-400 transition duration-300">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-lg">
            We offer a variety of services, including web design, development, and maintenance.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="section-card bg-gray-800 p-6 rounded-lg shadow-md text-white flex-1 hover:bg-blue-500 transition duration-300">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            Feel free to reach out for any inquiries or collaborations via email or phone.
          </p>
          <a
            href="/contact_us"
            className="mt-4 inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-gray-800 transition transform hover:scale-110 hover:rotate-2 shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}


