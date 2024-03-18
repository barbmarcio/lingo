import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type ResultCardProps = {
  variant: "points" | "hearts";
  value: number;
};

export const ResultCard = ({ value, variant }: ResultCardProps) => {
  const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg";
  return (
    <div
      className={cn(
        "rounded-2xl border-2 w-full",
        variant === "points" && "bg-orange-400 border-orange-400",
        variant === "hearts" && "bg-rose-400 border-rose-400"
      )}
    >
      <div
        className={cn(
          "p-1.5 text-white rounded-t-xl font-bold txt-center uppercase text-sm",
          variant === "hearts" && "bg-rose-500",
          variant === "points" && "bg-orange-500"
        )}
      >
        {variant === "hearts" ? "Hearts Left" : "Total XP"}
      </div>
      <div>
        <div
          className={cn(
            "rounded-2xl bg-white items-center flex justify-center p-6 font-boldtext-lg",
            variant === "hearts" && "text-rose-500",
            variant === "points" && "text-orange-500"
          )}
        >
          <Image
            alt="Icon"
            src={imageSrc}
            height={30}
            width={30}
            className="mr-1.5 animate-bounce"
          />
          {value}
        </div>
      </div>
    </div>
  );
};
