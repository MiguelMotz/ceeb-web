type SectionIntroProps = {
  badge?: string;
  title: string;
  text: string;
};

export default function SectionIntro({
  badge,
  title,
  text,
}: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      {badge && <span className="eyebrow">{badge}</span>}

      <h2 className="section-title mt-5">{title}</h2>

      <p className="section-text mt-5">{text}</p>
    </div>
  );
}