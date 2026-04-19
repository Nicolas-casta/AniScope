import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '../config/query.config'

interface Props {
    children: React.ReactNode
}

function QueryProvider({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider