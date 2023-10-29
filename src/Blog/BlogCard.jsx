/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BlogCard = ({blog}) => {
    const {title,description,thumbnail,id}= blog
    return (
        <>
             <div className="flex flex-col overflow-hidden rounded-lg border border-mainColor  ">
              <a
                href="#"
                className="group relative block h-32 md:h-44 overflow-hidden"
              >
                <img
                  src={thumbnail}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-base font-medium text-white">
                  <h1 className="transition duration-100 ">
                    {title}
                  </h1>
                </h2>

                <p className="mb-8 text-sm text-secondColor">
                 {description.slice(0,90) }<Link to={`/PostDetails/${id}`} className="btn-link ml-2 text-mainColor font-semibold">Readmore</Link>
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
        </>
    );
};

export default BlogCard;