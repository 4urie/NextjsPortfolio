import Image from "next/image";

import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";

export function Hero() {
  return (
    <section className="screen-line-before screen-line-after border-x border-edge">
      {/* Cover image dissolving into halftone dots along the bottom edge */}
      <div className="relative h-[260px] overflow-hidden select-none sm:h-[340px]">
        <Image
          src="/images/blogs/heroes/4urie.png"
          alt={`${USER.displayName}'s hero image`}
          fill
          priority
          className="object-cover object-[center_1%]"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-28 halftone [mask-image:linear-gradient(to_top,black,transparent)]"
        />
      </div>

      {/* Type block */}
      <div className="screen-line-before flex items-center gap-5 px-5 py-8">
        <div className="relative shrink-0">
          <div
            aria-hidden
            className="absolute -inset-3 halftone [mask-image:radial-gradient(closest-side,black,transparent)]"
          />

          <img
            className="relative size-20 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background sm:size-24"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />

          <SimpleTooltip content="I'm based in the Philippines">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 -left-1 h-7 sm:h-8"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              viewBox="0 0 513 357.071"
            >
              <rect width="513" height="178.535" fill="#0038A8" />
              <rect y="178.535" width="513" height="178.536" fill="#CE1126" />
              <path d="M0 0L222.667 178.535L0 357.071V0Z" fill="#FFF" />
              <circle cx="111.333" cy="178.535" r="30" fill="#FCD116" />
              <circle cx="111.333" cy="178.535" r="14" fill="#FFF" />
              <path
                d="M111.333 130.535L120.333 162.535H152.333L126.333 181.535L135.333 213.535L111.333 194.535L87.333 213.535L96.333 181.535L70.333 162.535H102.333L111.333 130.535Z"
                fill="#FCD116"
              />
              <path
                d="M70.333 178.535H34.333"
                stroke="#FCD116"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M111.333 219.535V255.535"
                stroke="#FCD116"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M152.333 178.535H188.333"
                stroke="#FCD116"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M111.333 137.535V101.535"
                stroke="#FCD116"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </SimpleTooltip>
        </div>

        <div className="min-w-0">
          <h1 className="flex items-center gap-2.5 font-pixel text-4xl leading-none lowercase sm:text-5xl">
            {USER.displayName}

            <SimpleTooltip content="Verified">
              <Tag featured>verified</Tag>
            </SimpleTooltip>

            {USER.namePronunciationUrl && (
              <PronounceMyName
                className="translate-y-px"
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </h1>

          <div className="mt-2.5">
            <FlipSentences
              sentences={USER.flipSentences}
              className="font-sans text-[15px]"
            />
          </div>

          <p className="mt-3 micro-label">
            {USER.address} · {USER.timeZone}
          </p>
        </div>
      </div>
    </section>
  );
}
