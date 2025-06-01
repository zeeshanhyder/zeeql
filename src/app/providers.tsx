import { QueryStoreProvider } from "@/store/query-store";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
    return (
        <QueryStoreProvider>
            {children}
        </QueryStoreProvider>
    );
}