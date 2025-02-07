"use client";
import Link from "next/link";

export default function TicketsPage() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold">Buy Your Tickets</h1>
      <p className="text-lg mt-4">Get your passes now and secure your spot at Sol Dance!</p>
      <a
        href="https://theticketing.co/e/soldancemusicandartsfestival"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to Ticketing
      </a>
    </main>
  );
}
