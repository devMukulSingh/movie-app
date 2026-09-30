import { useEffect, useState } from "react"



export const useFetch = <T>(fetchFunc: () => Promise<T>, autoFetch?: boolean) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await fetchFunc();
            setData(data);
        }
        catch (error: any) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false)
    }
    useEffect(() => {
        if (autoFetch) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            fetchData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { data, loading, error, reset, refetch: fetchData }
}