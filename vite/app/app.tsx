import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FileSystemRouter } from "file-system-router"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@/components/theme/provider"

const pages: Record<string, { default: React.ComponentType<unknown> }> =
    import.meta.glob("./pages/**/*.{jsx,tsx}", {
        eager: true,
    })

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <ThemeProvider>
                    <FileSystemRouter pages={pages} />
                </ThemeProvider>
            </Router>
        </QueryClientProvider>
    )
}
