/*
 * STONEMARK PAGE HERO — Inner page banner
 * Design: Industrial Brutalism — diagonal bottom cut, orange accent line
 */

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageHero({ eyebrow, title, titleAccent, subtitle, bgImage }: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-24 overflow-hidden"
      style={{ background: bgImage ? undefined : "linear-gradient(135deg, #2A303C 0%, #323846 100%)" }}
    >
      {bgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A303C]/95 via-[#2A303C]/85 to-[#2A303C]/60" />
        </>
      )}

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#F97316 1px, transparent 1px),
            linear-gradient(90deg, #F97316 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F97316]" />

      <div className="container relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[3px] bg-[#F97316]" />
          <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">
            {eyebrow}
          </span>
        </div>
        <h1
          className="font-['Barlow_Condensed'] text-white leading-none mb-4"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 900 }}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-[#F97316]">{titleAccent}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="font-['DM_Sans'] text-white/65 text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Diagonal bottom cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#2A303C]"
        style={{ clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)" }}
      />
    </section>
  );
}
