import {faq} from '../content';
import {useReveals} from '../hooks/useReveals';

/** Questions, as native disclosure widgets: keyboard and screen-reader ready. */
export function Faq() {
  const ref = useReveals<HTMLElement>();
  return (
    <section ref={ref} id="faq" aria-labelledby="faq-title" className="relative bg-void px-4 pb-28 sm:px-6 md:px-[6vw] md:pb-40">
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <div data-reveal>
          <p className="font-mono text-label text-earth uppercase">{faq.eyebrow}</p>
          <h2 id="faq-title" className="mt-4 font-display text-display text-white">
            {faq.heading}
          </h2>
        </div>
        <div className="border-t border-white/10" data-reveal>
          {faq.items.map((item) => (
            <details key={item.q} className="group border-b border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.0625rem] text-white transition-colors hover:text-earth [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="relative size-3 shrink-0">
                  <span className="absolute inset-x-0 top-1/2 h-px bg-current" />
                  <span className="absolute inset-y-0 left-1/2 w-px bg-current transition-transform duration-300 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="max-w-[40rem] pb-6 text-body text-regolith/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
