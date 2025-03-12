
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "relative px-4 py-2 text-white/80 hover:text-white transition-colors duration-200",
          isActive && "text-white"
        )
      }
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-luna-blue/0 transition-all duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100 group-hover:bg-luna-blue/70"></span>
    </NavLink>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center group">
          <span className="text-3xl font-bold tracking-tight">
            lun<span className="text-luna-blue">a</span>
            <span className="text-luna-blue text-2xl">.</span>
          </span>
        </NavLink>

        <nav className="hidden md:flex space-x-1 items-center">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/features">Features</NavItem>
          <NavItem to="/pricing">Pricing</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <NavLink
          to="/get-started"
          className="bg-luna-blue hover:bg-luna-blue-light text-white px-6 py-2 rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-luna-blue/30"
        >
          Get Started
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
