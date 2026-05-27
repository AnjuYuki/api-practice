import { fetchData } from "@/lib/get-data";
import { Product } from "@/types/product";
import { Card } from "@heroui/react";

export default async function ProductsPage() {
  const products: Product[] = await fetchData(
    "https://fakestoreapi.com/products",
  );

  return (
    <div className=" min-h-screen py-10">
      <div className=" w-full max-w-4xl mx-auto px-4">
        <div className=" grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.id}>
              <Card.Header>
                <Card.Title>{product.title}</Card.Title>
              </Card.Header>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
