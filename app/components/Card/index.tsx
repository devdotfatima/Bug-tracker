import Link from 'next/link';
import React from 'react';
type CardProps = {
  label: string;
  route: string;
  routelabel: string;
  icon: React.ReactNode;
  data: number;
};
const Card = ({ label, route, routelabel, icon, data }: CardProps) => {
  return (
    <div className="flex flex-col h-fit bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
      <div className="p-4 md:p-5 flex justify-between gap-x-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            {label}
          </p>
          <div className="mt-1 flex items-center gap-x-1">
            <h3 className="mt-1 text-xl font-medium text-gray-800 dark:text-gray-200">
              {data}%
            </h3>
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
          {icon}
        </div>
      </div>

      <Link
        className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 rounded-b-xl dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800"
        href={route}
      >
        View {routelabel}
        <svg
          className="w-2.5 h-2.5"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Card;
