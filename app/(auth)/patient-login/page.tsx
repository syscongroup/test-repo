"use client";
import Image from "next/image";
import Link from "next/link";
import LoginImage from "@/assets/images/sign-in.svg";
import { useContext, useEffect, useState } from "react";
import OtpInput from "@/components/OtpInput";
import { auth } from "@/config/firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Loading } from "react-daisyui";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [otpEn, setOtpEn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingRecaptcha, setIsLoadingRecaptcha] = useState<boolean>(false)
  const [otp, setOtp] = useState<string>("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [phoneInput, setPhoneInput] = useState<string>("");
  // Validate phone number - regex validation
  const phoneRegex: RegExp = /^[6789]\d{9}$/;

  // firebase
  const router = useRouter();
  const authContext = useContext(AuthContext)

  useEffect(() => {
    otpEn && (document.querySelectorAll('.otpInput')[0] as HTMLInputElement)?.focus()
  }, [otpEn])
  useEffect(() => {
    //to be changed to middleware based protected routing
    onAuthStateChanged(auth, (user) => {
      if (user) {
        authContext?.setUser({ phoneNumber: user.phoneNumber! })

        router.push('/patient-profile')
        if (typeof localStorage === "object") localStorage.setItem('user', JSON.stringify({ phoneNumber: user?.phoneNumber }))
      }
    });

    (window as any).recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        "size": "invisible",
        "callback": () => { },
        "expired-callback": () => { },
      }
    );
  }, [auth, router]);

  async function handleSendOtp() {
    setIsLoadingRecaptcha(true)
    try {
      const confirmPhoneNumber = await signInWithPhoneNumber(auth, `+91${phoneInput}`, (window as any).recaptchaVerifier)
      setConfirmationResult(confirmPhoneNumber)
      setIsLoadingRecaptcha(false)
      setOtpEn(true)
    } catch (error) {
      toast('Invalid Phone number, check the number')
      setOtpEn(false)
      setIsLoadingRecaptcha(false)

    }
  }

  async function handleOtpSubmit() {
    try {
      setIsLoading(true)
      await confirmationResult.confirm(otp)
      setOtp('')
      router.push('/patient-profile')
      setIsLoading(false)
    } catch (error) {
      toast("Entered OTP is inavlid, try again")
      otpEn && (document.querySelectorAll('.otpInput')[0] as HTMLInputElement)?.focus()
      setOtp('')
      setIsLoading(false)

    }
  }
  return (
    <div className="max-w-[1300px] mx-auto min-h-screen flex justify-center md:justify-between items-center sm:p-5 md:gap-12 bg-blue-100 md:bg-transparent flex-col md:flex-row py-3">
      <div className="md:w-1/2 px-12 md:px-0 md:block">
        <Image
          src={LoginImage}
          alt="authenticaiton"
          className="w-2/3 mx-auto"
        />
        {/* Redirect to entity login */}
        <h4 className="mt-8 md:text-lg text-center">
          For entity(Lab/Hospital) login,&nbsp;
          <Link
            href={"/login"}
            className="font-semibold text-blue-800 underline"
          >
            click here
          </Link>
        </h4>
      </div>
      <div className="w-full p-4 px-8 bg-blue-100 md:shadow-md h-fit md:shadow-blue-50 md:rounded-xl md:w-2/5 sm:p-6 sm:px-12">
        <h1 className="text-blue-100 md:my-8 hidden md:block text-2xl font-bold tracking-wide text-center sm:text-3xl sm:text-start md:text-slate-600">
          Sign in
        </h1>
        <form action="">
          {!otpEn && (
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-2 font-semibold text-slate-700"
              >
                Mobile
              </label>
              <div className="relative">
                <span className="absolute text-slate-500 h-full w-[3.25rem] flex justify-center items-center rounded-l-lg bg-blue-200 border-[1px] border-blue-200 font-semibold left-0">
                  +91
                </span>
                <input
                  id="phone"
                  type="number"
                  value={phoneInput}
                  autoFocus
                  onChange={(e) => setPhoneInput(e.target.value.trim())}
                  onWheel={() => document.getElementById("phone")?.blur()}
                  onKeyDown={(e) => {
                    (e.code === "KeyE" ||
                      e.key === "ArrowDown" ||
                      e.key === "ArrowUp") &&
                      e.preventDefault();
                  }}
                  className="border-[1px] border-blue-200 outline-none focus:ring-[3px] ring-offset-2 rounded-lg indent-16 py-3 w-full"
                />
              </div>
            </div>
          )}
          {otpEn && (
            <div className="flex flex-col mt-7">
              <span className="text-sm md:text-base text-center mb-5 font-medium text-slate-700">
                We've sent an OTP to +91{phoneInput},&nbsp;
                <button
                  onClick={() => setOtpEn(false)}
                  className="underline text-blue-800"
                >
                  wrong number?
                </button>
              </span>
              <label
                htmlFor="otp"
                className="mb-2 font-semibold text-slate-700 text-center"
              >
                Enter OTP
              </label>
              <div className="flex justify-center items-center gap-4">
                <OtpInput value={otp} onChange={(val) => setOtp(val)} />
              </div>
            </div>
          )}
          <div className="flex justify-center items-center mt-4">
            <div id="recaptcha-container"></div>
          </div>
          <button
            type="button"
            onClick={() => {
              if (phoneRegex.test(phoneInput)) {
                otpEn ? handleOtpSubmit() : handleSendOtp()
              } else {
                toast("Invalid phone number, enter a 10 digit, valid indian number.")
              };
            }}
            className="w-full py-2 mt-8 font-bold text-gray-100 bg-blue-800 rounded-full flex justify-center"
          >
            {otpEn ? isLoading ? "Logging in" : "Log in" : (!otpEn && isLoadingRecaptcha) ? "Sending OTP" : "Get OTP"}
            {(isLoadingRecaptcha || isLoading) && <Loading className="ml-4" />}
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
            Don't have an account with onlinelabreports.com?
            <Link
              href={"/"}
              className="font-medium text-blue-800 underline cursor-pointer"
            >
              Register
            </Link>
          </p>
        </div>
        {/* <h4 className="md:hidden text-center">
          For Patient login,&nbsp;
          <Link
            href={"/patient-login"}
            className="font-semibold text-blue-800 underline"
          >
            click here
          </Link>
        </h4> */}
      </div>
    </div>
  );
};

export default LoginScreen;
