"use client";

import { useState, useCallback } from "react";
import { testimonials } from "@/data/home";

export default function Testimonials() {
  const items = testimonials.items;
  const [index, setIndex] = useState(0);
  const count = items.length;
  const t = items[index];

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  const Dots = () => (
    <div className="flex items-center justify-center gap-2">
      {items.map((_, i) => (
        <button
          key={i}
          aria-label={`Go to testimonial ${i + 1}`}
          onClick={() => setIndex(i)}
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            i === index ? "bg-ink" : "bg-line"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="bg-white border-t border-line py-16 md:py-20">
      <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-ink text-center">
        {testimonials.title}
      </h2>

      {/* slider with edge chevrons (desktop) */}
      <div className="relative mx-auto max-w-shell px-5 md:px-20 mt-10 md:mt-14">
        <button
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-muted/50 hover:text-ink transition-colors z-10"
        >
          ‹
        </button>
        <button
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-muted/50 hover:text-ink transition-colors z-10"
        >
          ›
        </button>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* portrait card */}
          <div className="relative rounded-[14px] overflow-hidden aspect-[4/5] w-full max-w-[340px] sm:max-w-[400px] mx-auto md:mx-0 md:ml-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.portrait}
              alt={t.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold leading-tight">{t.name}</p>
              <p className="text-sm text-white/80">{t.role}</p>
            </div>
          </div>

          {/* content */}
          <div className="w-full max-w-md mx-auto md:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.logo}
              alt=""
              className="h-8 w-auto object-contain mb-6"
            />
            <blockquote className="text-lg text-ink leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <a
              href={t.href}
              className="mt-5 inline-flex items-center gap-2 text-ink underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
            >
              Read the case study →
            </a>

            <div className="mt-10 flex gap-12">
              {t.stats.map((s, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-medium text-ink">
                    {s.value}
                  </p>
                  <p className="text-sm text-muted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* mobile arrows + dots */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="md:hidden text-2xl text-muted/60 hover:text-ink transition-colors"
        >
          ‹
        </button>
        <Dots />
        <button
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="md:hidden text-2xl text-muted/60 hover:text-ink transition-colors"
        >
          ›
        </button>
      </div>
    </section>
  );
}
