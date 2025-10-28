 export const Footer = ({ onNavigate }) => (
   <footer className="bg-gray-800 text-white py-12 px-4 mt-auto">
     <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
       {/* Brand Info */}
       <div>
         <h4 className="text-xl font-bold mb-4 text-primary">SwiftPass</h4>
         <p className="text-sm text-gray-400">
           © 2025 SwiftPass, Inc. All rights reserved.
         </p>
       </div>

       {/* Quick Links */}
       <div>
         <h4 className="font-semibold mb-4 border-b border-primary/50 pb-1">
           Quick Links
         </h4>
         <ul className="space-y-2 text-sm text-gray-300">
           <li>
             <button
               onClick={() => onNavigate("landing")}
               className="hover:text-primary transition"
             >
               Home
             </button>
           </li>
           <li>
             <a href="#" className="hover:text-primary transition">
               About Us
             </a>
           </li>
           <li>
             <a href="#" className="hover:text-primary transition">
               Event Guide
             </a>
           </li>
         </ul>
       </div>

       {/* Support */}
       <div>
         <h4 className="font-semibold mb-4 border-b border-primary/50 pb-1">
           Support
         </h4>
         <ul className="space-y-2 text-sm text-gray-300">
           <li>
             <a href="#" className="hover:text-primary transition">
               FAQ
             </a>
           </li>
           <li>
             <a href="#" className="hover:text-primary transition">
               Ticket Guarantee
             </a>
           </li>
           <li>
             <a href="#" className="hover:text-primary transition">
               Contact Support
             </a>
           </li>
         </ul>
       </div>

       {/* Follow Us */}
       <div>
         <h4 className="font-semibold mb-4 border-b border-primary/50 pb-1">
           Connect
         </h4>
         <div className="flex space-x-4">
           {/* Simple Social Icons Placeholder */}
           <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-xs hover:bg-primary transition">
             F
           </div>
           <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-xs hover:bg-primary transition">
             T
           </div>
           <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-xs hover:bg-primary transition">
             I
           </div>
         </div>
       </div>
     </div>
   </footer>
 );
export default Footer;