import React from 'react';
import {useState, useEffect} from 'react';

const useLoadErrorHandler = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string|null>(null);
    const executeWithLoading = async(asyncFunction : () => Promise<any>) => {
        setLoading(true);
        setError(null);
        try {
            const result = await asyncFunction();
            return result;
        } catch (err) {
            setError("Ошибка загрузки");
            throw err;
        }
    }
    return {loading, error, executeWithLoading }
}
export default useLoadErrorHandler;