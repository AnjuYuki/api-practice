import { StarRating } from '@/components/atoms/rating-stars';
import { fetchData } from '@/lib/get-data';
import { Product } from '@/types/product';
import { Card } from '@heroui/react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductsPage() {
  const products: Product[] = await fetchData(
    'https://fakestoreapi.com/products',
  );

  return (
    <div className="min-h-screen py-10">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-row sm:flex-col">
              <div className="bg-background flex aspect-square w-24 min-w-24 items-center justify-center p-3 sm:h-36 sm:w-full sm:p-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <Card.Header>
                  <Card.Title className="truncate">{product.title}</Card.Title>
                  <Card.Description className="line-clamp-2">
                    {product.description}
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <div className="flex items-center gap-1">
                    <span className="text-sm">{product.rating.rate}</span>
                    <StarRating value={product.rating.rate} />
                    <span className="text-sm">
                      ({product.rating.count.toLocaleString()})
                    </span>
                  </div>

                  <p className="font-semibold">
                    ${product.price.toLocaleString()}
                  </p>
                </Card.Content>
                <Card.Footer>
                  <Link
                    href={`/products/${product.id}`}
                    className="hover:bg-muted/50 flex items-center gap-1 rounded-full px-1.5 py-0.5 transition-colors"
                  >
                    詳細
                    <ChevronRight size={16} />
                  </Link>
                </Card.Footer>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
