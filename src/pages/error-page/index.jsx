import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="h-screen bg-[#E9FCFF] dark:bg-gray-900 flex flex-col md:flex-row-reverse justify-center md:items-center p-5">
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-4xl md:text-5xl text-[#00E0C2] font-bold">
          Oops! <br /> Page Not Found.
        </h1>
        <h2 className="text-sm font-bold text-brand-black">
          Sorry we can’t find the page you are looking for...
        </h2>
        <Link
          to="/"
          className="font-medium text-xl w-[150px] px-6 py-3 mt-5 bg-brand-green rounded-lg text-brand-black active:opacity-75 lg:hover:shadow-lg duration-300"
        >
          Homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
