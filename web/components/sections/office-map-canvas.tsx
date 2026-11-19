"use client";

import { cn } from "cn";
import { useEffect, useRef, useState } from "react";
import { Map, MapControls, MapMarker, MarkerContent, MarkerPopup, MarkerTooltip, useMap } from "@/components/ui/map";
import type { Office } from "@/content/site";

const REGION_CENTER: [number, number] = [15.2, 48.2];
const PADDING = { top: 56, bottom: 56, left: 56, right: 56 };

type OfficeMapCanvasProps = {
  offices: Office[];
  /** Offices of the selected country, used to frame the map. */
  focus: Office[];
  selected: string | null;
  onSelect: (id: string) => void;
};

function bounds(offices: Office[]): [[number, number], [number, number]] {
  const longitudes = offices.map((office) => office.coordinates[0]);
  const latitudes = offices.map((office) => office.coordinates[1]);
  return [[Math.min(...longitudes), Math.min(...latitudes)], [Math.max(...longitudes), Math.max(...latitudes)]];
}

/** Lives inside the map, so it can use the map instance as soon as the style is ready. */
function MapDirector({ offices, focus, selected }: Pick<OfficeMapCanvasProps, "offices" | "focus" | "selected">) {
  const { map, isLoaded } = useMap();
  const initialised = useRef(false);

  useEffect(() => {
    if (!map || !isLoaded) return;

    if (!initialised.current) {
      initialised.current = true;
      // Basemap labels are in English and compete with the markers, so the map stays label-free.
      for (const layer of map.getStyle().layers) {
        if (layer.type === "symbol") map.setLayoutProperty(layer.id, "visibility", "none");
      }
      map.fitBounds(bounds(offices), { padding: PADDING, duration: 0 });
      return;
    }

    const active = offices.find((office) => office.id === selected);
    if (active) map.flyTo({ center: active.coordinates, zoom: 10.5, duration: 1400 });
    else map.fitBounds(bounds(focus), { padding: PADDING, maxZoom: 8, duration: 1400 });
  }, [focus, isLoaded, map, offices, selected]);

  return null;
}

export function OfficeMapCanvas({ offices, focus, selected, onSelect }: OfficeMapCanvasProps) {
  const [touch] = useState(() => window.matchMedia("(pointer: coarse)").matches);

  return (
    <Map
      theme="light"
      center={REGION_CENTER}
      zoom={5.35}
      minZoom={4}
      scrollZoom={false}
      dragPan={!touch}
      dragRotate={false}
      pitchWithRotate={false}
      className="size-full"
    >
      <MapDirector offices={offices} focus={focus} selected={selected} />
      <MapControls position="top-right" showZoom />
      {offices.map((office) => {
        const active = office.id === selected;
        return (
          <MapMarker key={office.id} longitude={office.coordinates[0]} latitude={office.coordinates[1]} onClick={() => onSelect(office.id)}>
            <MarkerContent>
              <span className="relative block">
                <span className={cn("absolute -inset-1.5 animate-ping bg-blue/30", !active && "hidden")} />
                <span className={cn("relative block border-2 border-white transition-all duration-300", active ? "size-5 bg-red" : "size-3.5 bg-blue hover:bg-blue-deep")} />
              </span>
            </MarkerContent>
            <MarkerTooltip className="px-2 py-1 text-[13px]">{office.city}</MarkerTooltip>
            <MarkerPopup className="p-3">
              <p className="text-[15px] font-semibold">{office.city}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-muted-foreground">{office.address}</p>
              <a href={`tel:${office.phone.replaceAll(/\s/g, "")}`} className="mt-1.5 block text-[13px] font-medium whitespace-nowrap hover:text-blue">{office.phone}</a>
            </MarkerPopup>
          </MapMarker>
        );
      })}
    </Map>
  );
}
