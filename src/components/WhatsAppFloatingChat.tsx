import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Calendar } from 'lucide-react';
import {
  SALON_INFO,
  WHATSAPP_QUICK_INQUIRIES,
  DEFAULT_WHATSAPP_INQUIRY,
  generateDirectInquiryWhatsAppUrl
} from '../utils/booking';
import { SlenderLogoMark } from './SlenderLogo';

interface WhatsAppFloatingChatProps {
  onOpenBooking?: () => void;
}

export const WhatsAppFloatingChat: React.FC<WhatsAppFloatingChatProps> = ({
  onOpenBooking
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPresetId, setSelectedPresetId] = useState<string>('salon-visit');
  const [messageText, setMessageText] = useState<string>(
    WHATSAPP_QUICK_INQUIRIES[0]?.message || DEFAULT_WHATSAPP_INQUIRY
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelectPreset = (id: string, presetMessage: string) => {
    setSelectedPresetId(id);
    setMessageText(presetMessage);
  };

  const whatsappHref = generateDirectInquiryWhatsAppUrl(
    messageText,
    SALON_INFO.whatsappRaw
  );

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end"
    >
      {/* Pre-filled Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Slender Ladies Salon WhatsApp Inquiry"
          className="mb-2.5 w-[calc(100vw-2rem)] max-w-[336px] sm:max-w-[352px] rounded-2xl bg-white border border-[#181214]/12 shadow-[0_24px_56px_-12px_rgba(24,18,20,0.28)] overflow-hidden transition-all duration-200 origin-bottom-right"
        >
          {/* Minimal Luxury Header */}
          <div className="bg-[#351018] text-white px-4 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative shrink-0">
                <SlenderLogoMark size="sm" showWordmarkInside={false} />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-white truncate">
                  Slender Ladies Salon
                </p>
                <p className="text-[11px] text-white/75 truncate editorial-num">
                  +971 50 915 2969 · Replies in ~2 mins
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat window"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/75 hover:text-white hover:bg-white/10 transition cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-3.5 sm:p-4 bg-[#F9F6F3] space-y-3">
            {/* Incoming Salon Greeting Bubble */}
            <div className="bg-white rounded-xl rounded-tl-xs p-2.5 sm:p-3 border border-[#181214]/8 shadow-2xs">
              <p className="text-[11px] font-semibold text-[#8E3046] mb-0.5">
                Reception Desk · Bur Dubai &amp; Home Service
              </p>
              <p className="text-[11.5px] sm:text-xs text-[#2C2527] leading-relaxed">
                Hello! Select a topic below or edit the pre-filled message to chat directly with our ladies beauty team on WhatsApp.
              </p>
            </div>

            {/* Quick Inquiry Selector Buttons */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#685B5E] mb-1.5">
                Quick Inquiry Topics
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {WHATSAPP_QUICK_INQUIRIES.map((preset) => {
                  const isActive = selectedPresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectPreset(preset.id, preset.message)}
                      className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-left transition cursor-pointer truncate ${
                        isActive
                          ? 'bg-[#8E3046] text-white shadow-2xs'
                          : 'bg-white text-[#2C2527] border border-[#181214]/10 hover:border-[#8E3046]/40'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Editable Pre-filled Message Input */}
            <div>
              <label
                htmlFor="whatsapp-prefilled-message"
                className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#685B5E] mb-1"
              >
                Pre-filled Message
              </label>
              <textarea
                id="whatsapp-prefilled-message"
                rows={3}
                value={messageText}
                onChange={(e) => {
                  setMessageText(e.target.value);
                  setSelectedPresetId('custom');
                }}
                placeholder="Write your beauty inquiry..."
                className="w-full rounded-xl bg-white border border-[#181214]/15 px-3 py-2 text-xs text-[#181214] leading-relaxed focus:outline-none focus:border-[#8E3046] resize-none"
              />
            </div>

            {/* Primary WhatsApp Send Link & Optional Full Form Switch */}
            <div className="pt-0.5 flex flex-col gap-1.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-10 rounded-xl bg-[#1E8E4A] hover:bg-[#197A3F] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start WhatsApp Chat</span>
              </a>

              {onOpenBooking && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full h-8 rounded-lg text-[11px] font-medium text-[#685B5E] hover:text-[#181214] hover:bg-black/4 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3 h-3 text-[#8E3046]" />
                  <span>Prefer full date &amp; time booking form?</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Compact WhatsApp Icon-Only Floating Action Button (Never obscures page content) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close WhatsApp Inquiry Window' : 'Chat on WhatsApp'}
        title={isOpen ? 'Close WhatsApp Inquiry' : 'Chat on WhatsApp (+971 50 915 2969)'}
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shadow-[0_8px_22px_rgba(24,18,20,0.28)] ring-2 ring-white ${
          isOpen
            ? 'bg-[#181214] hover:bg-[#351018] text-white'
            : 'bg-[#25D366] hover:bg-[#1EBE5D] text-white'
        }`}
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
            aria-hidden="true"
          >
            <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.05-.11-.22-.17-.46-.29z" />
          </svg>
        )}
      </button>
    </div>
  );
};

