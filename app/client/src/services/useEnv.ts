export function useEnv() {
    const env = (envVariable: string): string => {
        return <string>import.meta.env[envVariable]
    }

    return { env }
}
