import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Fyuturex Technologies",
    template: "%s | Fyuturex",
  },
  description:
    "Fyuturex Technologies provides cutting-edge HR and tech solutions for modern businesses.",
  keywords: [
    "HR Tech",
    "Recruitment Solutions",
    "Human Resource Software",
    "Fyuturex Technologies",
    "Tech Startup India",
    "Employee Onboarding",
  ],
  metadataBase: new URL("https://hirevia.com"),
  openGraph: {
    title: "Fyuturex Technologies",
    description:
      "Fyuturex Technologies: Revolutionizing HR with modern tech solutions.",
    url: "https://hirevia.com",
    siteName: "Fyuturex Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/main.jpg",
        width: 1200,
        height: 630,
        alt: "Fyuturex Technologies - HR Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fyuturex Technologies",
    description:
      "Your partner in HR automation and tech innovation.",
    images: ["/og/main.jpg"],
    creator: "@hirevia",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: 'black',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="HR solutions, tech services, recruitment software, Fyuturex Technologies, HR tech India, modern HR platform" />
        <meta name="author" content="Fyuturex Technologies" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />


        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fyuturex Technologies" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />


        <meta name="twitter:site" content="@hirevia" />
        <meta name="twitter:creator" content="@hirevia" />

        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fyuturex Technologies",
              url: "https://hirevia.com",
              logo: "https://hirevia.com/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-XXXXXXXXXX",
                  contactType: "customer service",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/hirevia",
                "https://twitter.com/hirevia",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Navbar />
        {children}
        <Footer />

        {/* Google Analytics (optional, replace G-XXXXXXX) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
