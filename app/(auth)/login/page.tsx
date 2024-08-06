import Image from "next/image";
import Link from "next/link";
import LoginImage from "@/assets/images/sign-in.svg";

const LoginScreen = () => {
  return (
    <div className="max-w-[1300px] mx-auto h-screen flex justify-between items-center sm:p-5 gap-12 bg-blue-100 md:bg-transparent">
      <div className="hidden w-1/2 md:block">
        <Image
          src={LoginImage}
          alt="authenticaiton"
          className="w-2/3 mx-auto"
        />
        <h4 className="mt-8 text-lg text-center">
          If you are a patient looking for a recent test report,
          <Link
            href={"/patient-login"}
            className="font-semibold text-blue-800 underline"
          >
            click here
          </Link>
        </h4>
      </div>
      <div className="w-full p-4 px-8 bg-blue-100 md:shadow-md h-fit md:shadow-blue-50 md:rounded-xl md:w-2/5 sm:p-6 sm:px-12">
        <h1 className="my-8 text-2xl font-bold tracking-wide text-center sm:text-3xl sm:text-start text-slate-600">
          Sign in
        </h1>
        <form action="">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 font-semibold text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              className="border-[1px] border-blue-200 outline-none focus:ring-[3px] ring-offset-2 rounded-lg indent-4 py-2"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="password"
              className="mb-2 font-semibold text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              className=" border-[1px] border-blue-200 outline-none focus:ring-[3px] ring-offset-2 rounded-lg indent-4 py-2"
            />
          </div>
          <Link href={"/recovery"} className="font-semibold text-blue-800">
            Forgot?
          </Link>
          <button
            type="button"
            className="w-full py-2 mt-8 font-bold text-gray-100 bg-blue-800 rounded-full"
          >
            Sign in
          </button>
        </form>
        <div className="border-b-[1px] border-slate-300 relative my-8">
          <span className="absolute p-2 text-sm font-medium -translate-x-1/2 -translate-y-1/2 bg-blue-100 -top-1/2 left-1/2">
            OR
          </span>
        </div>
        <div className="relative">
          <button
            type="button"
            className="w-full py-2 font-bold text-gray-100 rounded-full bg-slate-900"
          >
            Sign in with Google
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 w-5 h-5 translate-y-1/2 left-5"
            fill="#f2f2f2"
            viewBox="0 0 488 512"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </div>
        <div className="pb-8">
          <p className="mt-5 text-center">
            Don't have an account with onlinelabreports.com?&nbsp;
            <Link
              href={"/"}
              className="font-medium text-blue-800 underline cursor-pointer"
            >
              Register
            </Link>
          </p>
        </div>
        <h4 className="md:hidden text-center">
          For Patient login,&nbsp;
          <Link
            href={"/"}
            className="font-semibold text-blue-800 underline"
          >
            click here
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default LoginScreen;
