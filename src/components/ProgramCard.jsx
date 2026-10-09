
function ProgramCard({ image, category, title, description, raised, goal }) {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <article className="program-card">
      <div className="program-image">
        <img src={image} alt={title} loading="lazy" />
        <span className="program-category">{category}</span>
      </div>

      <div className="program-content">
        <h3>{title}</h3>
        <p className="program-description">{description}</p>

        <div className="program-funding">
          <div className="funding-labels">
            <span>Raised: ₹{raised.toLocaleString("en-IN")}</span>
            <span>Goal: ₹{goal.toLocaleString("en-IN")}</span>
          </div>

          <div
            className="progress-track"
            role="progressbar"
            aria-label={`${title} fundraising progress`}
            aria-valuenow={Math.round(progress)}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <a className="program-link" href="#donate">
          Support this cause <span>→</span>
        </a>
      </div>
    </article>
  );
}

export default ProgramCard;
