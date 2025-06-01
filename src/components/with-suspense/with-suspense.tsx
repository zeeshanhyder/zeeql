import { ReactElement, Suspense } from 'react'
import DefaultFallback from './default-fallback'

export const withSuspense = (
    Component: () => ReactElement,
    Fallback?: () => ReactElement
) => {
    const FallbackComponent = Fallback ?? DefaultFallback
    return () => (
        <Suspense fallback={<FallbackComponent />}>
            <Component />
        </Suspense>
    )
}