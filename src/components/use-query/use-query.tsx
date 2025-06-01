import { useState, useEffect } from "react"

type QueryResult<T> = {
    data: T | null
    error: string | null
    loading: boolean
}

export const useQuery = <T, U>(
    query: (args: T) => Promise<U>
): QueryResult<U> => {
    const [data, setData] = useState<U | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setIsLoading(true)
        query({} as T)
            .then((response) => {
                setData(response ?? null)
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return {
        data,
        error,
        loading,
    }
}