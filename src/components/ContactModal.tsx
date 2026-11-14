import { Check, Copy, ExternalLink, Mail, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PROFILE } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-medium text-[#2563EB]">Product Management Opportunities</p>
            <h2
              id="contact-modal-title"
              className="font-display text-2xl font-bold text-slate-900"
            >
              Connect with {PROFILE.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact dialog"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          Open to Technical Product Manager, AI Product Manager, and B2B SaaS / Cloud PM roles. Reach out directly via email or LinkedIn.
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50">
            <div className="min-w-0">
              <div className="text-xs text-slate-500">Email</div>
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-sm font-medium text-slate-900 hover:text-[#2563EB] truncate block"
              >
                {PROFILE.email}
              </a>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy Email
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 hover:border-slate-300 text-sm font-medium text-slate-900 transition-colors"
            >
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 hover:border-slate-300 text-sm font-medium text-slate-900 transition-colors"
            >
              <span>GitHub (@RubyGoyal)</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <a
            href={`mailto:${PROFILE.email}?subject=Product%20Management%20Opportunity`}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#2563EB] rounded-lg hover:bg-[#1D4ED8] transition-colors"
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
