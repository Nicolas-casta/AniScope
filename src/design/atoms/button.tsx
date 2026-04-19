interface Props {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    onClick?: () => void
    disabled?: boolean
    children: React.ReactNode
}

function Button({ variant = 'primary', size = 'md', onClick, disabled, children }: Props) {
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
    }

    const sizes = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`rounded ${variants[variant]} ${sizes[size]} disabled:opacity-50`}
        >
            {children}
        </button>
    )
}

export default Button