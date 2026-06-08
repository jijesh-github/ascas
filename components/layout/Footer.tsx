import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { branches, navLinks, services } from '@/utils/utils';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
              ASCAS
            </h3>
            <p className="text-gray-600 text-sm">
              Providing compassionate fertility care and innovative treatments to help couples achieve their dream of
              parenthood.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(item => (
                <li key={item.lable}>
                  <Link href={item.path} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                    {item.lable}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Our Services</h3>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service}>
                  <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <ul className="space-y-3">
              {branches.map(branch => (
                <li key={branch.id} className="flex items-start">
                  <MapPin className="h-5 w-5 text-purple-500 mr-2 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{branch.clinicName}</p>
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-purple-600 text-sm">
                      {branch.address}
                    </a>
                    <a
                      href={`tel:${branch.tel}`}
                      className="mt-1 flex items-center text-gray-600 hover:text-purple-600 text-sm">
                      <Phone className="h-4 w-4 text-purple-500 mr-2" />
                      {branch.phone}
                    </a>
                  </div>
                </li>
              ))}
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-gray-600 text-sm">accumedspecialityclinic@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} ASCAS. All rights reserved.</p>
              <p className="text-gray-500 text-sm">
                Designed and developed by{' '}
                <a
                  href="https://www.acutixsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  Acutix Soft LLP
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="https://www.facebook.com/draishparth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
                aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/dr.aishparth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1306C] hover:text-[#e130a6] transition-colors"
                aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@doctormommies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-700 transition-colors"
                aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
              <Link href="/privacy-policy" className="text-gray-500 hover:text-primary text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-primary text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
