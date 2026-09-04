function Environmental() {
  return (
    <section className="environmental">
      <h2>Environmental Impacts of Autonomous Cars</h2>

      <div className="impacts-container">
        <div className="positive">
          <h3>Positive Impacts</h3>
          <p>
            Self-driving cars can reduce emissions through smoother driving,
            lower fuel consumption by optimizing routes and speeds, and support
            the development of energy efficient and electric vehicles.
          </p>
        </div>

        <div className="negative">
          <h3>Negative Impacts</h3>
          <p>
            The convenience of autonomous vehicles may encourage people to
            travel more often, increasing overall energy use. Manufacturing
            autonomous vehicles also requires additional sensors, computers,
            and batteries.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Environmental;