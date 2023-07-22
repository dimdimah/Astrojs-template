interface Props {
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button(props: Props) {
  return (
    <button
      className={`w-20 py-2 text-base font-bold text-center bg-[#ffd803] text-zinc-800 hover:border-zinc-800 hover:border-1 hover:bg-[#fffffe] ${
        props.className
      } ${
        props.size === "sm"
          ? "py-1 px-2 text-sm "
          : props.size === "lg"
          ? "py-3 px-4"
          : "py-2 px-3"
      }`}
    >
      {props.text}
    </button>
  );
}
