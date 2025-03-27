import Input from "./Input"

export default function Inputs() {
    return (
        <section id="user-input">
            <div className="input-group">
                <Input label='Initial Investment' value={null} required />
                <Input label='Annual Investment' value={null} required />
            </div>
            <div className="input-group">
                <Input label='ExpectedReturn' value={null} required />
                <Input label='Duration' value={null} required />
            </div>
        </section>
    )
}