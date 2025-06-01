'use client'
import { useQuery } from "../use-query/use-query";
import DefaultFallback from "../with-suspense/default-fallback";
import { SpeedDialQueriesComponent } from "./speed-dial-component"
import { getSpeedDialQueries } from "@/store/query-store"

export const SpeedDialQueries = () => {
    const { data, loading } = useQuery(getSpeedDialQueries);
    if(loading) {
       return <DefaultFallback />
    }

    if(data) {
        return <SpeedDialQueriesComponent queries={data} />
    }
    
}