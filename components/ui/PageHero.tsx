import Link from 'next/link';
import { ChevronRight, Sparkles, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  eyebrowIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export default function PageHero({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  breadcrumbs,
  className = ''
}: PageHeroProps) {
  return (
    <div className={`relative py-14 sm:py-18 lg:py-20 bg-gradient-to-r from-[#3b001a] via-[#570026] to-[#750b39] text-white border-b border-pink-900/40 overflow-hidden shadow-md ${className}`}>
      {/* Decorative background ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      {/* Decorative background geometry rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full border border-white/5 pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm text-pink-200/80 mb-3 sm:mb-4 flex-wrap">
              {breadcrumbs.map((crumb, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === breadcrumbs.length - 1;

                return (
                  <span key={idx} className="flex items-center gap-2.5">
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="inline-flex items-center gap-1.5 text-pink-100/90 hover:text-white transition-colors font-medium">
                        {isFirst && <Home className="w-3.5 h-3.5 text-pink-300 shrink-0" />}
                        <span>{crumb.label}</span>
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold">
                        {isFirst && <Home className="w-3.5 h-3.5 text-amber-300 shrink-0" />}
                        <span>{crumb.label}</span>
                      </span>
                    )}
                    {!isLast && (
                      <ChevronRight className="w-3.5 h-3.5 text-pink-300/40 shrink-0" />
                    )}
                  </span>
                );
              })}
            </nav>
          )}

          {/* Section Eyebrow Pill */}
          {eyebrow && (
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pink-100 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
                {eyebrowIcon ? (
                  <span className="[&>svg]:text-amber-300 [&>svg]:w-4 [&>svg]:h-4">{eyebrowIcon}</span>
                ) : (
                  <Sparkles className="w-4 h-4 text-amber-300" />
                )}
                <span>{eyebrow}</span>
              </div>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [&_span]:text-amber-300 [&_span]:font-accent [&_span]:italic [&_span]:font-normal">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg text-pink-100/90 leading-relaxed max-w-3xl mx-auto font-normal">
              {description}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
