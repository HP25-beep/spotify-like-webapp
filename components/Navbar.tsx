"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { RxCaretLeft, RxCaretRight,  } from 'react-icons/rx';
import { FaUserAlt } from 'react-icons/fa';

import { useUser } from '@/hooks/useUser';
import useAuthModal from '@/hooks/useAuthModal';

import SearchInput from './SearchInput';
import UserMenu from './UserMenu';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {

  const router = useRouter();
  const AuthModal = useAuthModal();
  
  const { user } = useUser();

  return (
    <nav 
      className="
        grid
        grid-cols-3
        bg-black
        backdrop-blur-md 
        text-white 
        px-6 
        pt-2
        items-center 
        justify-between 
        sticky 
        top-0 
        border-gray-800/50
        z-10
      "
    >
      {/* Left Section - Site Icon */}
      <Logo />
  
      {/* Middle Section - Navigation Controls and Explores */}
      <div className="flex items-center space-x-4">
        <div className="
          hidden
          md:flex
          gap-x-2
          items-center
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
            <RxCaretLeft className="text-white" size={30}/>
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
            <RxCaretRight className="text-white" size={30}/>
          </Button>
        </div>
        <SearchInput />
      </div>

      {/* Right Section - Account Controls */}
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
            backdrop-blur-sm <!-- 可选：轻微毛玻璃效果 -->
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
            <FaUserAlt size={16} />
          </div>
          <span>Log in</span>
        </Button>
      )}
    </nav>
  );

}

export default Navbar;