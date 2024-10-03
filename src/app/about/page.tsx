export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white border-4 border-indigo-400 rounded-3xl shadow-2xl relative overflow-hidden">
      
      {/* Background Animation */}
      <div className="absolute inset-0 bg-opacity-30 bg-white rounded-3xl animate-pulse"></div>

      {/* Page Content Container */}
      <div className="relative z-10 max-w-4xl w-full bg-opacity-80 bg-white p-8 rounded-lg shadow-lg">
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg border-b-4 border-yellow-400 pb-2 transition-all duration-300 ease-in-out hover:border-white hover:text-yellow-400">
          About <span className="text-yellow-400">Me</span>
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 border-l-4 border-yellow-300 pl-4 hover:border-white transition-all duration-300 ease-in-out">
          I'm a passionate developer with a strong foundation in web development. 
          My skills include{" "}
          <span className="font-bold text-yellow-400">
            HTML, CSS, JavaScript, TypeScript next'js tailwind and Bootsrap 
          </span>, and I love creating responsive and interactive websites.
        </p>

        {/* Interests */}
        <p className="text-md md:text-lg text-gray-700 mb-6 border-r-4 border-yellow-300 pr-4 hover:border-white transition-all duration-300 ease-in-out">
          In my free time, I explore new technologies and contribute to open-source projects, always looking for ways to grow and improve.
        </p>

        {/* Additional Info */}
        <p className="text-md text-gray-500">
          I believe in continuous learning and am always excited about collaborating on projects that make an impact.
        </p>
      </div>

      {/* Background Shapes */}
      <div className="absolute w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply opacity-50 animate-pulse -top-32 -right-32"></div>
      <div className="absolute w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply opacity-40 animate-ping -bottom-40 -left-24"></div>

    </section>
  );
}
