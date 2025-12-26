import { getAllProducts } from "@/services/productService";
import SearchBar from "@/components/SearchBar";
import { Product } from "@/types/product";

export const runtime = "nodejs"; 
export const dynamic = "force-dynamic";

export const metadata = {
  title: "All Products",
  description: "Browse all available products",
};

export default async function ProductsPage() {
  console.log("PRODUCTS PAGE RENDERING ON VERCEL");

  const products: Product[] = await getAllProducts();

  console.log("PRODUCTS LENGTH:", products.length);

  return <SearchBar products={products} />;
}
