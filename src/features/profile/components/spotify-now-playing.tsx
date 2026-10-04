import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function SpotifyNowPlaying() {
  return (
    <Panel id="music">
      <PanelHeader>
        <PanelTitle>Music</PanelTitle>
        <span className="micro-label">recommendation playlist</span>
      </PanelHeader>

      <PanelContent>
        <div className="overflow-hidden rounded-xl border border-edge">
          <iframe
            title="Spotify Embed: Recommendation Playlist"
            src="https://open.spotify.com/embed/playlist/2ZlvQAqPrFIlsPqTEPXcFe?utm_source=generator&theme=0"
            width="100%"
            height="100%"
            style={{ minHeight: "360px", border: 0 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </PanelContent>
    </Panel>
  );
}
