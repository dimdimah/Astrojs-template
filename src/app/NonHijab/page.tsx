import React from "react";
import Image from "next/image";
import HijabLessLayout from "@/components/HijabLessLayout";
import Button from "@/components/Button";

export default function NonHijab() {
  return (
    <div className="flex h-screen m-3">
      <HijabLessLayout />
      <main className="container items-center justify-center p-4">
        <div className="flex justify-between mx-auto mb-20">
          <h1 className="mb-4 text-2xl font-semibold">Main Content</h1>
          <Button text="Logout" />
        </div>
        <div className="flex items-center justify-center p-4">
          <Image
            src={"/image/item1.svg"}
            alt={"item1"}
            width={300}
            height={300}
            className="items-center justify-center p-4"
          />
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ipsa
          dolore velit voluptatibus esse dolorum adipisci deleniti sint autem
          iusto.
        </p>
      </main>
    </div>
  );
}
