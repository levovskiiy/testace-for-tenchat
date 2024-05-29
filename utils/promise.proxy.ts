export type PromiseProxy<T> = {
    resolve: (value: (T | PromiseLike<T>)) => void
    reject: (reason?: any) => void
    promise: Promise<T>
}

export function promiseProxy<T>() {
    const proxy = {} as PromiseProxy<T>

    proxy.promise = new Promise<T>((resolve, reject) => {
        proxy.resolve = resolve
        proxy.reject = reject
    })

    return proxy
}
