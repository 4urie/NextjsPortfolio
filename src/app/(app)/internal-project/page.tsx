import { ArrowLeft, Building2, FileText, Lock, Shield } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { USER } from "@/features/profile/data/user";

export const metadata: Metadata = {
  title: "Internal Client Project",
  description:
    "This project is confidential and developed for internal use by our client. Due to NDA and privacy agreements, we cannot share the live URL.",
};

const email = Buffer.from(USER.email, "base64").toString("utf-8");

export default function InternalProjectPage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="space-y-8 py-12">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-faint uppercase transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-edge px-4 py-1.5">
            <Shield className="size-4 text-faint" />
            <span className="micro-label">Confidential Project</span>
          </div>

          <h1 className="font-pixel text-5xl lowercase">
            internal client project
          </h1>

          <p className="text-[15px] text-muted-foreground">
            This project was developed for internal use by my client under a
            non-disclosure agreement.
          </p>
        </div>

        {/* Main content */}
        <div className="space-y-6 rounded-2xl border border-edge bg-background/90 p-6 shadow-card backdrop-blur-sm md:p-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Lock className="size-5 text-faint" />
              <h2 className="text-[15px] font-medium">
                Why can&apos;t I share this?
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This project is part of the client&apos;s internal infrastructure
              and operations. Due to confidentiality agreements and privacy
              requirements, I cannot provide access to the live application or
              share detailed implementation specifics.
            </p>
          </div>

          <div className="border-t border-edge" />

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="size-5 text-faint" />
              <h2 className="text-[15px] font-medium">What I can tell you</h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              While I respect the confidentiality of the project, I can discuss
              the technical challenges I solved, the technologies used, and the
              impact of my work on the client&apos;s business operations.
            </p>
          </div>

          <div className="border-t border-edge" />

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Building2 className="size-5 text-faint" />
              <h2 className="text-[15px] font-medium">
                Professional commitment
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Protecting client confidentiality is a fundamental part of
              professional software development. I take NDAs and privacy
              agreements seriously, ensuring all sensitive information remains
              secure.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="rounded-2xl border border-edge bg-muted/50 p-6 text-center">
          <h3 className="mb-2 text-[15px] font-medium">Want to know more?</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            I&apos;d be happy to discuss the technical aspects of this project
            and how my skills can benefit your team.
          </p>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 font-mono text-[11px] tracking-[0.08em] text-background uppercase transition-colors hover:bg-foreground/90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
