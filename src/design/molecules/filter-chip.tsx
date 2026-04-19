interface Props {
    label: string
    selected: boolean
    onToggle: () => void
}

function FilterChip({ label, selected, onToggle }: Props) {
    return (
        <button
            onClick={onToggle}
            className={`px-3 py-1 rounded-full text-sm border ${selected ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300'}`}
        >
            {label}
        </button>
    )
}

export default FilterChip