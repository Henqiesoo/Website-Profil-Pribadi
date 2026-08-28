import { profil } from "@/content/profil";
import { Reveal } from "./Reveal";

export function Profesi() {
  return (
    <section
      id="profesi"
      className="mx-auto max-w-[var(--shell)] px-6 pt-8 pb-24 md:px-10 md:pb-32"
    >
      <Reveal>
        <h2 className="display-md max-w-[16ch]">Yang saya kerjakan</h2>
      </Reveal>

      <div className="mt-14 md:mt-20">
        {profil.profesi.map((item, i) => (
          <Reveal key={item.peran} delay={i * 70}>
            <article className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-4">
                <h3 className="display-sm">{item.peran}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {item.ringkas}
                </p>
              </div>
              <p className="prose-body text-ink-body md:col-span-7 md:col-start-6">
                {item.detail}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
