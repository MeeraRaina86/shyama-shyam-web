import { getProducts } from '../lib/googleDrive';
import ProductCard from '../components/ProductCard';

// This line forces the page to fetch fresh data instead of crashing during the build
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const items = await getProducts();
  
  // Create a clean list of categories for the menu
  const categories = [...new Set(items.map(i => i.category))];

  return (
    <main className="max-w-7xl mx-auto p-4">
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold text-rose-800">Shyama Shyam Boutique</h1>
        <p className="text-gray-600">Exquisite Kashmiri Aari & Tilla Work</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          // We ensure 'item' is a plain object here
          <ProductCard key={item.id} item={{...item}} />
        ))}
      </div>
    </main>
  );
}