import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function NavbarLayout() {
  return (
    <div className="container flex justify-between py-3 mx-auto z-40">
      <Link href="/" className="text-xl font-bold">
        <Image
          src="/image/wfit-logo.svg"
          alt="header"
          width={145}
          height={145}
        />
      </Link>
      <Button text="Logout" />
    </div>
  );
}
