import Link from "next/link";
import Image from "next/image";

export default function HomeLayout() {
  return (
    <div>
      <div className="flex flex-col py-20 space-y-3 place-items-center">
        <h1 className="text-5xl text-[#2d334a] font-bold">
          Discover Your Perfect Fit
        </h1>
        <h2 className="px-3 py-2 text-[#2d334a] bg-[#e3f6f5] ">
          Guiding Women in Choosing Clothing that Reflects Their True Selves
        </h2>
        <Image
          src={"/image/header.svg"}
          alt={"header"}
          width={500}
          height={500}
        />
        <div className="flex flex-row items-center justify-center space-x-5">
          <Link
            href="/Hijab"
            className="w-40 py-3 text-base font-bold text-center bg-[#ffd803] text-zinc-800 hover:border-zinc-800 hover:border-2 hover:bg-[#fffffe]"
          >
            Hijab
          </Link>
          <span className="text-[#2d334a] px-5 text-xl">or</span>
          <Link
            href="/NonHijab"
            className="w-40 py-3 text-base font-bold text-center bg-[#ffd803] border-2 text-zinc-800 hover:border-zinc-800 hover:border-2 hover:bg-[#fffffe]"
          >
            Hijabless
          </Link>
        </div>
      </div>
    </div>
  );
}
