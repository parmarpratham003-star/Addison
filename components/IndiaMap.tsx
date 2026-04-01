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

// Map GeoJSON state names to our regionData keys (INDIAN_STATES format)
const STATE_NAME_MAP: Record<string, string> = {
  "Andaman and Nicobar Islands": "Andaman & Nicobar Island",
  "Dadra and Nagar Haveli": "Dadara & Nagar Haveli",
  "Dadra and Nagar Haveli and Daman and Diu": "Dadara & Nagar Haveli", // fallback - new UT
  "Daman and Diu": "Daman & Diu",
  "Jammu and Kashmir": "Jammu & Kashmir",
  "NCT of Delhi": "Delhi",
  "Odisha": "Odisha",
  "Puducherry": "Puducherry",
  "Orissa": "Odisha",
};

function interpolateColor(
  color1: string,
  color2: string,
  t: number
): string {
  const hex2rgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };
  const rgb2hex = (r: number, g: number, b: number) =>
    `#${[r, g, b].map((x) => Math.round(x).toString(16).padStart(2, "0")).join("")}`;

  const [r1, g1, b1] = hex2rgb(color1);
  const [r2, g2, b2] = hex2rgb(color2);
  const r = r1 + (r2 - r1) * t;
  const g = g1 + (g2 - g1) * t;
  const b = b1 + (b2 - b1) * t;
  return rgb2hex(r, g, b);
}

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

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 500;

export function IndiaMap({ regionData, title }: IndiaMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
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

  const { maxCount, getFill } = useMemo(() => {
    const values = Object.values(regionData).map((d) => d.value);
    const maxCount = Math.max(...values, 1);
    return {
      maxCount,
      getFill: (count: number) => {
        const t = count / maxCount;
        return interpolateColor("#8ecae6", "#2c5282", t);
      },
    };
  }, [regionData]);

  const getCount = (stateKey: string): number =>
    regionData[stateKey]?.value ?? 0;

  return (
    <div className="relative flex h-full w-full min-h-[400px] flex-col">
      <h3 className="mb-2 shrink-0 text-sm font-medium text-addisons-muted">{title}</h3>
      <div ref={containerRef} className="min-h-0 flex-1 w-full overflow-hidden">
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
                const fill =
                  count > 0 ? getFill(count) : "#e2e8f0";
                const isHovered = hoveredState === stateKey;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHovered ? "#57bb90" : fill}
                    stroke="#64748b"
                    strokeWidth={1.2}
                    onMouseEnter={() => setHoveredState(stateKey)}
                    onMouseLeave={() => setHoveredState(null)}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", cursor: "pointer" },
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
      {hoveredState && (
        <div
          className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-lg bg-addisons-primary-dark px-3 py-2 text-sm font-medium text-white shadow-lg"
          role="tooltip"
        >
          {hoveredState}: {getCount(hoveredState)}
        </div>
      )}
    </div>
  );
}
