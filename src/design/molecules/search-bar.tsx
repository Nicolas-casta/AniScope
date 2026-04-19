import Input from '../atoms/input'

interface Props {
    value: string
    onChange: (v: string) => void
    placeholder?: string
}

function SearchBar({ value, onChange, placeholder }: Props) {
    return (
        <Input
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder ?? 'Buscar anime...'}
        />
    )
}

export default SearchBar