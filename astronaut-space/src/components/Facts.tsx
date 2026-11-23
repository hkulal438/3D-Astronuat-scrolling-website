import {facts} from '../content';
import {useReveals} from '../hooks/useReveals';

/** A strip of flight numbers between the trajectory and the missions. */
export function Facts() {
  const ref = useReveals<HTMLElement>();
  return (
    <section ref={ref} aria-label={facts.eyebrow} className="relative bg-void px-4 pt-28 sm:px-6 md:px-[6vw] md:pt-40">
      <p className="font-mono text-label text-earth uppercase" data-reveal>
        {facts.eyebrow}
      </p>
      <dl className="mt-8 grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
        {facts.items.map((f, i) => (
          <div
            key={f.label}
            data-reveal
            style={{transitionDelay: `${i * 90}ms`}}
            className={`py-8 pr-4 md:py-10 md:pr-8 ${i % 2 === 1 ? 'pl-4 max-md:border-l max-md:border-white/10' : ''} ${i > 0 ? 'md:border-l md:border-white/10 md:pl-8' : ''} ${i > 1 ? 'max-md:border-t max-md:border-white/10' : ''}`}
          >
            <dt className="sr-only">{f.label}</dt>
            <dd className="m-0">
              <span className="font-display text-[2.5rem] leading-none text-white md:text-[3.5rem]">{f.value}</span>
              <span className="ml-2 font-mono text-label text-regolith/60 uppercase">{f.unit}</span>
              <p className="mt-4 max-w-[16rem] text-[0.875rem] leading-relaxed text-regolith/65" aria-hidden="true">
                {f.label}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
