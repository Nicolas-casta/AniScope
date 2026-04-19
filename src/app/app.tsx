import Router from './router'
import QueryProvider from '../core/providers/query-provider'

function App() {
    return (
        <QueryProvider>
            <Router />
        </QueryProvider>
    )
}

export default App