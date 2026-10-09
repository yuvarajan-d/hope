
const impactData = [
  {
    icon: "👥",
    number: "2,500+",
    label: "Lives Supported",
  },
  {
    icon: "🍲",
    number: "10,000+",
    label: "Meals Provided",
  },
  {
    icon: "📚",
    number: "500+",
    label: "Children Supported",
  },
  {
    icon: "💚",
    number: "150+",
    label: "Volunteers",
  },
];

function ImpactStats() {
  return (
    <section className="impact-section" id="impact">
      <div className="impact-heading">
        <p className="eyebrow">OUR IMPACT</p>
        <h2>
          Together, We Create <span>Change</span>
        </h2>
        <p>
          Every contribution, every volunteer, and every act of
          kindness helps us build a better tomorrow.
        </p>
      </div>

      <div className="impact-grid">
        {impactData.map((item) => (
          <div className="impact-card" key={item.label}>
            <div className="impact-icon">{item.icon}</div>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <p className="impact-note">
        *Figures shown are sample data for demonstration purposes.
      </p>
    </section>
  );
}

export default ImpactStats;
