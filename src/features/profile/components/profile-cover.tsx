import Image from "next/image";

import { BrandContextMenu } from "@/components/brand-context-menu";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  return (
    <BrandContextMenu>
      <div
       className={cn(
    "relative h-[260px] overflow-hidden border-x border-edge select-none sm:h-[340px]",
    "screen-line-before screen-line-after before:-top-px after:-bottom-px"
  )}
      >
        <Image
          src="/images/blogs/heroes/4urie.png"
          alt={`${USER.displayName}'s hero image`}
          fill
          priority
          className="object-cover object-[center_1%]"
        />

        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </BrandContextMenu>
  );
}
