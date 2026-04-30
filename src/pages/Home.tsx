export default function Home() {
  return (
    <>
      {/* // <!-- ================= HEADER ================= --> */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">ShopSphere</h1>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-indigo-600 transition">
              Home
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Shop
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Categories
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Deals
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </nav>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition">
            Cart (2)
          </button>
        </div>
      </header>

      {/* <!-- ================= HERO SECTION ================= --> */}
      <section className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm mb-4 text-white">
              Summer Collection 2026
            </p>

            <h2 className="text-2xl md:text-5xl font-extrabold leading-tight mb-6">
              Discover Premium Fashion For Every Style
            </h2>

            <p className="text-md md:text-lg text-indigo-100 mb-8">
              Upgrade your wardrobe with the latest trends, premium quality, and
              unbeatable prices.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
                Shop Now
              </button>

              <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-600 transition">
                Explore More
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              // src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=448&auto=format&fit=crop"
              alt="Fashion Banner"
              className="rounded-3xl w-full max-w-lg object-cover"
              loading={"eager"}
              fetchPriority={"high"}
              width={448}
              height={672}
              decoding="auto"
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=60&w=448&auto=format&fit=crop"
              srcSet="
    https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=60&w=320&auto=format&fit=crop 320w,
    https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=60&w=448&auto=format&fit=crop 448w,
    https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=60&w=640&auto=format&fit=crop 640w
  "
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </div>
        </div>
      </section>

      <div className="content-visibility-[auto] will-change-transform contain-intrinsic-size-[1000px]">
      {/* <!-- ================= FEATURED PRODUCTS ================= --> */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-indigo-600 font-semibold mb-2">Trending Now</p>

              <h3 className="text-4xl font-bold">Featured Products</h3>
            </div>

            <button className="hidden md:block border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition">
              View All
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Product Card --> */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=249&auto=format&fit=crop"
                  alt="Sneakers"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  loading={"lazy"}
                  fetchPriority={"auto"}
                  width={249}
                  height={224}
                  decoding="async"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">Footwear</p>

                <h4 className="font-semibold text-lg mb-3">Premium Sneakers</h4>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">
                    $129
                  </span>

                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Product Card --> */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=249&auto=format&fit=crop"
                  alt="Jacket"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  loading={"lazy"}
                  fetchPriority={"auto"}
                  width={249}
                  height={224}
                  decoding="async"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">Fashion</p>

                <h4 className="font-semibold text-lg mb-3">Stylish Jacket</h4>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">
                    $89
                  </span>

                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Product Card --> */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=249&auto=format&fit=crop"
                  alt="Headphones"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  loading={"lazy"}
                  fetchPriority={"auto"}
                  width={249}
                  height={224}
                  decoding="async"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">Electronics</p>

                <h4 className="font-semibold text-lg mb-3">
                  Wireless Headphones
                </h4>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">
                    $149
                  </span>

                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Product Card --> */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=249&auto=format&fit=crop"
                  alt="Watch"
                  loading={"lazy"}
                  fetchPriority={"auto"}
                  width={249}
                  height={224}
                  decoding="async"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">Accessories</p>

                <h4 className="font-semibold text-lg mb-3">Luxury Watch</h4>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">
                    $199
                  </span>

                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ================= WHY CHOOSE US ================= --> */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-indigo-600 font-semibold mb-3">Why Choose Us</p>

            <h3 className="text-4xl font-bold">Best Shopping Experience</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-5">🚚</div>
              <h4 className="text-xl font-bold mb-3">Free Shipping</h4>
              <p className="text-gray-600">
                Fast and free delivery on all orders above $50.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-5">💳</div>
              <h4 className="text-xl font-bold mb-3">Secure Payment</h4>
              <p className="text-gray-600">
                100% secure payment methods for safe transactions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-5">⭐</div>
              <h4 className="text-xl font-bold mb-3">Premium Quality</h4>
              <p className="text-gray-600">
                Carefully curated products with premium craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ================= NEWSLETTER ================= --> */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-5">
            Subscribe To Our Newsletter
          </h3>

          <p className="text-indigo-100 mb-8">
            Get updates about new arrivals and exclusive offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-96 px-5 py-4 rounded-xl text-white outline-none"
            />

            <button className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* <!-- ================= FOOTER ================= --> */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">ShopSphere</h4>

            <p className="max-w-sm text-gray-400">
              Your trusted destination for premium shopping experiences.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <h5 className="text-white font-semibold mb-3">Company</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-3">Support</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
