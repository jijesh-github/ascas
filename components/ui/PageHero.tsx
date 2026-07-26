import Link from 'next/link';
import { ChevronRight, Sparkles } from 'lucide-react';

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
    <div className={`relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-pink-50/60 via-slate-50/40 to-white border-b border-pink-100/60 overflow-hidden ${className}`}>
      {/* Decorative background glows matching homepage rhythm */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-pink-200/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-100/30 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 mb-2 flex-wrap">
              {breadcrumbs.map((crumb, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#570026] transition-colors font-medium">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#570026] font-semibold">{crumb.label}</span>
                  )}
                  {idx < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Section Eyebrow Pill */}
          {eyebrow && (
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200 text-[#570026] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
                {eyebrowIcon || <Sparkles className="w-4 h-4 text-pink-700" />}
                <span>{eyebrow}</span>
              </div>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
