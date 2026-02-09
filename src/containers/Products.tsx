import ProductsCardsRows from './ProductsCardsRows';

function Products() {
  return (
    <>
      <section className="relative space-y-12 p-20 pb-0 max-md:px-6 max-md:py-10" id="products">
        <h2 className="text-4xl font-bold text-white mb-4">Product Enginerring</h2>
        <p className="text-lg text-white/80 max-w-2xl mb-10">
          Discover the impact of bespoke digital solutions tailored precisely to your business's
          distinct requirements. Our experienced team of professionals ensures you receive
          outstanding results that consistently exceed your expectations.
        </p>
      </section>
      <ProductsCardsRows />
    </>
  );
}

export default Products;
