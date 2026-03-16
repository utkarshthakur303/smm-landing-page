import React from "react";

const WHATSAPP_NUMBER = "YOURNUMBER";

export function WhatsAppButton() {
  const href = "https://wa.me/+916359244514";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] grid h-[56px] w-[56px] place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 ease-out hover:scale-110 active:scale-95"
    >
      {/* WhatsApp logo (SVG) */}
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-[28px] w-[28px]"
        fill="currentColor"
      >
        <path d="M19.11 17.49c-.17-.08-1-.49-1.16-.55-.16-.06-.27-.08-.39.08-.11.17-.44.55-.54.66-.1.11-.2.13-.37.04-.17-.08-.72-.27-1.37-.86-.51-.46-.86-1.03-.96-1.2-.1-.17-.01-.26.08-.35.08-.08.17-.2.25-.3.08-.1.11-.17.17-.29.06-.11.03-.22-.01-.3-.04-.08-.39-.93-.54-1.27-.14-.35-.29-.29-.39-.29l-.33-.01c-.11 0-.3.04-.46.22-.16.17-.6.58-.6 1.41 0 .83.62 1.64.71 1.75.08.11 1.23 1.88 2.98 2.63.42.18.75.29 1.01.37.42.13.8.11 1.1.06.34-.05 1-.41 1.14-.8.14-.39.14-.72.1-.8-.04-.06-.16-.1-.33-.18zM16.04 4C9.95 4 5 8.94 5 15.02c0 2.41.79 4.64 2.14 6.44L6 28l6.69-2.14c1.74.95 3.75 1.5 5.89 1.5 6.09 0 11.04-4.94 11.04-11.02C29.62 8.94 24.67 4 18.58 4h-2.54zm0 2.05h2.54c4.95 0 8.99 4.03 8.99 8.97 0 4.95-4.04 8.97-8.99 8.97-2.09 0-4.06-.72-5.63-1.93l-3.92 1.25 1.28-3.79c-1.28-1.63-2.04-3.67-2.04-5.76 0-4.94 4.04-8.97 8.99-8.97z" />
      </svg>
    </a>
  );
}

