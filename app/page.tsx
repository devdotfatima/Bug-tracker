import Image from 'next/image';
import Card from './components/Card';

import { HiOutlineTicket, HiOutlineUsers } from 'react-icons/hi';
export default function Home() {
  return (
    <main className="w-full min-h-screen mx-auto py-6 sm:px-6 lg:px-8 lg:py-5">
      <h1 className="text-2xl text-gray-200">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card
          label="Total Tickets"
          route="/tickets"
          routelabel="Tickets"
          data={34}
          icon={<HiOutlineTicket />}
        />{' '}
        <Card
          label="Total Tickets"
          route="/tickets"
          routelabel="Tickets"
          data={34}
          icon={<HiOutlineTicket />}
        />
        <Card
          label="Total Tickets"
          route="/tickets"
          routelabel="Tickets"
          data={34}
          icon={<HiOutlineTicket />}
        />
        <Card
          label="Total Tickets"
          route="/tickets"
          routelabel="Tickets"
          data={34}
          icon={<HiOutlineTicket />}
        />
      </div>
    </main>
  );
}
