import { Hero } from "@/features/profile/components/hero";
import { Overview } from "@/features/profile/components/overview";

export default function Page() {
  return (
    <>
      <div className="mx-auto flex h-screen flex-col justify-center md:max-w-3xl">
        <div className="screen-line-after grow border-x border-edge after:-bottom-px">
          <div className="flex h-4" />
        </div>

        <Hero />

        <Overview />

        <div className="grow border-x border-edge" />
      </div>
    </>
  );
}
