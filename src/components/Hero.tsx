import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative bg-green-300 text-white p-2">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative py-16 md:py-24">
                    {/* Decorative SVG */}
                    <div className="absolute inset-0 overflow-hidden">
                        <svg
                            className="absolute top-0 left-0 w-full h-full"
                            preserveAspectRatio="xMidYMid slice"
                            fill="none"
                            viewBox="0 0 1463 502"
                            aria-hidden="true"
                        >
                            <path
                                fill="rgba(255, 255, 255, 0.1)"
                                d="M-164 329L0 473l1463-1463-164-164L0 329z"
                            />
                        </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="relative text-center">
                        <h1 className="text-[35px] font-extrabold tracking-tight sm:text-5xl">
                            Welcome to AM-Shop
                        </h1>
                        <p className="mt-6 text-xl max-w-3xl mx-auto text-black">
                            Discover our exclusive range of products designed to elevate your shopping experience. Explore now for the best deals and seamless convenience! Whether you are looking for trendy fashion, cutting-edge electronics, or home essentials, we have got you covered with unbeatable prices. 
                            Shop with confidence, knowing that each item is carefully selected to meet the highest standards of quality. Enjoy easy navigation, fast checkout, and prompt delivery, making your shopping journey a breeze. Don’t miss out on the hottest products and exclusive offers!
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/products"
                                className="inline-block bg-gray-900 text-white py-2 px-6 rounded-md font-medium hover:bg-gray-800"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
