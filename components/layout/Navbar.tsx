// AnimatedUnderlineNavbar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { navLinks } from '@/utils/utils';
import { useDoctorForm } from '@/context/DoctorFormContext';

export default function AnimatedUnderlineNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { openForm } = useDoctorForm();
  useEffect(() => {
    const scroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
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

        <nav className="space-x-10 hidden md:flex">
          {navLinks.map(link => (
            <Link
              key={link.lable}
              href={`${link.path}`}
              className="group relative text-black font-lg hover:text-primary transition-colors">
              {link.lable}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <Button className="hidden md:block bg-black text-white cursor-pointer" onClick={openForm}>
          Book Appointment
        </Button>
      </div>
    </header>
  );
}
