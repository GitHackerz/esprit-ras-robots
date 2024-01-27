const Input = ({ label, name, error, isSelectMenu, isTextArea }) => (
    <div className={`flex flex-col w-full`}>
        <label className="text-white font-normal">{label}</label>
        {isSelectMenu ? (
            <select className="bg-gray rounded-lg px-4 py-3" name={name}>
                <option value="">Select a Challenge</option>
                <option value="Junior">Junior</option>
                <option value="Autonomous">Autonomous</option>
                <option value="All Terrain">All Terrain</option>
                {/*<option value="Fighter">Fighter</option>*/}
            </select>
        ) : isTextArea ? (
            <textarea
                className="bg-gray rounded-lg px-4 py-2 resize-none"
                rows={5}
                placeholder={label}
                name={name}
            />
        ) : (
            <input
                className="bg-gray rounded-lg px-4 py-2"
                placeholder={label}
                name={name}
            />
        )}

        {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
)

export default Input
