"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const INDIA_GEO_URL =
  "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

const STATE_NAME_MAP: Record<string, string> = {
  "Andaman and Nicobar Islands": "Andaman & Nicobar Island",
  "Dadra and Nagar Haveli": "Dadara & Nagar Haveli",
  "Dadra and Nagar Haveli and Daman and Diu": "Dadara & Nagar Haveli",
  "Daman and Diu": "Daman & Diu",
  "Jammu and Kashmir": "Jammu & Kashmir",
  "NCT of Delhi": "Delhi",
  "Odisha": "Odisha",
  "Puducherry": "Puducherry",
  "Orissa": "Odisha",
};

function getStateKey(geoProps: Record<string, unknown>): string | null {
  const raw =
    (geoProps.st_nm as string) ??
    (geoProps.ST_NM as string) ??
    (geoProps.name as string);
  if (!raw || typeof raw !== "string") return null;
  return STATE_NAME_MAP[raw] ?? raw;
}

interface IndiaMapProps {
  regionData: Record<string, { value: number }>;
  title: string;
}

export function IndiaMap({ regionData, title }: IndiaMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 800,
    height: 500,
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({
        width: Math.max(width, 100),
        height: Math.max(height, 100),
      });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const maxCount = Math.max(
    ...Object.values(regionData).map((d) => d.value),
    1
  );

  const getCount = (stateKey: string): number =>
    regionData[stateKey]?.value ?? 0;

  const getFill = (count: number) => {
    const t = count / maxCount;
    return `rgba(45,60,89,${0.2 + t * 0.6})`;
  };

  return (
    <div className="relative flex h-full w-full min-h-[400px] flex-col">

      {/* Title */}
      <h3 className="mb-3 text-sm font-medium text-[#2d3c59]/70">
        {title}
      </h3>

      {/* Map (NO BOX / NO BORDER) */}
      <div
        ref={containerRef}
        className="flex-1 w-full overflow-hidden"
      >
        <ComposableMap
          width={dimensions.width}
          height={dimensions.height}
          projection="geoMercator"
          projectionConfig={{
            scale: 1400,
            center: [78.9629, 22.5937],
          }}
        >
          <ZoomableGroup center={[78.9629, 22.5937]} zoom={1}>
            <Geographies geography={INDIA_GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const stateKey = getStateKey(geo.properties);
                  const count = stateKey ? getCount(stateKey) : 0;
                  const isHovered = hoveredState === stateKey;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        isHovered
                          ? "#2d3c59"
                          : count > 0
                          ? getFill(count)
                          : "#e5e7eb"
                      }
                      stroke="#ffffff"
                      strokeWidth={0.8}
                      onMouseEnter={() => setHoveredState(stateKey)}
                      onMouseLeave={() => setHoveredState(null)}
                      style={{
                        default: {
                          outline: "none",
                          transition: "all 0.25s ease",
                        },
                        hover: {
                          outline: "none",
                          cursor: "pointer",
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Tooltip */}
      {hoveredState && (
        <div
          className="
            pointer-events-none absolute bottom-5 left-1/2
            -translate-x-1/2
            bg-[#2d3c59] text-[#eaebd0]
            px-3 py-1.5 text-xs font-medium
            shadow-[0_4px_16px_rgba(45,60,89,0.25)]
          "
          style={{ borderRadius: "3px" }}
        >
          {hoveredState} — {getCount(hoveredState)}
        </div>
      )}
    </div>
  );
}