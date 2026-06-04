import { ExternalLinkIcon, Music2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const PLAYLIST_ID = "2iXwopBAzxhrdwfHqIjF6b";

export function SpotifyNowPlaying() {
  return (
    <Panel id="music">
      <PanelHeader>
        <PanelTitle className="flex items-center gap-2"></PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="relative overflow-hidden border border-edge bg-background/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <iframe
            title="Spotify Playlist"
            src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            style={{ minHeight: "352px", border: "none" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </PanelContent>
    </Panel>
  );
}
