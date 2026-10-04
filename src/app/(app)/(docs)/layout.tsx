export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto border-x border-edge md:max-w-3xl">
      <div className="screen-line-after h-8 px-2" />

      {children}
    </div>
  );
}
