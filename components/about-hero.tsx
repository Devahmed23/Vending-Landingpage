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
         
          <h1 className="text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
            Our 
            
            <span className="gradient-text"> Story</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg md:mx-0">
            We didn't start out as tech experts. We started just like you—as new vending machine owners who didn’t know the first thing about the vending space.</p>
<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg md:mx-0">When we bought our first machine, we fell in love with the idea of building a semi-passive business. But we quickly realized that social media doesn't tell you the whole truth. Nobody mentioned the hours spent driving, the heavy lifting, the inventory expiring in the garage, or the nightmare of trying to track sales in a notebook and a messy spreadsheet.</p>
<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg md:mx-0">We looked everywhere for a tool that was simple, affordable, and built for beginners. Everything we found was either too expensive, built only for giant corporations, or incredibly outdated.</p>
<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg md:mx-0">So, we decided to build what we wish we had on day one.</p>
<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg md:mx-0">We built this app to take the guesswork out of vending. Whether you are placing your very first machine or scaling up to your tenth, we are here to help you skip the rookie mistakes, track your profits effortlessly, and actually enjoy the business you are building.</p>
<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg md:mx-0">Welcome to the smarter way to vend.</p>
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
