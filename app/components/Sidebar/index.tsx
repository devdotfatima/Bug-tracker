'use client';
import React, { useState } from 'react';
import Header from './Header';
import Link from 'next/link';
export type MenuItem = {
  id: number;
  label: string;
  icon: React.ReactNode;
  route: string;
  submenus?: MenuItem[];
};
type SidebarProps = {
  children: React.ReactNode;
  menuItems: MenuItem[];
};
const Sidebar = ({ children, menuItems }: SidebarProps) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeSubMenu, setActiveSubMenu] = useState<null | Number>(null);

  const handleMenuItemClick = (id: number) => {
    if (activeSubMenu) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(id);
    }
  };
  const handleMenuItemHover = (id: number) => {
    if (id) {
      setActiveSubMenu(null);
    }
    setActiveSubMenu(id);
  };

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <Header setShowSidebar={handleShowSidebar} />
      <div className="flex relative">
        <div
          className={`bg-gray-900 absolute w-full lg:w-64 md:w-1/2 h-screen text-slate-50 ${
            showSidebar ? 'block' : 'hidden'
          } lg:block`}
        >
          <ul className="flex flex-col gap-5 text-lg  p-4 ">
            {menuItems.map((item) => (
              <>
                <li
                  className="flex gap-2 items-center cursor-pointer hover:bg-slate-100/30 rounded-lg hover:p-1"
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  onMouseEnter={() => handleMenuItemHover(item.id)}
                >
                  <div className="text-2xl">{item.icon}</div>

                  <div>
                    <Link href={item.route}>{item.label}</Link>
                  </div>
                  {item.submenus ? (
                    <div className="text-2xl ml-auto">
                      {' '}
                      {item.submenus && activeSubMenu === item.id ? '-' : '+'}
                    </div>
                  ) : null}
                </li>
                {activeSubMenu === item.id && item.submenus && (
                  <ul className="pl-4 ">
                    {item.submenus?.map((submenu) => (
                      <li
                        key={submenu.id}
                        className="flex items-center cursor-pointer hover:bg-slate-100/30 pb-4 rounded-lg hover:p-1"
                      >
                        <div className="text-2xl">{submenu.icon}</div>

                        <div>
                          {' '}
                          <Link href={submenu.route}> {submenu.label}</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>

        <div className=" w-full">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
