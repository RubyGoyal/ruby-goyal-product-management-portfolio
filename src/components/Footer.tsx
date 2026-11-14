import { PROFILE } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="py-12 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="font-display text-base font-bold text-slate-900">
            {PROFILE.name}
          </div>
          <p className="text-xs text-slate-500">
            Technical Product Manager · B2B SaaS, Cloud &amp; AI · {PROFILE.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={onOpenContact}
            className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
}
