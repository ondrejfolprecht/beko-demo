"use client";

import { cn } from "cn";
import { useInView } from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Component, useMemo, useRef, useState, type ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { officeCountries, trust } from "@/content/site";

// MapLibre is about a megabyte, so it loads only when the map approaches the viewport.
const OfficeMapCanvas = dynamic(() => import("./office-map-canvas").then((module) => module.OfficeMapCanvas), {
  ssr: false,
  loading: () => <div className="size-full animate-pulse bg-mist" />,
});

const allOffices = officeCountries.flatMap((country) => country.offices);

function StaticMap() {
  const { src, alt, width, height } = trust.map.fallback;
  return <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 60vw, 100vw" className="size-full object-contain p-6" />;
}

/** mapcn rethrows MapLibre failures during render. Without this boundary they would take down the page. */
class MapBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? <StaticMap /> : this.props.children;
  }
}

function supportsWebGL2() {
  return Boolean(document.createElement("canvas").getContext("webgl2"));
}

export function OfficeMap() {
  const frame = useRef<HTMLDivElement>(null);
  const near = useInView(frame, { once: true, margin: "500px" });
  const [country, setCountry] = useState(officeCountries[0].id);
  const [selected, setSelected] = useState<string | null>(null);
  const focus = officeCountries.find((item) => item.id === country)?.offices ?? allOffices;
  const interactive = useMemo(() => near && supportsWebGL2(), [near]);

  function selectOffice(id: string) {
    setSelected(id);
    const owner = officeCountries.find((item) => item.offices.some((office) => office.id === id));
    if (owner) setCountry(owner.id);
  }

  return (
    <div className="border border-line">
      <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <div className="order-2 border-t border-line p-5 lg:order-1 lg:border-t-0 lg:border-r lg:p-6">
          <h3 className="text-[1.375rem] leading-tight font-semibold tracking-[-0.02em]">{trust.map.title}</h3>
          <p className="mt-1 text-[15px] text-muted-foreground">{trust.map.text}</p>
          <Tabs value={country} onValueChange={(value) => { setCountry(value); setSelected(null); }} className="mt-4">
            <TabsList aria-label="Země" className="-mx-5 gap-5 overflow-x-auto px-5 [scrollbar-width:none] lg:-mx-6 lg:px-6">
              {officeCountries.map((item) => (
                <TabsTrigger key={item.id} value={item.id} className="min-h-11 shrink-0 after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-blue after:opacity-0 data-active:after:opacity-100">
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {officeCountries.map((item) => (
              <TabsContent key={item.id} value={item.id}>
                <ul>
                  {item.offices.map((office) => (
                    <li key={office.id} className="border-b border-line last:border-b-0">
                      <button
                        type="button"
                        aria-pressed={selected === office.id}
                        onClick={() => setSelected(office.id)}
                        className={cn("-mx-2 flex w-[calc(100%+1rem)] flex-col items-start px-2 py-2.5 text-left transition-colors hover:bg-mist", selected === office.id && "bg-mist")}
                      >
                        <span className="flex items-center gap-2 text-[15px] font-semibold">
                          <span aria-hidden="true" className={cn("size-2 transition-colors", selected === office.id ? "bg-red" : "bg-blue")} />
                          {office.city}
                        </span>
                        <span className="pl-4 text-[13px] leading-snug text-muted-foreground">{office.address}</span>
                      </button>
                      {selected === office.id && (
                        <a href={`tel:${office.phone.replaceAll(/\s/g, "")}`} className="block pb-2.5 pl-4 text-[13px] font-medium hover:text-blue">{office.phone}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div ref={frame} className="relative order-1 h-80 lg:order-2 lg:h-auto lg:min-h-[32rem]">
          <div className="absolute inset-0">
            {near && !interactive && <StaticMap />}
            {interactive && (
              <MapBoundary>
                <OfficeMapCanvas offices={allOffices} focus={focus} selected={selected} onSelect={selectOffice} />
              </MapBoundary>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
