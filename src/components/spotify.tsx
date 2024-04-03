"use client";

import useSWR from "swr";

export default function Spotify() {
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/spotify", fetcher, {
    revalidateIfStale: true,
  });

  return (
    <section className="relative w-full pb-24">
      <div className="container relative w-full px-8 pt-0 pb-0 mx-auto lg:px-4">
        <div className="flex flex-col w-full text-left lg:text-center">
          <strong className="mb-4 text-xs font-inter font-semibold tracking-widest uppercase text-slate-500">
            spotify lounge
          </strong>
          <h1 className="mb-6 font-playfair text-4xl font-bold tracking-tighter text-black md:text-8xl lg:text-6xl">
            {data?.data?.isPlaying ? "Listening;" : "Offline;"}
            <br />
            {data?.data?.isPlaying
              ? `${data?.data?.artist} - ${data?.data?.title}`
              : "Sleeping"}
          </h1>
          <p className="font-inter font-light mx-auto text-md md:text-lg leading-snug text-slate-500 lg:w-1/2">
            They say music helps you go through tough times, so this is my
            current soundtrack to world domination.
          </p>
        </div>
      </div>
    </section>
  );
}
