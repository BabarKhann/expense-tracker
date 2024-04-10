'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classNames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();

  console.log(currentPath);

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
            className={classNames({
              'text-zinc-950 font-bold': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
