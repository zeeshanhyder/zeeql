import { QueryForm } from "@/components/query-form/query-form";
import { SpeedDialQueries } from "@/components/speed-dial/speed-dial";

export default function Home() {
  return (
    <section className="w-100 my-0 mx-auto flex flex-col lg:min-w-[800px] justify-center grow">
        <div className="flex flex-col justify-center px-10">
          <h1 className="font-bold text-3xl my-10 text-center">ZQL</h1>
          <QueryForm />
          <div className="my-15 min-h-[300px]">
            <SpeedDialQueries />
          </div>
        </div>
    </section>
  )
}
