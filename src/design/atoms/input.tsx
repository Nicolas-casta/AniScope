import { forwardRef } from 'react'

interface Props {
    placeholder?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, Props>(({ placeholder, value, onChange }, ref) => {
    return (
        <input
            ref={ref}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="border border-gray-300 rounded px-3 py-2 w-full text-sm outline-none focus:border-blue-500"
        />
    )
})

export default Input