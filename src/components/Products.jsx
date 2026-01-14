import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const url =
        search.trim() === ""
          ? "https://dummyjson.com/products"
          : `https://dummyjson.com/products/search?q=${search}`;

      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    };

    const timer = setTimeout(fetchProducts, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl mb-6">Products</h2>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="no-underline text-black"
          >
            <div className="h-full flex flex-col border rounded-xl p-4 bg-white hover:shadow-md transition">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />

              <h4 className="font-semibold text-sm line-clamp-2 min-h-[40px]">
                {product.title}
              </h4>

              <p className="mt-2 mb-4 font-medium">₹ {product.price}</p>

              <div className="mt-auto">
                <button className="bg-blue-500 text-white py-2 w-full rounded-md hover:bg-blue-600 transition">
                  View
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
