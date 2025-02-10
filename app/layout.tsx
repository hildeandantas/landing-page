import "@/app/globals.css";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: {
//     default: "My Awesome Website",
//     template: "%s | My Awesome Website",
//   },
//   description: "A comprehensive guide to metadata in web development",
//   openGraph: {
//     title: "Metadata Explained",
//     description: "Learn about metadata and its importance",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Metadata Insights",
//     description: "Dive deep into metadata concepts",
//   },
// };

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Hildean Dantas",
    template: "%s | Hildean Dantas",
  },
  description: "Personal Portfolio",
};

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
