import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function HijabLessLayout() {
  return (
    <div className="container w-1/6 bg-[#fffffe] border-2 border-gray-500">
      <div className="grid gap-4 m-3 justify-items-center">
        <div className="w-4/5 p-3 border-black text-base font-bold text-center bg-[#ffd803] border-2 text-zinc-800 hover:border-zinc-800 hover:border-2 hover:bg-[#fffffe]">
          <Link href="/NonHijab">Hijabless</Link>
        </div>
        <div className="w-4/5 p-3 border-black text-base font-bold text-center bg-[#ffd803] border-2 text-zinc-800 hover:border-zinc-800 hover:border-2 hover:bg-[#fffffe]">
          <Link href="/NonHijab">Hijabless</Link>
        </div>
        <div className="w-4/5 p-3 border-black text-base font-bold text-center bg-[#ffd803] border-2 text-zinc-800 hover:border-zinc-800 hover:border-2 hover:bg-[#fffffe]">
          <Link href="/NonHijab">Hijabless</Link>
        </div>
        <div className="w-4/5 p-3 border-black text-base font-bold text-center bg-[#ffd803] border-2 text-zinc-800 hover:border-zinc-800 hover:border-2 hover:bg-[#fffffe]">
          <Link href="/NonHijab">Hijabless</Link>
        </div>
      </div>
    </div>
  );
}
