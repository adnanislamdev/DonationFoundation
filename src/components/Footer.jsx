// function Footer(){
//     return(
//         <div className = "text-sm pl-10 text-gray-100 bg-[#070715]/80 flex-col justify-start bottom-0 w-full rounded-lg">
//             <h1>Contact Information</h1>
//             <p>
//                 Maimuna Seikh<br/>
//                 Email<br/>
//                 Phone
//             </p>
//         </div>
//     )
// }
// export default Footer
// import React from 'react';
import { FaInstagram, FaFacebook} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Seikh Foundation</h3>
            <p className="text-[var(--footer-text)]">
              Giving back to the communites of Bangladesh
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-[var(--footer-text)]">
              <li>(929) 438-1758</li>
              <li>info@seikhfoundation.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/your_instagram_username/" target="_blank" rel="noopener noreferrer" className="text-[var(--footer-text)] hover:text-white transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/groups/3916143341984389/user/100007602376353/" target="_blank" rel="noopener noreferrer" className="text-[var(--footer-text)] hover:text-white transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--footer-border)] mt-8 pt-8 text-center text-[var(--footer-text)]">
          <p>&copy; 2026 Seikh Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
