// AnimatedUnderlineNavbar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { navLinks } from '@/utils/utils';
import { useDoctorForm } from '@/context/DoctorFormContext';
import { PhoneIcon, Menu, X } from 'lucide-react';

export default function AnimatedUnderlineNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openForm } = useDoctorForm();

  useEffect(() => {
    const scroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`fixed top-0 w-full z-50 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center justify-center p-1.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          <Image
            src="/logo.webp"
            alt="ascas logo"
            width={64}
            height={64}
            className="rounded-md transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Nav (visible only >= 1024px) */}
        <nav className="hidden lg:flex space-x-8 xl:space-x-10">
          {navLinks.map(link => (
            <Link
              key={link.lable}
              href={link.path}
              className="group relative text-black font-lg hover:text-primary transition-colors">
              {link.lable}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Call & Button (only visible >= 1024px) */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center text-black text-base font-medium gap-2">
            <PhoneIcon className="w-5 h-5 text-pink-900" />
            <span>+91-9342521779</span>
          </div>

          <div className="h-6 w-px bg-gray-400" />

          <Button className="bg-pink-900 hover:bg-primary text-white font-medium" onClick={openForm}>
            Book Appointment
          </Button>
        </div>

        {/* Mobile / Tablet Menu Button (visible < 1024px) */}
        <button onClick={toggleMenu} className="lg:hidden text-black">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-3 space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.lable}
              href={link.path}
              className="block text-black font-medium hover:text-primary"
              onClick={() => setMenuOpen(false)}>
              {link.lable}
            </Link>
          ))}

          <div className="pt-2 border-t border-gray-200 space-y-2">
            <div className="flex items-center gap-2 text-black font-medium">
              <PhoneIcon className="w-5 h-5 text-pink-900" />
              <span>+91-9342521779</span>
            </div>
            <Button
              className="w-full bg-pink-900 hover:bg-primary text-white font-medium"
              onClick={() => {
                openForm();
                setMenuOpen(false);
              }}>
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
