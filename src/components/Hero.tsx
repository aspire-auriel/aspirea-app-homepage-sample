import Image from "next/image";
import { hero } from "@/data/home";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* announcement bar */}
      <a
        href={hero.eyebrowHref}
        className="block bg-mint text-center text-sm py-3 px-4 text-ink hover:bg-mint-light transition-colors"
      >
        🔥 <span className="font-semibold">New:</span> Earn 1.2% unlimited cashback on all corporate card spend.{" "}
        <span className="underline underline-offset-2">Learn more →</span>
      </a>

      {/* hero green box */}
      <div className="mx-auto max-w-shell px-5 pt-10 md:pt-14">
        <div
          className="relative rounded-[28px] overflow-hidden bg-mint bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${hero.boxBg}')` }}
        >
          <div className="relative grid lg:grid-cols-2 items-center">
            {/* left: copy */}
            <div className="px-6 sm:px-10 md:px-14 py-12 md:py-20">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.05]">
                {hero.title}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-ink/70 max-w-md">{hero.subtitle}</p>

              {/* email capture — stacks on mobile, inline from sm up */}
              <div className="mt-8 max-w-md">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-xl bg-white p-2 sm:pl-5 shadow-sm">
                  <input
                    type="email"
                    placeholder={hero.emailPlaceholder}
                    className="flex-1 bg-transparent text-ink placeholder:text-muted/70 focus:outline-none px-3 sm:px-0 py-2 sm:py-0"
                  />
                  <button className="rounded-lg bg-btn px-6 py-3 font-medium text-btn-text hover:opacity-90 transition-opacity whitespace-nowrap">
                    {hero.cta}
                  </button>
                </div>
              </div>
            </div>

            {/* right: product image, vertically centered */}
            <div className="relative lg:pl-4 flex items-center justify-center px-6 sm:px-10 lg:px-0 pb-8 lg:py-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={hero.image}
                alt="Aspire product dashboard"
                width={760}
                height={640}
                className="w-full h-auto max-w-[520px]"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* trust label */}
      <div className="mx-auto max-w-shell px-5 pt-10 text-center">
        <p className="font-medium text-ink">{hero.trustLabel}</p>
      </div>

      {/* full-bleed logo marquee */}
      <div className="mt-8 py-6 overflow-hidden">
        <div className="relative w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max animate-marquee gap-16 items-center">
            {[...hero.logos, ...hero.logos].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt="Customer logo"
                className="h-7 w-auto object-contain opacity-70 grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
