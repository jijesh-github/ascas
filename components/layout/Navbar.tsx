// AnimatedUnderlineNavbar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { branches, navLinks } from '@/utils/utils';
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
    // <header className={`fixed top-0 w-full z-50 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
    <header className={` top-0 w-full z-50 bg-white ${isScrolled ? '' : ''}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-1">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center justify-center p-1.5 bg-primary rounded-md shadow-md hover:shadow-lg transition-all duration-300">
          <Image
            src="/logo.png"
            alt="ascas logo"
            width={99}
            height={99}
            className="transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav (visible only >= 1024px) */}
        <nav className="hidden lg:flex space-x-4 xl:space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.lable}
              href={link.path}
              className="group relative whitespace-nowrap text-black font-lg hover:text-primary transition-colors">
              {link.lable}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Call & Button (only visible >= 1024px) */}
        <div className="hidden lg:flex shrink-0 items-center gap-4">
          <div className="flex min-w-[320px] flex-col gap-1">
            {branches.map(branch => (
              <a
                key={branch.id}
                href={`tel:${branch.tel}`}
                className="grid grid-cols-[150px_1fr] items-center gap-3 rounded-full border border-pink-100 px-3 py-1.5 text-xs font-medium text-black transition hover:border-pink-300 hover:bg-pink-50 hover:text-primary">
                <span className="flex items-center gap-2 whitespace-nowrap font-semibold">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-900 text-white">
                    <PhoneIcon className="w-3 h-3" />
                  </span>
                  {branch.name}
                </span>
                <span className="whitespace-nowrap text-right">{branch.phone}</span>
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-400" />

          <Button
            className="bg-primary hover:bg-primary-hover text-white font-medium cursor-pointer"
            onClick={openForm}>
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
            <div className="space-y-2">
              {branches.map(branch => (
                <a
                  key={branch.id}
                  href={`tel:${branch.tel}`}
                  className="flex items-center justify-between gap-3 rounded-lg bg-pink-50 px-3 py-2 text-black font-medium">
                  <span className="flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 text-pink-900" />
                    {branch.name}
                  </span>
                  <span className="text-sm">{branch.phone}</span>
                </a>
              ))}
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
