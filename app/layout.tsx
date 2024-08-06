import "@/assets/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import MenuModal from "@/components/MenuModal";
import { AuthContextProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

type Metadata = {
  title: string;
  description: string;
  keywords: string;
};

export const metadata: Metadata = {
  title: "onlinelabreports",
  description: "A cloud-based LIS(Lab Information System) website",
  keywords: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <meta
        name="viewport"
        content="width=device-width, maximum-scale=1.0, user-scalable=no"
      ></meta>
      <AuthContextProvider>
        <body className="relative">
          <Header />
          <MenuModal />
          <main className={`${poppins.className}`}>
            {children}
          </main>
          <ToastContainer position='top-right' autoClose={3000} theme='dark' toastStyle={{ background: '#000e' }} bodyClassName={'text-gray-400 font-semibold italic'} progressStyle={{ background: 'conic-gradient(at center top, #d8b4fe, #86198f)' }} />
          <Footer />
        </body>
      </AuthContextProvider>
    </html >
  );
}
