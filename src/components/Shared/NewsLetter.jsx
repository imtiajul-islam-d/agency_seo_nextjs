"use client";
const NewsLetter = () => {
  return (
    <section>
      <div className="flex items-center justify-center mx-auto max_w padding">
        {/* content */}
        <div className="py-20 max-w-[32.25rem]">
          <p className="mb-2 text-center pg_title">SUBSCRIBE</p>
          <h3 className="font-font_poppins font-semibold text-[1.875rem] leading-[2.813rem] text-center max-w-[30.938rem] mx-auto">
            Subscribe to get the latest news about us
          </h3>
          <p className="max-w-[30.938rem] text-[1rem] leading-[1.366rem] text-center font-font_avenir font-medium">
            Please drop your email below to get daily update about what we do
          </p>
          <div className="mt-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-center p-1 bg-white border rounded-xl sm:mx-auto font-font_avenir"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 text-gray-500 outline-none"
              />
              <button className="p-2 px-3 font-medium text-white duration-150 bg-orange-600 shadow-md outline-none rounded-xl hover:bg-neutral-50 active:bg-orange-700 focus:shadow-none sm:px-4 hover:text-orange-600 font-font_poppins">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
