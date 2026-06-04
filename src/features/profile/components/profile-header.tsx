import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[0.5px] my-[3px]">
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <SimpleTooltip content="I'm based in the Philippines">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 -left-px h-8 sm:h-9"
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

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
