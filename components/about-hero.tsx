import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden px-6 md:px-12 pt-6 pb-16 md:pt-16 md:pb-24">
      <div className="absolute inset-0 -z-20 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,247,255,0.96)_20%,rgba(228,238,252,0.95)_46%,rgba(227,245,239,0.90)_76%,rgba(252,252,252,1)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-[52%] -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_left_top,rgba(21,131,241,0.24)_0%,rgba(21,131,241,0.12)_24%,rgba(255,255,255,0)_68%)] animate-float will-change-transform" />
      <div className="absolute right-0 top-0 h-full w-[52%] -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_right_top,rgba(129,232,196,0.20)_0%,rgba(129,232,196,0.12)_24%,rgba(255,255,255,0)_68%)] animate-float-delayed will-change-transform" />
      <div className="absolute left-[10%] top-[18%] -z-10 h-32 w-32 rounded-full bg-[#1583F1]/12 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute right-[12%] top-[24%] -z-10 h-40 w-40 rounded-full bg-[#81E8C4]/14 blur-3xl pointer-events-none animate-float" />
      <div className="absolute left-1/2 bottom-[16%] -z-10 h-24 w-24 -translate-x-1/2 rounded-full bg-[#1583F1]/10 blur-2xl pointer-events-none animate-float-delayed" />
      <div className="absolute inset-x-0 bottom-0 h-[160px] -z-10 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.82)_100%)]" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="text-center md:text-left relative z-10">
          <p className="gradient-text mb-4 text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm">
            Our Story
          </p>
          <h1 className="text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
            We Built VendSavvy Because
            <br className="hidden sm:block" />
            <span className="gradient-text">Running Vending Machines Was Too Hard</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg md:mx-0">
            Tracking sales in a notebook. Managing inventory in a spreadsheet. Calculating profit in your head. There had to be a better way — so we built one.
          </p>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[700px]">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#1583F1]/15 via-[#81E8C4]/10 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <Image
              src="/aboutus.png"
              alt="VendSavvy dashboard mockup"
              width={1200}
              height={900}
              priority
              sizes="(min-width: 1024px) 700px, (min-width: 768px) 56vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
