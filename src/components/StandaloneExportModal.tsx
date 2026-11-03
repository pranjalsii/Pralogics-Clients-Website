/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { STANDALONE_HTML_CODE } from '../utils/standaloneHtml';
import { X, Copy, Check, Download, FileCode, Sparkles } from 'lucide-react';

interface StandaloneExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<StandaloneExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(STANDALONE_HTML_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = STANDALONE_HTML_CODE;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([STANDALONE_HTML_CODE], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'slender-ladies-salon-dubai-standalone.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-3xl bg-white border-2 border-[#E88295]/30 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#E88295]/20 flex items-center justify-between bg-gradient-to-r from-[#FFF5F7] to-[#EDF7EF]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#BA4961]">
              <FileCode className="w-4 h-4 text-[#82AF89]" />
              <span>Single-File Architecture for VS Code</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1E2421]">
              Slender Ladies Salon Dubai (Standalone HTML Code)
            </h3>
            <p className="text-xs text-[#52605B]">
              Zero-cost, completely self-contained with Tailwind CDN, Google Fonts, Bur Dubai Google Maps link, and Vanilla JS SPA routing.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#52605B] hover:text-[#1E2421] transition rounded-full hover:bg-white/80 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="px-6 sm:px-8 py-3 bg-[#FAF7F5] border-b border-[#E88295]/20 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#52605B]">
            <Sparkles className="w-4 h-4 text-[#BA4961]" />
            <span>Ready to paste directly into index.html in VS Code</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition cursor-pointer ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'rose-gradient-bg text-white hover:shadow-md'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Code Copied!' : 'Copy Entire Code'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider border border-[#82AF89] text-[#2C4832] bg-white hover:bg-[#EDF7EF] flex items-center gap-1.5 transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .html</span>
            </button>
          </div>
        </div>

        {/* Code Content Preview */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto bg-[#1E2421] text-[#EDF7EF] font-mono text-xs leading-relaxed selection:bg-[#BA4961] selection:text-white">
          <pre className="whitespace-pre-wrap break-all">
            {STANDALONE_HTML_CODE}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FAF7F5] border-t border-[#E88295]/20 flex items-center justify-between text-xs text-[#52605B] px-6">
          <span>© 2026 Slender Ladies Salon. Powered by Pralogics.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full border border-[#52605B]/30 hover:bg-white transition cursor-pointer"
          >
            Back to App
          </button>
        </div>

      </div>
    </div>
  );
};
