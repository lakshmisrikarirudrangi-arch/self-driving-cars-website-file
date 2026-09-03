function Economic() {
  return (
    <div className="economic-page">
      <div className="content-section">
        <h1>Economic Impact of AI Crop Monitoring</h1>

        <p>
          AI crop monitoring has a major economic impact on agriculture because
          it helps farmers make better decisions, reduce costs, and increase
          profits. By using drones, sensors, satellite images, and artificial
          intelligence, farmers can monitor crop health and identify problems
          early. This allows them to use resources more efficiently and avoid
          unnecessary expenses.
        </p>
      </div>

      <div className="info-card">
        <h2>How Farmers Benefit</h2>

        <p>
          One of the biggest economic benefits of AI crop monitoring is that it
          helps farmers reduce costs. Instead of applying water, fertilizer, or
          pesticides across an entire field, AI can identify the exact areas
          that need treatment.
        </p>

        <p>
          AI crop monitoring can also increase crop yields by detecting plant
          diseases, pest infestations, and nutrient deficiencies before they
          cause major damage.
        </p>

        <p>
          Another benefit is reduced labor costs. AI systems automate monitoring
          tasks, allowing farmers to inspect large fields more efficiently.
        </p>

        <p>
          However, adopting AI technology requires investments in drones,
          sensors, software, and training.
        </p>
      </div>

      <div className="info-card">
        <h2>What It Means for Consumers</h2>

        <p>
          Consumers benefit indirectly from AI crop monitoring. Increased
          efficiency can help stabilize food supplies and reduce production
          costs.
        </p>

        <p>
          AI also improves food security by helping farmers detect threats such
          as diseases, pests, droughts, and other environmental challenges
          before major crop losses occur.
        </p>
      </div>

      <div className="info-card">
        <h2>Real-World Example: John Deere See &amp; Spray™</h2>

        <p>
          John Deere&apos;s See &amp; Spray™ technology uses cameras and artificial
          intelligence to identify weeds in real time and apply herbicide only
          where needed instead of treating entire fields.
        </p>

        <p>
          During the 2025 growing season, the system was reportedly used on more
          than 5 million acres of farmland.
        </p>

        <p>
          The technology reduced herbicide use by nearly 50%, saving
          approximately 31 million gallons of herbicide mixture while also
          improving crop production.
        </p>

        <p>
          Field studies found soybean yields increased by about 2 bushels per
          acre when the technology was used.
        </p>
      </div>

      <div className="impact-grid">
        <div className="impact-box positive">
          <h2>Positive Economic Impacts</h2>

          <ul>
            <li>Reduced spending on water, fertilizer, and pesticides.</li>
            <li>Higher crop yields and stronger farm productivity.</li>
            <li>Lower labor demands for field inspections and monitoring.</li>
            <li>Better long-term planning and risk management.</li>
          </ul>
        </div>

        <div className="impact-box negative">
          <h2>Challenges and Costs</h2>

          <ul>
            <li>High upfront costs for equipment, software, and training.</li>
            <li>Need for reliable internet, sensors, and data systems.</li>
            <li>Potential difficulties for small farms with limited budgets.</li>
            <li>Ongoing maintenance and technology updates.</li>
          </ul>
        </div>
      </div>

      <div className="page-actions">
        <Link to="/" className="nav-btn">
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default Economic;