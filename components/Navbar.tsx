"use client"

import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { BiHomeAlt2, BiCompass, BiSolidUser } from 'react-icons/bi';

import { useUser } from '@/hooks/useUser';
import useAuthModal from '@/hooks/useAuthModal';

import SearchInput from './SearchInput';
import NavigationButton from './NavigationButton';
import UserMenu from './UserMenu';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {

  const pathname = usePathname();
  const router = useRouter();
  
  const AuthModal = useAuthModal();
  const { user } = useUser();

  const routes = useMemo(() => 
      {
        return {
          home: {
            icon: BiHomeAlt2,
            label: 'Explore', 
            active: pathname !== '/', 
            href: '/',
          },
          explore: {
            icon: BiCompass,
            label: 'Search',
            active: pathname !== '/explore', 
            href: '/explore', 
          }
        }
    }, [pathname]);

  return (
    <nav 
      className="
        sticky 
        flex
        bg-black
        backdrop-blur-md 
        text-white 
        px-6 
        pt-2
        items-center 
        justify-center 
        top-0 
        border-gray-800/50
        z-10
      "
    >
      {/* Left Section - Site Icon */}
      <div className='flex-1 w-1/4'>
        <Logo />
      </div>
  
      {/* Middle Section - Navigation Controls and Explores */}
      <div className="flex-1 w-1/2 flex items-center space-x-4">
        
        <div className="
          hidden
          md:flex
          gap-x-2
          items-center
          justify-center
        ">
          <Button
            onClick={() => router.back()}
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            "
          >
            <RxCaretLeft className="text-white" size={24}/>
          </Button>
          <Button
          onClick={() => router.forward()}
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            "
          >
            <RxCaretRight className="text-white" size={24}/>
          </Button>
        </div>
        
        <NavigationButton 
          {...routes.home}
        />
        
        <SearchInput />

        <NavigationButton 
          {...routes.explore}
        />
        
      </div>

      {/* Right Section - Account Controls */}
      <div className='flex-1 w-1/4'>
        {user ? (
          <UserMenu />
        ) : (
          <Button
            onClick={AuthModal.onOpen}
            className="
              flex 
              items-center 
              space-x-2 
              bg-white/5 
              hover:bg-white/10 
              transition-colors
              rounded-full 
              max-w-[150px]
              min-w-[0px]
              px-2 
              py-1 
              ml-auto  <!-- 关键：靠右对齐 -->
              overflow-hidden
              hover:border-white/10
              backdrop-blur-sm
            "
          >
            <div className="
                flex 
                w-8 
                h-8 
                items-center 
                rounded-full 
                bg-gradient-to-br 
                from-pink-300 
                to-emerald-800 
                justify-center
              "
            >
              <BiSolidUser size={16} />
            </div>
            <span>Log in</span>
          </Button>
        )}
      </div>

    </nav>
  );

}

export default Navbar;