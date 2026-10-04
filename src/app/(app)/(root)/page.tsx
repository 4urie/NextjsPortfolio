import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { Reveal } from "@/components/reveal";
import { About } from "@/features/profile/components/about";
import { Awards } from "@/features/profile/components/awards";
import { Certifications } from "@/features/profile/components/certifications";
import { Experiences } from "@/features/profile/components/experiences";
import { GitHubContributions } from "@/features/profile/components/github-contributions";
import { Hero } from "@/features/profile/components/hero";
import { Overview } from "@/features/profile/components/overview";
import { Projects } from "@/features/profile/components/projects";
import { SpotifyNowPlaying } from "@/features/profile/components/spotify-now-playing";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { TestimonialsMarquee } from "@/features/profile/components/testimonials-marquee";
import { USER } from "@/features/profile/data/user";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-3xl">
        <Reveal index={0}>
          <Hero />
        </Reveal>
        <Reveal index={1}>
          <SpotifyNowPlaying />
        </Reveal>
        <Reveal index={2}>
          <Overview />
        </Reveal>
        <Reveal index={3}>
          <About />
        </Reveal>
        <Reveal index={4}>
          <GitHubContributions />
        </Reveal>
        <Reveal index={5}>
          <TestimonialsMarquee />
        </Reveal>
        <Reveal index={6}>
          <TeckStack />
        </Reveal>
        <Reveal index={7}>
          <Experiences />
        </Reveal>
        <Reveal index={8}>
          <Projects />
        </Reveal>
        <Reveal index={9}>
          <Awards />
        </Reveal>
        <Reveal index={10}>
          <Certifications />
        </Reveal>
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}
