import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container h-full flex flex-col gap-12 border-t-4 border-double border-gray-600 py-8">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between grow text-xs px-8">
        <div className="flex gap-2 w-full">
          <div className="grow flex flex-col gap-1.5">
            <a href="/about" className="font-semibold">
              ABOUT
            </a>
            <a href="/about">Mission</a>
            <a href="/subscribe">Latest Issue</a>
          </div>
          <div className="grow flex flex-col gap-1.5">
            <a href="/services" className="font-semibold">
              SERVICES
            </a>
            <a href="/services/coaching">Coaching</a>
            <a href="/services/review">Review</a>
          </div>
          <div className="grow flex flex-col gap-1.5">
            <a href="/submit" className="font-semibold">
              SUBMIT
            </a>
            <a href="/submit/requirements">Requirements</a>
            <a href="/submit">Submission Form</a>
          </div>
        </div>
        <Link href="/" className="w-full md:w-1/2 relative">
          <Image
            src="/logo.png"
            alt="JAI Logo"
            fill
            objectFit="contain"
            className="hover:cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <span className="text-center text-xs">
          © 2024 The Journal of Academic Inquiry
        </span>
        <div className="flex gap-4 justify-center text-xs">
          <a href="/legal/terms">Terms of Service</a>
          <a href="/legal/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
