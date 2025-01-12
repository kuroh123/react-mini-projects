export default function UserInput({ onInputChange, userInputs }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            required
            value={userInputs.initialInvestment}
            onChange={onInputChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            required
            value={userInputs.annualInvestment}
            onChange={onInputChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            required
            value={userInputs.expectedReturn}
            onChange={onInputChange}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            required
            value={userInputs.duration}
            onChange={onInputChange}
          />
        </p>
      </div>
    </section>
  );
}
