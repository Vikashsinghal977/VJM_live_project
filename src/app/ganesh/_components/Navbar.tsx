"use client"
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import bgImage from "../utils/Banner.jpg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = {
    overview: {
      label: 'Overview',
      items: ['About Us', 'Mission', 'Vision', 'Values']
    },
    vardaan: {
      label: 'Vardaan Siddhi Sadhana',
      items: ['Programs', 'Schedule', 'Benefits', 'Registration']
    },
    programs: {
      label: 'Special Programs',
      items: ['Workshops', 'Retreats', 'Seminars', 'Online Events']
    },
    gifts: {
      label: 'Gifts/Souvenirs',
      items: ['Books', 'Merchandise', 'Digital Content', 'Special Items']
    }
  };

  const toggleDropdown = (key:any) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  return (
    <div
      className="relative mt-20 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="container mx-auto absolute inset-0"></div>
      {/* <div className="container sticky top-0 mx-auto z-10">
        <div className="flex items-center justify-between px-4 lg:px-28 py-4 lg:py-10">
      
          <div className="flex items-center justify-between w-full lg:w-auto">
            <img
              src="https://www.vishwajagritimission.org/wp-content/uploads/2018/01/VJM-new-logo.png"
              alt="VJM Logo"
              className="w-28 lg:w-full"
            />
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

         
          <div
            className={`lg:hidden absolute top-full left-0 right-0 bg-black/90  transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <nav className="flex flex-col items-center text-white p-4">
              {Object.entries(menuItems).map(([key, item]) => (
                <div key={key} className="w-full">
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="w-full text-center py-2 hover:text-yellow-500 flex items-center justify-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 text-red-500 transition-transform ${
                      activeDropdown === key ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <div
                    className={`bg-black/50 transition-all duration-200 ${
                      activeDropdown === key ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block py-2 px-4 hover:bg-black/30 text-center"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a
                href="#register"
                className="w-full bg-yellow-400 font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-400 text-center mt-4"
              >
                Register
              </a>
            </nav>
          </div>

         
          <nav className="hidden lg:flex mt-1 space-x-8 text-white gap-5 items-center">
            {Object.entries(menuItems).map(([key, item]) => (
              <div key={key} className="relative group">
                <button
                  className="hover:text-yellow-500 flex items-center gap-1"
                  onClick={() => toggleDropdown(key)}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 text-red-500" />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-black/50 rounded-lg min-w-[200px] py-2">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem}
                      href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 hover:bg-black/30 text-white"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

        
          <div className="hidden lg:flex">
            <a
              href="#register"
              className="bg-yellow-400 font-bold text-black px-2 py-1 rounded-md hover:bg-yellow-400"
            >
              Register
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;



// "use client"
// import React, { useState } from 'react';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import bgImage from "../utils/Banner.jpg"

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div
//       className="relative h-[80vh] bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${bgImage.src})`,
//       }}
//     >
//       {/* Overlay */}
//       <div className="container mx-auto absolute inset-0"></div>

//       {/* Content */}
//       <div className="container mx-auto relative z-10">
//         {/* Navbar */}
//         <div className="flex justify-between px-4 lg:px-28 py-4 lg:py-10">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img
//               src="https://www.vishwajagritimission.org/wp-content/uploads/2018/01/VJM-new-logo.png"
//               alt="VJM Logo"
//               className="w-28 lg:w-full"
//             />
//             {/* Mobile Menu Button */}
//             <button
//               className="ml-56 lg:hidden text-white"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="absolute top-48 left-0 right-0 lg:hidden">
//               <nav className="flex flex-col items-center text-white p-4">
//                 <a href="#overview" className="py-2 hover:text-yellow-500 flex items-center gap-1">
//                   Overview
//                   <ChevronDown className="w-4 h-4 text-red-500" />
//                 </a>
//                 <a href="#vardaan" className="py-2 hover:text-yellow-500 flex items-center gap-1">
//                   Vardaan Siddhi Sadhana
//                   <ChevronDown className="w-4 h-4 text-red-500" />
//                 </a>
//                 <a href="#programs" className="py-2 hover:text-yellow-500 flex items-center gap-1">
//                   Special Programs
//                   <ChevronDown className="w-4 h-4 text-red-500" />
//                 </a>
//                 <a href="#gifts" className="py-2 hover:text-yellow-500 flex items-center gap-1">
//                   Gifts/Souvenirs
//                   <ChevronDown className="w-4 h-4 text-red-500" />
//                 </a>
//                 <a
//                   href="#register"
//                   className="bg-yellow-400 font-bold text-black px-2 py-1 rounded-md hover:bg-yellow-400 mt-4 inline-block w-full text-center"
//                 >
//                   Register
//                 </a>
//               </nav>
//             </div>
//           )}

//           {/* Desktop Navigation - Kept exactly as original */}
//           <nav className="hidden lg:flex mt-1 space-x-8 text-white gap-5">
//             <a href="#overview" className="hover:text-yellow-500 flex items-center gap-1">
//               Overview
//               <ChevronDown className="w-4 h-4 text-red-500" />
//             </a>
//             <a href="#vardaan" className="hover:text-yellow-500 flex items-center gap-1">
//               Vardaan Siddhi Sadhana
//               <ChevronDown className="w-4 h-4 text-red-500" />
//             </a>
//             <a href="#programs" className="hover:text-yellow-500 flex items-center gap-1">
//               Special Programs
//               <ChevronDown className="w-4 h-4 text-red-500" />
//             </a>
//             <a href="#gifts" className="hover:text-yellow-500 flex items-center gap-1">
//               Gifts/Souvenirs
//               <ChevronDown className="w-4 h-4 text-red-500" />
//             </a>
//           </nav>

//           {/* Register Button - Kept exactly as original */}
//           <div className="hidden lg:flex items-end">
//             <a
//               href="#register"
//               className="bg-yellow-400 font-bold mb-7 mr-5 text-black px-2 py-1 rounded-md hover:bg-yellow-400"
//             >
//               Register
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// "use client"
// import React, { useState } from 'react';
// import { ChevronDown, Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div
//       className="relative h-[80vh] bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/Banner.jpg')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Desktop and Mobile Navbar */}
//         <div className="hidden lg:flex justify-between px-28 py-10">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img
//               src="https://www.vishwajagritimission.org/wp-content/uploads/2018/01/VJM-new-logo.png"
//               alt="VJM Logo"
//               className="w-full"
//             />
//           </div>

//           {/* Navigation */}
//           <nav className="flex mt-1 space-x-8 text-white gap-5">
//             <a href="#overview" className="hover:text-yellow-500 flex items-center gap-1">
//               Overview
//               <ChevronDown className="w-4 h-4 text-red-500" />
//             </a>
//             <a href="#vardaan" className="hover:text-yellow-500 flex items-center gap-1">
//               Vardaan Siddhi Sadhana
//               <ChevronDown className="w-4 h-4 text-red-500" />
//             </a>
//             <a href="#programs" className="hover:text-yellow-500 flex items-center gap-1">
//               Special Programs
//               <ChevronDown className="w-4 h-4 text-red-500" />
//             </a>
//             <a href="#gifts" className="hover:text-yellow-500 flex items-center gap-1">
//               Gifts/Souvenirs
//               <ChevronDown className="w-4 h-4 text-red-500" />
//             </a>
//           </nav>

//           {/* Register Button */}
//           <div className="flex items-end">
//             <a
//               href="#register"
//               className="bg-yellow-400 font-bold mb-7 mr-5 text-black px-2 py-1 rounded-md hover:bg-yellow-400"
//             >
//               Register
//             </a>
//           </div>
//         </div>

//         {/* Mobile Navbar */}
//         <div className="flex lg:hidden justify-between items-center px-4 py-4">
//           {/* Mobile Logo */}
//           <div className="flex items-center">
//             <img
//               src="https://www.vishwajagritimission.org/wp-content/uploads/2018/01/VJM-new-logo.png"
//               alt="VJM Logo"
//               className="w-32"
//             />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden absolute left-0 right-0 bg-black/90">
//             <nav className="flex flex-col text-white p-4">
//               <a href="#overview" className="py-2 hover:text-yellow-500 flex items-center gap-1">
//                 Overview
//                 <ChevronDown className="w-4 h-4 text-red-500" />
//               </a>
//               <a href="#vardaan" className="py-2 hover:text-yellow-500 flex items-center gap-1">
//                 Vardaan Siddhi Sadhana
//                 <ChevronDown className="w-4 h-4 text-red-500" />
//               </a>
//               <a href="#programs" className="py-2 hover:text-yellow-500 flex items-center gap-1">
//                 Special Programs
//                 <ChevronDown className="w-4 h-4 text-red-500" />
//               </a>
//               <a href="#gifts" className="py-2 hover:text-yellow-500 flex items-center gap-1">
//                 Gifts/Souvenirs
//                 <ChevronDown className="w-4 h-4 text-red-500" />
//               </a>
//               <a
//                 href="#register"
//                 className="bg-yellow-400 font-bold text-black px-2 py-1 rounded-md hover:bg-yellow-400 mt-4 inline-block w-fit"
//               >
//                 Register
//               </a>
//             </nav>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;