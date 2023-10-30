/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, thumbnail, id } = blog;
  return (
    <>
      <div className="flex flex-col items-center overflow-hidden rounded-lg border border-mainColor md:flex-row">
        <a className="group relative block h-32 w-full cursor-pointer shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
          <img
            src={thumbnail}
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>

        <div className="flex flex-col gap-2 p-4 lg:p-6">
          
          <h2 className=" font-bold text-white">
            <a className="transition duration-100 ">{title}</a>
          </h2>

          <p className="text-secondColor text-sm md:block hidden">{description.slice(0, 150)}</p>
          <p className="text-secondColor text-sm block md:hidden">{description.slice(0, 60)}</p>

          <div>
            <Link
              to={`/PostDetails/${id}`}
              className="font-semibold text-mainColor transition duration-100 "
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
