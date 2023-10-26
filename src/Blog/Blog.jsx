const Blog = () => {
  return (
    <div>
      <div className="bg-black py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="md:space-y-7 py-10 space-y-4 text-white max-w-2xl mx-auto">
            {" "}
            <h1 className="font-bold md:text-5xl text-[32px] px-4 text-mainColor md:text-center">
              Our Latest News
            </h1>
            <p className="text-sm md:text-base md:text-center text-left px-4 text-secondColor">
              Discover Our Blog: Explore expert insights, safe strategies,
              rewarding advice, and unwavering guidance in the ever-evolving
              world of finance. Your knowledge, our commitment
            </p>
          </div>

          <div className="grid gap-4 md:py-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            <div className="flex flex-col overflow-hidden rounded-lg border border-mainColor  ">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden md:h-56"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-white">
                  <a href="#" className="transition duration-100 ">
                    New trends in Tech
                  </a>
                </h2>

                <p className="mb-8 text-secondColor">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 cursor-pointer overflow-hidden rounded-full ">
                      <img
                        src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Brock Wegner"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span className="block text-mainColor">Mike Lane</span>
                      <span className="block text-sm text-gray-400">
                        July 19, 2021
                      </span>
                    </div>
                  </div>

                  <span className="rounded border border-mainColor px-2 py-1 text-sm text-secondColor">
                    Article
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg border border-mainColor ">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden  md:h-56"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-white">
                  <a href="#" className="transition duration-100 ">
                    Working with legacy stacks
                  </a>
                </h2>

                <p className="mb-8 text-secondColor">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 cursor-pointer overflow-hidden rounded-full ">
                      <img
                        src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by peter bucks"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span className="block text-mainColor">Jane Jackobs</span>
                      <span className="block text-sm text-gray-400">
                        April 07, 2021
                      </span>
                    </div>
                  </div>

                  <span className="rounded border border-mainColor px-2 py-1 text-sm text-secondColor">
                    Article
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg border border-mainColor ">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden  md:h-56"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-white">
                  <a href="#" className="transition duration-100 ">
                    10 best smartphones for devs
                  </a>
                </h2>

                <p className="mb-8 text-secondColor">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 cursor-pointer overflow-hidden rounded-full ">
                      <img
                        src="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Jassir Jonis"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span className="block text-mainColor">Tylor Grey</span>
                      <span className="block text-sm text-gray-400">
                        March 15, 2021
                      </span>
                    </div>
                  </div>

                  <span className="rounded border border-mainColor px-2 py-1 text-sm text-secondColor">
                    Article
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg border border-mainColor ">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden  md:h-56"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-white">
                  <a href="#" className="transition duration-100 ">
                    8 High performance Notebooks
                  </a>
                </h2>

                <p className="mb-8 text-secondColor">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 cursor-pointer overflow-hidden rounded-full ">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Aiony Haust"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span className="block text-mainColor">Ann Park</span>
                      <span className="block text-sm text-gray-400">
                        January 27, 2021
                      </span>
                    </div>
                  </div>

                  <span className="rounded border border-mainColor px-2 py-1 text-sm text-secondColor">
                    Article
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
