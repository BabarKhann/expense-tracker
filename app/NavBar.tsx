'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Wallets', href: '/wallets' },
    { label: 'Transactions', href: '/transactions' },
  ];
  return (
    <nav className='flex border-b px-5 h-16 justify-center items-center bg-white mb-10'>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='text-zinc-500 hover:text-zinc-800 transition-colors'
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
