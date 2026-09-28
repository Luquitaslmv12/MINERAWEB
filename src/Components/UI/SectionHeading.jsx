import Reveal from "./Reveal";

/** Cabecera de sección reutilizable (eyebrow + título + bajada). */
export default function SectionHeading({ eyebrow, title, highlight, description, align = "center", className = "" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} gap-5 ${className}`}>
      {eyebrow && (
        <Reveal direction="up">
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}

      <Reveal direction="up" delay={0.05}>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>

      {description && (
        <Reveal direction="up" delay={0.1} className={align === "center" ? "max-w-3xl" : "max-w-2xl"}>
          <p className="prose-lead">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
