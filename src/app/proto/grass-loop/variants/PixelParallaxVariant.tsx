import styles from "./PixelParallaxVariant.module.css";

const UNIT = 4;
const COLS = 80;
const ROWS = 22;
const W = COLS * UNIT;
const H = ROWS * UNIT;

const BACK_HILL_COLOR = "#a9cf93";
const FRONT_HILL_COLOR = "#557d43";
const TUFT_COLOR = "#7aa85c";
const TREE_CANOPY_LIGHT = "#7ab35c";
const TREE_CANOPY_BASE = "#5a8f45";
const TREE_CANOPY_DARK = "#3f6b34";
const TREE_TRUNK = "#6b4a2f";

function hillTop(
  col: number,
  base: number,
  terms: [freq: number, amp: number, phase: number][],
) {
  let h = base;
  for (const [freq, amp, phase] of terms) h += amp * Math.sin(col * freq + phase);
  return Math.max(2, Math.min(ROWS - 2, Math.round(h)));
}

const backTerms: [number, number, number][] = [
  [0.22, 2.2, 0.4],
  [0.09, 1.1, 2],
];
const frontTerms: [number, number, number][] = [
  [0.27, 2.4, 2.1],
  [0.55, 1.0, 0],
];

const backHillCols = Array.from({ length: COLS }, (_, c) => ({
  c,
  top: hillTop(c, 9, backTerms),
}));
const frontHillCols = Array.from({ length: COLS }, (_, c) => ({
  c,
  top: hillTop(c, 14, frontTerms),
}));

const TREES = [
  { col: 8, scale: 1, dur: 5.2, delay: -1.2 },
  { col: 22, scale: 0.8, dur: 4.4, delay: -3 },
  { col: 40, scale: 1.15, dur: 6, delay: -0.5 },
  { col: 56, scale: 0.75, dur: 4.8, delay: -4 },
  { col: 72, scale: 0.95, dur: 5.6, delay: -2.2 },
];

const TUFTS = frontHillCols
  .filter((_, i) => i % 4 === 2)
  .map(({ c, top }, i) => ({
    x: c * UNIT,
    top,
    amp: 4 + ((i * 7) % 5),
    dur: 2 + ((i * 11) % 14) / 10,
    delay: -((i * 13) % 20) / 10,
  }));

const CLOUDS = [
  { x: 30, y: 10, u: 4 },
  { x: 150, y: 6, u: 3.4 },
  { x: 250, y: 16, u: 4.6 },
];

const CLOUD_CELLS: [number, number][] = [
  [2, 0],
  [3, 0],
  [4, 0],
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [5, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [3, 2],
  [4, 2],
  [5, 2],
  [6, 2],
];

const TREE_CELLS: [col: number, row: number, color: string][] = [
  [2, 0, TREE_CANOPY_LIGHT],
  [3, 0, TREE_CANOPY_LIGHT],
  [1, 1, TREE_CANOPY_BASE],
  [2, 1, TREE_CANOPY_BASE],
  [3, 1, TREE_CANOPY_BASE],
  [4, 1, TREE_CANOPY_BASE],
  [0, 2, TREE_CANOPY_BASE],
  [1, 2, TREE_CANOPY_BASE],
  [2, 2, TREE_CANOPY_BASE],
  [3, 2, TREE_CANOPY_BASE],
  [4, 2, TREE_CANOPY_BASE],
  [5, 2, TREE_CANOPY_BASE],
  [1, 3, TREE_CANOPY_DARK],
  [2, 3, TREE_CANOPY_DARK],
  [3, 3, TREE_CANOPY_DARK],
  [4, 3, TREE_CANOPY_DARK],
  [2, 4, TREE_TRUNK],
  [3, 4, TREE_TRUNK],
];

function Tree({
  col,
  scale,
  dur,
  delay,
}: {
  col: number;
  scale: number;
  dur: number;
  delay: number;
}) {
  const u = UNIT * scale;
  const centerX = col * UNIT + UNIT / 2;
  const originX = centerX - 3 * u;
  const baseRow = hillTop(col, 14, frontTerms) + 1;
  const topY = baseRow * UNIT - 4 * u;

  return (
    <g
      className={styles.tree}
      style={{ "--dur": `${dur}s`, "--delay": `${delay}s` } as React.CSSProperties}
    >
      {TREE_CELLS.map(([colOff, row, color], i) => (
        <rect
          key={i}
          x={originX + colOff * u}
          y={topY + row * u}
          width={u}
          height={u}
          fill={color}
          shapeRendering="crispEdges"
        />
      ))}
    </g>
  );
}

function CloudLayer() {
  return (
    <g className={styles.clouds}>
      {[0, W].map((offset) =>
        CLOUDS.map((cloud, ci) =>
          CLOUD_CELLS.map(([col, row], i) => (
            <rect
              key={`${offset}-${ci}-${i}`}
              x={offset + cloud.x + col * cloud.u}
              y={cloud.y + row * cloud.u}
              width={cloud.u}
              height={cloud.u}
              fill="#ffffff"
              opacity={0.9}
              shapeRendering="crispEdges"
            />
          )),
        ),
      )}
    </g>
  );
}

export default function PixelParallaxVariant() {
  return (
    <svg
      className={styles.scene}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel-art park scene with drifting clouds, swaying trees, and grass"
    >
      <CloudLayer />

      {backHillCols.map(({ c, top }) => (
        <rect
          key={`bh-${c}`}
          x={c * UNIT}
          y={top * UNIT}
          width={UNIT}
          height={H - top * UNIT}
          fill={BACK_HILL_COLOR}
        />
      ))}

      {TREES.map((t) => (
        <Tree key={t.col} {...t} />
      ))}

      {frontHillCols.map(({ c, top }) => (
        <rect
          key={`fh-${c}`}
          x={c * UNIT}
          y={top * UNIT}
          width={UNIT}
          height={H - top * UNIT}
          fill={FRONT_HILL_COLOR}
        />
      ))}

      {TUFTS.map((tuft, i) => (
        <rect
          key={i}
          className={styles.tuft}
          style={
            {
              "--amp": `${tuft.amp}deg`,
              "--dur": `${tuft.dur}s`,
              "--delay": `${tuft.delay}s`,
            } as React.CSSProperties
          }
          x={tuft.x}
          y={(tuft.top - 2) * UNIT}
          width={UNIT}
          height={2 * UNIT}
          fill={TUFT_COLOR}
          shapeRendering="crispEdges"
        />
      ))}
    </svg>
  );
}
