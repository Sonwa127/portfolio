import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase mb-4">404</p>
        <h1 className="font-display text-4xl font-bold text-text-primary mb-4">Page not found</h1>
        <p className="text-text-secondary text-lg mb-8 max-w-sm mx-auto">This page does not exist or has been moved.</p>
        <Link href="/" className="inline-block px-6 py-3 bg-accent text-base font-display font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors mb-12">Back to home</Link>
        <div className="border-t border-border pt-8 mt-4">
          <p className="font-mono-custom text-[11px] text-text-secondary tracking-widest uppercase mb-4">Looking for something specific?</p>
          <div className="flex items-center justify-center gap-6">
            <a href="www.linkedin.com/in/ann-chisom-s-172027244" target="_blank" rel="noopener noreferrer" className="font-mono-custom text-[11px] text-text-secondary hover:text-accent transition-colors tracking-widest uppercase">LinkedIn</a>
            <span className="text-border">|</span>
            <a href="mailto:annc03700@gmail.com" className="font-mono-custom text-[11px] text-text-secondary hover:text-accent transition-colors tracking-widest uppercase">Email me</a>
            <span className="text-border">|</span>
            <a href="https://calendly.com/sonwa/consultation" target="_blank" rel="noopener noreferrer" className="font-mono-custom text-[11px] text-text-secondary hover:text-accent transition-colors tracking-widest uppercase">Book a call</a>
          </div>
        </div>
      </div>
    </main>
  )
}