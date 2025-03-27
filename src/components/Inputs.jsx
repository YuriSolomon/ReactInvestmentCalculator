import Input from "./Input";

export default function Inputs({onChange, userInput}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <Input label='Initial Investment' value={userInput.initialInvestment} required onChange={(event) => onChange('initialInvestment', event.target.value)} />
                <Input label='Annual Investment' value={userInput.annualInvestment} required onChange={(event) => onChange('annualInvestment', event.target.value)} />
            </div>
            <div className="input-group">
                <Input label='ExpectedReturn' value={userInput.expectedReturn} required onChange={(event) => onChange('expectedReturn', event.target.value)} />
                <Input label='Duration' value={userInput.duration} required onChange={(event) => onChange('duration', event.target.value)} />
            </div>
        </section>
    )
}