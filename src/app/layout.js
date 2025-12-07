import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Roboto } from 'next/font/google';

const quicksand = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Add weights you need
  variable: '--font-quicksand',
  display: 'swap',
});


export const metadata = {
  title: {
    default: "Hirevia Technologies",
    template: "%s | Hirevia",
  },
  icons: {
    icon: "/favicon.ico",          // General browsers
    shortcut: "/favicon.png",      // Shortcuts
    apple: "/apple-touch-icon.png" // iOS devices
  },
  manifest: "/site.webmanifest",
  description:
    "Hirevia Technologies provides cutting-edge HR and tech solutions for modern businesses.",
  keywords: [
    "HR Tech",
    "Recruitment Solutions",
    "Human Resource Software",
    "Hirevia Technologies",
    "Tech Startup India",
    "Employee Onboarding",
  ],
  metadataBase: new URL("https://hirevia.in"),
  openGraph: {
    title: "Hirevia Technologies",
    description:
      "Hirevia Technologies: Revolutionizing HR with modern tech solutions.",
    url: "https://hirevia.in",
    siteName: "Hirevia Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hireviaimg.png",
        width: 1200,
        height: 630,
        alt: "Hirevia Technologies - HR Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirevia Technologies",
    description:
      "Your partner in HR automation and tech innovation.",
    images: ["/hireviaimg.png"],
    creator: "@hirevia",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport = {
  themeColor: 'black',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quicksand.variable} ${geistMono.variable}`}>

      <head>
        <meta name="keywords" content="HR solutions, tech services, recruitment software, Hirevia Technologies, HR tech India, modern HR platform" />
        <meta name="author" content="Hirevia Technologies" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />


        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hirevia Technologies" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

        <meta name="apple-mobile-web-app-title" content="Hirevia Technologies" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <meta name="twitter:site" content="@hirevia" />
        <meta name="twitter:creator" content="@hirevia" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="" />
        {/* <link
          href='https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap'
          rel='stylesheet'
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Roboto:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link> */}

        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hirevia Technologies",
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
        {/* <Script id='theme-switcher' strategy='beforeInteractive'>
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
        </Script> */}
      </head>
      <body
        lang="en"
        className={` ${geistMono.variable}  antialiased bg-white text-black`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />

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
