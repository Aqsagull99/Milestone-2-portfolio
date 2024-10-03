import Link from "next/link"

{/* Header or Navigation */}


 export default function Header (){

 return(
<header className="flex items-center justify-center bg-gray-100 p-4">
<nav>
<ul className="flex space-x-8">
<li><Link href="/" className="text-blue-500 hover:underline">Home</Link></li>
<li><Link href="/about" className="text-blue-500 hover:underline">About Us</Link></li>
<li><Link href="/our_services" className="text-blue-500 hover:underline">Our Services</Link></li>
<li><Link href="/contact_us" className="text-blue-500 hover:underline">Contact Us</Link></li>


</ul>
</nav>
</header>)}