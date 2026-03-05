import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="app">
      {/* Top bar */}
      <header className="topbar">
        <div className="brand">
          <span className="brandBadge">MARVEL</span>
          <span className="brandText">STUDIOS</span>
        </div>

        <div className="topbarRight">
          <div className="searchWrap">
            <span className="searchIcon">⌕</span>
            <input
              className="searchInput"
              placeholder="Search a film, channel, or keyword..."
            />
          </div>
          <div className="avatar">AS</div>
        </div>
      </header>

      <main className="container">
        {/* Metric cards row */}
        <section className="metricRow">
          <MetricCard label="TOTAL REVIEWS" value="2,847" sub="+124 this week" />
          <MetricCard label="AVG SENTIMENT" value="78%" sub="Positive" />
          <MetricCard label="TOTAL VIEWS" value="42.6M" sub="Across all reviews" />
          <MetricCard label="TOTAL LIKES" value="3.2M" sub="+180k this month" />
        </section>

        {/* Main grid */}
        <section className="grid">
          {/* Left column */}
          <div className="colLeft">
            <Panel
              title="Sentiment Timeline"
              subtitle="Reviews sentiment & engagement over time"
              rightTag={<span className="tag tagGood">+5% this year</span>}
            >
              <div className="chartPlaceholder">
                <div className="chartHeader">
                  <LegendDot label="Positive" />
                  <LegendDot label="Negative" isMuted />
                </div>
                <div className="fakeChartArea">
                  <div className="fakeLine" />
                  <div className="fakeMarker" />
                </div>
              </div>
            </Panel>

            <Panel title="Top Sentiment Words" subtitle="Most common across all reviews">
              <div className="chips">
                {[
                  "masterpiece",
                  "iconic",
                  "revolutionary",
                  "overrated",
                  "brilliant",
                  "boring",
                  "game-changer",
                  "epic",
                  "disappointing",
                  "legendary",
                  "nostalgic",
                  "predictable",
                  "stunning",
                  "groundbreaking",
                  "meh",
                ].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </Panel>

            <Panel title="Creator Risk Assessment" subtitle="Credibility analysis of top reviewers">
              <div className="list">
                <RiskRow name="FilmCriticX" status="High Risk" score="87" tone="high" />
                <RiskRow name="MovieMaven" status="Moderate" score="64" tone="mid" />
                <RiskRow name="CinephileDaily" status="Low Risk" score="12" tone="low" />
                <RiskRow name="PopcornReviews" status="High Risk" score="91" tone="high" />
                <RiskRow name="SceneByScene" status="Low Risk" score="9" tone="low" />
              </div>
            </Panel>
          </div>

          {/* Right column */}
          <div className="colRight">
            <Panel title="Sentiment Breakdown" subtitle="Overall audience mood distribution">
              <div className="split">
                <div className="donutPlaceholder">
                  <div className="donutRing">
                    <div className="donutCenter">
                      <div className="donutValue">68%</div>
                      <div className="donutLabel">Positive</div>
                    </div>
                  </div>
                </div>

                <div className="breakdownList">
                  <BreakRow label="Positive" value="68%" />
                  <BreakRow label="Neutral" value="18%" muted />
                  <BreakRow label="Negative" value="14%" muted />
                </div>
              </div>

              <div className="divider" />

              <div className="signals">
                <div className="signalsTitle">AUDIENCE MOOD SIGNALS</div>
                <SignalBar label="Excitement" value={82} />
                <SignalBar label="Nostalgia" value={67} />
                <SignalBar label="Satisfaction" value={74} />
                <SignalBar label="Disappointment" value={18} muted />
                <SignalBar label="Hype" value={91} />
              </div>
            </Panel>

            <Panel title="Review Velocity" subtitle="New reviews per week since release">
              <div className="barChartPlaceholder">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="bar" style={{ height: `${30 + i * 7}%` }} />
                ))}
              </div>
              <div className="barLabels">
                <span>Week 1</span>
                <span>Week 8</span>
              </div>
            </Panel>

            <Panel title="Most Engaged Reviews" subtitle="Highest-performing review videos">
              <div className="engagedList">
                <EngagedItem
                  title="Iron Man Changed Everything — Here's Why"
                  meta="FilmCriticX • 2 days ago"
                />
                <EngagedItem title="The REAL reason Iron Man works so well" meta="MovieMaven • 1 week ago" />
                <EngagedItem title="Rewatching Iron Man in 2026..." meta="SceneByScene • 2 weeks ago" />
              </div>
            </Panel>
          </div>
        </section>

        {/* Bottom full-width section */}
        <section className="bottomSection">
          <Panel title="Key Discussion Topics" subtitle="Most discussed aspects from review transcripts">
            <div className="topicBars">
              <TopicBar label="RDJ Acting" value={92} />
              <TopicBar label="Visual FX" value={78} />
              <TopicBar label="Origin Story" value={66} />
              <TopicBar label="Humor" value={58} />
              <TopicBar label="Villain" value={52} />
              <TopicBar label="Soundtrack" value={44} />
              <TopicBar label="Action Scenes" value={40} />
              <TopicBar label="Post-Credits" value={34} />
            </div>

            <div className="miniStats">
              <MiniStat label="RDJ Acting" value="95%" hint="sentiment" />
              <MiniStat label="Visual FX" value="82%" hint="sentiment" />
              <MiniStat label="Origin Story" value="88%" hint="sentiment" />
              <MiniStat label="Humor" value="91%" hint="sentiment" />
            </div>
          </Panel>
        </section>
      </main>
    </div>
  );
}

/* ---------- Small components ---------- */

function MetricCard({ label, value, sub }) {
  return (
    <div className="metricCard">
      <div className="metricLabel">{label}</div>
      <div className="metricValue">{value}</div>
      <div className="metricSub">{sub}</div>
    </div>
  );
}

function Panel({ title, subtitle, rightTag, children }) {
  return (
    <section className="panel">
      <div className="panelHeader">
        <div>
          <div className="panelTitle">{title}</div>
          {subtitle ? <div className="panelSubtitle">{subtitle}</div> : null}
        </div>
        {rightTag ? <div className="panelRight">{rightTag}</div> : null}
      </div>
      <div className="panelBody">{children}</div>
    </section>
  );
}

function LegendDot({ label, isMuted }) {
  return (
    <div className={"legendDot " + (isMuted ? "muted" : "")}>
      <span className="dot" />
      <span>{label}</span>
    </div>
  );
}

function RiskRow({ name, status, score, tone }) {
  return (
    <div className="riskRow">
      <div className="riskLeft">
        <div className="riskAvatar">{name.slice(0, 2).toUpperCase()}</div>
        <div className="riskMeta">
          <div className="riskName">{name}</div>
          <div className="riskStatus">{status}</div>
        </div>
      </div>
      <div className={"riskScore " + tone}>{score}</div>
    </div>
  );
}

function BreakRow({ label, value, muted }) {
  return (
    <div className={"breakRow " + (muted ? "muted" : "")}>
      <span className="breakLabel">{label}</span>
      <span className="breakValue">{value}</span>
    </div>
  );
}

function SignalBar({ label, value, muted }) {
  return (
    <div className={"signalRow " + (muted ? "muted" : "")}>
      <div className="signalTop">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="signalTrack">
        <div className="signalFill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function EngagedItem({ title, meta }) {
  return (
    <div className="engagedItem">
      <div className="thumb" />
      <div className="engagedText">
        <div className="engagedTitle">{title}</div>
        <div className="engagedMeta">{meta}</div>
      </div>
    </div>
  );
}

function TopicBar({ label, value }) {
  return (
    <div className="topicRow">
      <div className="topicLabel">{label}</div>
      <div className="topicTrack">
        <div className="topicFill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function MiniStat({ label, value, hint }) {
  return (
    <div className="miniStat">
      <div className="miniLabel">{label}</div>
      <div className="miniValue">{value}</div>
      <div className="miniHint">{hint}</div>
    </div>
  );
}