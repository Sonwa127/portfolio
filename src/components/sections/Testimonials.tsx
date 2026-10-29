const testimonials = [
  {
    quote: "it worked, solid work",
    name: "Francis S.",
    role: "CEO, Intellibot Media",
    stars: 5,
  },
  {
    quote: "No comment. She is a genius. Just brilliant work.",
    name: "Achilles Alpay",
    role: "Agency Partner",
    stars: 5,
  },
  {
    quote: "Ann came very well prepared for our consultation and put genuine effort into her proposal. She was professional throughout and I appreciated her time and dedication.",
    name: "Verified Client",
    role: "Upwork, 5 stars",
    stars: 5,
  },
  {
    quote: "Detail oriented. She did good in understanding the project. She has more experience in accounting projects, workflow developments. Very quick response, 24/7. I would highly recommend her.",
    name: "Verified Client",
    role: "Clinic Automation, Upwork 5 stars",
    stars: 5,
  },
];

const resultStat = {
  label: "AI Event Outreach Agent",
  stats: [
    { value: "250+", label: "registrations" },
    { value: "3,216", label: "SMS sent" },
    { value: "788", label: "conversations" },
    { value: "161", label: "confirmed attendees" },
  ],
  note: "Up from 50-60 usual attendees. One AI agent, one email sent by humans, the rest fully automated.",
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
          social proof
        </span>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-12">
          What clients say
        </h2>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-lg p-6 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="text-accent text-sm">★</span>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed text-sm italic">
                "{t.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-display text-sm font-medium text-text-primary">
                  {t.name}
                </p>
                <p className="font-mono-custom text-[11px] text-text-muted">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Results callout */}
        <div className="bg-surface border border-accent/20 rounded-lg p-8">
          <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-4">
            {resultStat.label}
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
            {resultStat.stats.map((s, i) => (
              <div key={i}>
                <p className="font-display text-3xl font-bold text-accent">
                  {s.value}
                </p>
                <p className="font-mono-custom text-[11px] text-text-muted mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            {resultStat.note}
          </p>
        </div>
      </div>
    </section>
  );
}