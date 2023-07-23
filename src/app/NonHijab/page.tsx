import React from "react";
import Image from "next/image";
import HijabLessLayout from "@/components/HijabLessLayout";
import Button from "@/components/Button";
import Link from "next/link";
import NavPage from "@/components/NavPage";

export default function NonHijab() {
  return (
    <div className="flex h-screen">
      <HijabLessLayout />
      <main className="container items-center justify-center p-4">
        <NavPage />
        {/* <div className="flex justify-between mx-auto mb-16">
          <h1 className="mb-4 text-2xl font-semibold">
            {" "}
            <Image
              src="/image/wfit-logo.svg"
              alt="header"
              width={145}
              height={145}
            />
          </h1>
          <Link href="/">
            <Button text="Logout" />
          </Link>
        </div> */}
        <div className="flex items-center justify-center p-2">
          <Image
            src={"/image/item1.svg"}
            alt={"item1"}
            width={400}
            height={400}
            className="items-center justify-center p-4"
          />
        </div>
      </main>
    </div>
  );
}
