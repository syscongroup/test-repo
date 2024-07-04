import "@/assets/styles/globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
