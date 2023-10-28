import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import BlogCard from "./BlogCard";

const PostDetails = () => {
  const { id } = useParams();
  const blogs = useLoaderData();
  const targetBlog = blogs?.find((blog) => blog.id === parseInt(id));
  const { title, description, thumbnail } = targetBlog;

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="lg:flex gap-10 items-start">
          <div className="lg:w-3/4 pb-20 space-y-4">
            <img
              src={thumbnail}
              className="md:h-[500px] w-full object-cover rounded"
              alt=""
            />
            <h1 className="md:text-4xl text-xl md:py-6 py-2 text-white">
              {title}
            </h1>
            <p className="text-secondColor text-sm md:text-base">{description.slice(0, 400)}</p>
            <p className="text-secondColor text-sm md:text-base">{description.slice(401, 700)}</p>
            <p className="text-secondColor text-sm md:text-base">{description.slice(701, 1400)}</p>
            <p className="text-secondColor text-sm md:text-base">{description.slice(1401)}</p>
            <button
              className="btn btn-sm bg-mainColor hover:bg-mainColor border-none"
              onClick={goBack}
            >
              Go Back
            </button>
          </div>
          <div className="lg:w-1/3 space-y-5 pb-10">
            <h1 className="text-white text-4xl font-semibold">Lastest News</h1>
            {blogs?.slice(2, 5).map((blog) => (
              <BlogCard key={blog.id} blog={blog}></BlogCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
