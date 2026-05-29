import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen py-10">
      <div className="mx-auto w-full max-w-4xl px-4">
        <h1 className="my-4 text-center text-4xl font-bold">Home</h1>
        <Link href={'/products'} className="button button--primary">
          Products
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
}
