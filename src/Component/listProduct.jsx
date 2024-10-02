import ProductCard from "./common/productCard";
import UseFetch from "./hooks/useFetch";

const ListProduct = ({ url, tag, title }) => {
  const { data, loading, error } = UseFetch(url);

  const products = data.products;
  return (
    <div className="flex flex-col gap-10 px-4 pt-4">
      <div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <span className="font-semibold">{tag}</span>
        </div>
        <h2 className="font-semibold text-[32px]">{title}</h2>
      </div>

      <div>
        {error && <h2>failed to load the resource</h2>}
      </div>

      <div className="flex gap-[30px] items-center">
        {products && products.length > 0? (
          <div className="flex w-screen overflow-x-auto gap-7 scrollbar-hidden">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        )
      :<h2>
        No products found 
      </h2>
      }
      </div>
      <div className="flex w-full overflow-x-scroll gap-[30px] scrollbar-hidden">
        {loading &&
          Array(10)
            .fill(null)
            .map((_, i) => {
              return (
                <div className="min-w-[270px] flex flex-col gap-4" key={i}>
                  <div className="skeleton rounded w-[270px] h-[250px]"></div>
                  <div className="h-4 skeleton w-28"></div>
                  <div className="w-full h-4 skeleton"></div>
                  <div className="w-full h-4 skeleton"></div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ListProduct;
