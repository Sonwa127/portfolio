export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-4">
          <p className="font-mono-custom text-accent text-xs tracking-[0.2em] uppercase">
            Ann Chisom Sokwueaku
          </p>
          <span className="flex items-center gap-1.5 font-mono-custom text-[11px] text-accent bg-[#0F2D20] border border-[#1A4A32] px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block"></span>
            Available for work
          </span>
        </div>
        <p className="font-mono-custom text-[11px] text-text-muted tracking-widest">
          ai automation engineer &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}