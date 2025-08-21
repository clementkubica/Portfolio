type EduItem = {
  school: string
  location?: string
  start: number
  end: number
  detail?: string
  color?: string
}

type EduTimelineProps = {
  items: EduItem[]
  startYear?: number
  endYear?: number
  tickEvery?: number
  showYearsInLabels?: boolean
  labelStyle?: "plain" | "card"
}

export default function EduTimeline({
  items,
  startYear,
  endYear,
  tickEvery = 2,
  showYearsInLabels = false,
  labelStyle = "plain",
}: EduTimelineProps) {
  const min = startYear ?? Math.min(...items.map(i => i.start))
  const max = endYear ?? Math.max(...items.map(i => i.end))
  const span = Math.max(1, max - min)

  const ticks: number[] = []
  for (let y = min; y <= max; y += tickEvery) ticks.push(y)

  return (
    <div className={`tlx ${labelStyle === "card" ? "tlx--cardlabels" : ""}`} role="group" aria-label="Education timeline">
      <div className="tlx-rows">
        {items.map((i) => {
          const leftPct = ((i.start - min) / span) * 100
          const widthPct = Math.max(1, ((i.end - i.start) / span) * 100)
          return (
            <div className="tlx-row" key={`${i.school}-${i.start}`}>
              <div className={`tlx-label ${labelStyle === "card" ? "tlx-label--card" : ""}`}>
                <strong className="tlx-school">{i.school}</strong>
                <span className="tlx-meta">
                  {i.location || ""}
                  {showYearsInLabels ? (i.location ? ` · ${i.start}–${i.end}` : `${i.start}–${i.end}`) : ""}
                  {i.detail ? `${showYearsInLabels ? " · " : (i.location ? " · " : "")}${i.detail}` : ""}
                </span>
              </div>
              <div className="tlx-track" aria-label={`${i.school} ${i.start}–${i.end}`}>
                <span
                  className="tlx-bar"
                  style={{
                    left: `${leftPct}%`,
                    width: `${widthPct}%`,
                    background: i.color || "var(--text)",
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className="tlx-axis" aria-hidden="true">
        {ticks.map((y) => (
          <div key={y} className="tlx-tick">
            <span className="tlx-tline" />
            <span className="tlx-tlabel">{y}</span>
          </div>
        ))}
      </div>
    </div>
  )
}