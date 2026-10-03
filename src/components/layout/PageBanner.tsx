interface PageBannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageBanner({
  eyebrow,
  title,
  description,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-cocoa py-20 text-white md:py-28">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-caramel/20 blur-3xl" />

      <div className="container-luxury relative text-center">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
            {eyebrow}
          </p>
        )}

        <h1 className="font-display text-4xl font-medium md:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}