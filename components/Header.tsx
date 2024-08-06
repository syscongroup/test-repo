"use client";
import { Navbar, Button, Dropdown } from "react-daisyui";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";


const dm_sans = DM_Sans({
  weight: "600",
  subsets: ["latin"],
});
const Header = () => {
  const router = useRouter()
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/patient-login") {
    return;
  }

  const authContext = useContext(AuthContext)
  const pathnameArr: string[] = ["/"];

  function toggleMenu() {
    document.body.classList.add("overflow-hidden");
    document.getElementById("menuModal")?.classList.remove("hidden");
  }

  async function handleSignOut() {
    try {
      await signOut(auth)
      authContext?.setUser(null)
      typeof localStorage === "object" && localStorage.removeItem('user')
      router.push('/patient-login')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div
      id="header"
      className={`${pathnameArr.includes(pathname.toString()) ? "bg-dawn-pink" : "bg-white"
        } px-6 sm:px-8 sticky w-full top-0 z-[100]`}
    >
      <Navbar className="mx-auto max-w-[1360px] sm:py-4 px-0">
        <Navbar.Start>
          <div className="-ml-4 md:hidden">
            <Button
              onClick={toggleMenu}
              className="text-gray-900"
              tag="label"
              color="ghost"
              shape="circle"
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </Button>
          </div>
          <Link
            href={"/"}
            className={`inline-block text-black text-lg md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via bg-purple-800 to-orange-800 ${dm_sans.className}`}
          >
            onlinelabreports.com
          </Link>
        </Navbar.Start>
        <Navbar.Center className="hidden md:block">
          <ul className="flex gap-5 tracking-wide font-semibold text-slate-800 text-[1.05rem] [&>*]:cursor-pointer">
            <Link href={"/about"}>
              <li className="transition-transform hover:translate-y-1">
                About
              </li>
            </Link>
            {/* <li className="transition-transform hover:translate-y-1">
              Products
            </li> */}
            <Link href={"/contact"}>
              <li className="transition-transform hover:translate-y-1">
                Contact
              </li>
            </Link>
            <li className="transition-transform hover:translate-y-1">Sales</li>
            <li className="transition-transform hover:translate-y-1">
              Support
            </li>
          </ul>
        </Navbar.Center>
        <Navbar.End className="gap-4 navbar-end">
          {
            authContext?.user ? <Dropdown>
              <Button className="-mr-4 sm:mr-0 bg-inherit shadow-none border-none">
                <div className="flex items-center gap-2 relative">
                  <FaUser className="text-[1.03rem]" />
                  <span className="hidden lg:inline-block font-medium text-[1.04rem]">{authContext?.user.phoneNumber}</span>
                </div>
              </Button>
              <Dropdown.Menu className="menu-sm -right-4 lg:right-5 rounded-lg mt-3 w-32 md:w-36 z-[1]">
                <Link href={'/patient-profile'}><Dropdown.Item>My Profile</Dropdown.Item></Link>
                <Dropdown.Item onClick={handleSignOut}>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              : <Button
                onClick={() => {
                  if ((typeof (window) === "object") && window?.innerWidth < 1300) {
                    router.push('/patient-login')
                  } else {
                    router.push('/login')
                  }
                }}
                className="px-4 sm:px-8 btn-sm md:btn-md border-2 rounded-full md:hover:border-blue-800 btn-outline md:hover:bg-blue-800 text-black">
                Log in
              </Button>}
          {/* <Button className="hidden md:block px-8 bg-black border-2 border-black rounded-full hover:text-black text-dawn-pink btn-outline md:hover:bg-transparent">
            Register
          </Button> */}
          {/* <Button color="ghost" shape="circle">
            <Indicator>
              <Badge
                size="xs"
                color="primary"
                className={Indicator.Item.className()}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </Indicator>
          </Button> */}
        </Navbar.End>
      </Navbar>
    </div>
  );
};

export default Header;
