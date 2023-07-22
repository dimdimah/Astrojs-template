import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function NavbarLayout() {
  return (
    <div className="container flex justify-between py-3 mx-auto">
      <Image src="/image/wfit-logo.svg" alt="header" width={145} height={145} />
      <Link href="/" className="text-xl font-bold" />
      <Button text="Login" />
    </div>
  );
}
