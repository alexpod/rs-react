import { useEffect } from "react";
import { useTimeout } from "./useTimeout";

export function useDebounce(callback, delay, dependencies) {
    // eslint-disable-next-line
    const { reset, clear } = useTimeout(callback, delay)
    useEffect(reset, [...dependencies, reset])
    // eslint-disable-next-line
    useEffect(clear, [])
}