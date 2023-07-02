'use client';
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
type HeaderProps = {
  setShowSidebar: () => void;
};
const Header = ({ setShowSidebar }: HeaderProps) => {
  const [profileMenuVisibility, setProfileMenuVisibility] = useState(false);
  const handleProfileVisibility = () => {
    setProfileMenuVisibility(!profileMenuVisibility);
  };
  return (
    <div className="flex gap-4 items-center justify-between p-5  w-full bg-slate-900 h-14 text-slate-400  ">
      <div className="lg:hidden">
        <BiMenu
          className="text-2xl hover:text-slate-100 hover:ring ring-slate-300 rounded cursor-pointer duration-300"
          onClick={setShowSidebar}
        />
      </div>
      <div className="">
        <div className="text-2xl font-bold font-mono uppercase text-white p-1 ">
          🐛Tracker
        </div>
      </div>

      <div
        className="rounded-full relative hover:ring  cursor-pointer duration-300 ring-slate-300"
        onClick={handleProfileVisibility}
      >
        <img
          className="h-8 w-8 object-contain rounded-full "
          src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?t=st=1688185735~exp=1688186335~hmac=5ffe73f8c721caedc3e1434419fe405d710c95c61dba359ed102e4339852e2f7"
          alt="avatar"
        />

        <ul
          className={`absolute top-9 right-0 rounded-md pt-2 pb-2 text-black bg-slate-100 w-48 shadow-lg ${
            !profileMenuVisibility && 'invisible'
          } `}
        >
          <li className="p-2 hover:bg-slate-200">Your Profile</li>
          <li className="p-2 hover:bg-slate-200">Sign out</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
