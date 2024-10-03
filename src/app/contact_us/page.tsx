export default function Contact_Us() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white border-4 border-indigo-400 rounded-3xl shadow-2xl relative overflow-hidden">
        
        {/* Background Animation */}
        <div className="absolute inset-0 bg-opacity-30 bg-white rounded-3xl animate-pulse"></div>
  
        {/* Contact Section Content */}
        <div className="relative z-10 max-w-4xl w-full bg-opacity-80 bg-white p-8 rounded-lg shadow-lg">
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg border-b-4 border-yellow-400 pb-2 transition-all duration-300 ease-in-out hover:border-white hover:text-yellow-400">
            Contact <span className="text-yellow-400">Me</span>
          </h1>
  
         {/* Contact Information */}
<ul className="text-lg md:text-xl text-gray-800 space-y-6 mt-8">
  <li className="w-full">
    <span>Email:</span>
    <a 
      href="mailto:aqsa.gull.dev.ai99@gmail.com" 
      className="block text-indigo-600 underline hover:text-yellow-400 transition duration-300 ml-auto max-w-full break-words"
    >
      aqsa.gull@example.com
    </a>
  </li>
  <li className="w-full">
    <span>LinkedIn:</span>
    <a 
      href="https://www.linkedin.com/in/aqsa-gullofficial99" 
      className="block text-indigo-600 underline hover:text-yellow-400 transition duration-300 ml-auto max-w-full break-words"
    >
      My LinkedIn
    </a>
  </li>
  <li className="w-full">
    <span>GitHub:</span>
    <a 
      href="https://github.com/Aqsagull99" 
      className="block text-indigo-600 underline hover:text-yellow-400 transition duration-300 ml-auto max-w-full break-words"
    >
      My GitHub
    </a>
  </li>
</ul>

        </div>
  
        {/* Background Shapes for Visual Appeal */}
         {/* <div className="absolute w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply opacity-50 animate-pulse -top-32 -right-32"></div>
        <div className="absolute w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply opacity-40 animate-ping -bottom-40 -left-24"></div>
    */}
      </section>
    );
  }




  