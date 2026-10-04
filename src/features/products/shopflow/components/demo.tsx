export function ShopFlowDemo() {
  return (
    <section id="demo" className="border-y border-edge py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-[1.3rem] font-semibold tracking-[-0.02em]">
          See ShopFlow in Action
        </h2>
        <p className="mt-2 mb-10 text-sm text-muted-foreground">
          Watch how ShopFlow streamlines shop operations with its POS interface,
          inventory tools, and reporting features.
        </p>

        <div className="relative overflow-hidden rounded-2xl border border-edge bg-background shadow-card">
          <video
            className="aspect-auto w-full"
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster="/images/avatar-placeholder.svg"
          >
            <source src="/video/software-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
