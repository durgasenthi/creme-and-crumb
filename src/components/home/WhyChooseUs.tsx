const features = [
  {
    number: "01",
    title: "Thoughtful ingredients",
    description:
      "We focus on quality ingredients and balanced flavours in every creation.",
  },
  {
    number: "02",
    title: "Beautifully handcrafted",
    description:
      "Every cake receives careful attention from the first layer to the final detail.",
  },
  {
    number: "03",
    title: "Made for your moment",
    description:
      "From intimate celebrations to grand occasions, each cake is made with care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-espresso text-white">
      <div className="container-luxury">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
              The Crème & Crumb way
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Small details make the sweetest difference.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-8 text-white/60 lg:justify-self-end">
            We believe a memorable cake should taste as beautiful as it looks.
            That is why every creation is thoughtfully prepared, carefully
            finished, and made especially for your celebration.
          </p>
        </div>

        <div className="mt-16 grid border-t border-white/10 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="text-xs tracking-[0.25em] text-champagne">
                {feature.number}
              </span>

              <h3 className="mt-8 font-display text-2xl">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}