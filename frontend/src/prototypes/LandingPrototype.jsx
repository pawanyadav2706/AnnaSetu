import { useState } from "react";

export default function LandingPrototype() {
  const [notice, setNotice] = useState("");
  function handleAction(event) {
    const target = event.target.closest("button, a");
    if (!target) return;
    if (target.tagName === "A" && target.getAttribute("href") === "#") event.preventDefault();
    setNotice(target.textContent.trim().replace(/\s+/g, " "));
    window.setTimeout(() => setNotice(""), 2200);
  }
  return (
    <div className="prototype-landing-shell" onClick={handleAction}>
  <meta charSet="utf-8" /><meta content="width=device-width, initial-scale=1.0" name="viewport" /><meta content="web_standard" name="shell-type" /><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" /><link href="https://fonts.googleapis.com" rel="preconnect" /><link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" /><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" /><style dangerouslySetInnerHTML={{__html: "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}" }} /><header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><img alt="Modern vector logo for AnnaSetu: a stylized digital leaf seamlessly intertwined with an AI neural network circuit node and a bridge arc icon, emerald green #1e5e3a with saffron #f97316 accent, minimalist tech and sustainability mark. Design context: - Primary color: #1e5e3a
- Font: plusJakartaSans
- Mode: light
- Roundness: rounded-md
. The logo should be visually consistent with these brand tokens." className="h-8 w-auto object-contain" src="/annasetu_official_logo/screen.png" /><span className="font-headline-sm text-headline-sm text-primary tracking-tight">AnnaSetu</span><div className="hidden lg:flex items-center gap-space-2xs bg-surface-container px-space-xs py-space-2xs rounded-full text-on-surface-variant font-label-sm text-label-sm"><span className="material-symbols-outlined text-secondary text-[14px]">military_tech</span><span className>SIH 2026 | Team ByteBack# 129645</span></div></div><nav className="hidden xl:flex items-center gap-space-xs" data-active-classes="bg-primary text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm"><a aria-current="page" className="px-space-sm py-space-xs transition-colors bg-primary text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm" data-path="landing-overview" href="/prototype">Landing Overview</a><a className="px-space-sm py-space-xs rounded-lg text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="kitchen-iot-console" href="/prototype/kitchen">Kitchen IoT Console</a><a className="px-space-sm py-space-xs rounded-lg text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="dispatcher-and-fleet-map" href="/prototype/fleet">Dispatcher &amp; Fleet Map</a><a className="px-space-sm py-space-xs rounded-lg text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="ngo-partner-portal" href="/prototype/ngo">NGO Partner Portal</a></nav><div className="flex items-center gap-space-sm"><div className="hidden md:flex items-center gap-space-2xs bg-primary-fixed/40 px-space-xs py-space-2xs rounded-full text-on-primary-fixed-variant font-label-sm text-label-sm"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" /><span className>Online - Latency 18ms</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-140px)]"><div className="flex flex-col w-full">
      {/* Top Flash Ticker */}
      <div className="landing-network-ticker w-full bg-primary-container text-on-primary py-space-xs px-margin">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-xs font-label-md text-label-md">
          <div className="flex items-center gap-space-xs">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-tertiary-fixed animate-ping" />
            <span className="font-headline-sm text-headline-sm tracking-tight text-tertiary-fixed">Live National Network</span>
            <span className="text-surface-container-high/60 hidden sm:inline">-</span>
            <span className="hidden sm:inline text-surface-bright/90">Autonomous edge routing active across 8 metropolitan clusters</span>
          </div>
          <div className="flex items-center gap-space-md text-surface-bright/90">
            <div className="flex items-center gap-space-2xs">
              <span className="material-symbols-outlined text-[16px] text-secondary-fixed">speed</span>
              <span className>ESP32 Sync: <strong>1.4s</strong></span>
            </div>
            <div className="flex items-center gap-space-2xs">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">verified</span>
              <span className>FSSAI Norm Compliance: <strong>100%</strong></span>
            </div>
          </div>
        </div>
      </div><section className="w-full bg-surface-container-high border-b border-outline-variant/20 py-space-sm px-margin shadow-sm" id="judge-demo-bar"><div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-md"><div className="flex items-center gap-space-sm flex-wrap"><div className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-sm"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed animate-pulse">verified</span><span className="font-bold">SIH 2026 Live Interactive Simulation</span></div><div className="flex items-center gap-space-2xs text-on-surface-variant font-label-sm text-label-sm hidden sm:flex"><span className="material-symbols-outlined text-secondary text-[16px]">route</span><span className>4-Stage End-to-End Evaluation Workflow</span></div></div><div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs w-full xl:w-auto"><div className="flex items-center gap-space-xs px-space-sm py-space-2xs rounded-lg bg-primary-fixed text-on-primary-fixed-variant border border-primary font-label-sm text-label-sm shadow-sm"><div className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-[10px]">1</div><div className="flex flex-col"><span className="font-bold">Step 1: Scale Edge</span><span className="text-[10px] text-on-primary-fixed-variant/80">Surplus Logged (68kg)</span></div><span className="material-symbols-outlined text-[14px] text-primary ml-auto">check_circle</span></div><div className="flex items-center gap-space-xs px-space-sm py-space-2xs rounded-lg bg-surface-container-lowest text-on-surface hover:bg-primary-fixed/20 border border-outline-variant/20 transition-all font-label-sm text-label-sm"><div className="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[10px]">2</div><div className="flex flex-col"><span className="font-bold">Step 2: AI Match</span><span className="text-[10px] text-on-surface-variant">Hungarian Alg #9214</span></div><span className="material-symbols-outlined text-[14px] text-secondary ml-auto">autorenew</span></div><div className="flex items-center gap-space-xs px-space-sm py-space-2xs rounded-lg bg-surface-container-lowest text-on-surface hover:bg-primary-fixed/20 border border-outline-variant/20 transition-all font-label-sm text-label-sm"><div className="w-5 h-5 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-[10px]">3</div><div className="flex flex-col"><span className="font-bold">Step 3: EV Transit</span><span className="text-[10px] text-on-surface-variant">Van EV-08 (14 min)</span></div><span className="material-symbols-outlined text-[14px] text-on-surface-variant ml-auto">electric_meter</span></div><div className="flex items-center gap-space-xs px-space-sm py-space-2xs rounded-lg bg-surface-container-lowest text-on-surface hover:bg-primary-fixed/20 border border-outline-variant/20 transition-all font-label-sm text-label-sm"><div className="w-5 h-5 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-[10px]">4</div><div className="flex flex-col"><span className="font-bold">Step 4: NGO Handover</span><span className="text-[10px] text-on-surface-variant">Digital Custody QR</span></div><span className="material-symbols-outlined text-[14px] text-on-surface-variant ml-auto">qr_code_scanner</span></div></div></div></section>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface pt-space-xl pb-space-3xl">
        <div className="max-w-7xl mx-auto px-margin">
          {/* Grid: Asymmetric Typography & Key Imagery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Text Block */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-primary">eco</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider">SIH 2026 Climate &amp; Agritech Pioneer</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-background tracking-tight leading-[1.08]">
                Prevent Food Spoilage. <br />
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-tertiary to-primary-container">
                  Automate Surplus Redistribution.
                </span>
              </h1>
              <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl">
                AnnaSetu synchronizes smart IoT scale telemetry with AI predictive logistics to divert fresh commercial surplus to certified shelter kitchens within 42 minutes.
              </p>
              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-space-xs pt-space-xs w-full sm:w-auto"><a href="#judge-demo-bar" className="inline-flex items-center justify-center gap-space-2xs px-space-md py-space-sm rounded-lg bg-primary-fixed text-on-primary-fixed-variant font-label-lg text-label-lg shadow-sm border border-primary hover:bg-primary hover:text-on-primary transition-all"><span className="material-symbols-outlined text-[20px]">interactive_space</span><span className>Explore 4-Stage Live Workflow</span></a>
                <a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all" href="/prototype/kitchen">
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                  <span className>Open Kitchen Console</span>
                </a>
                <a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-on-secondary-container transition-all" href="/prototype/fleet">
                  <span className="material-symbols-outlined text-[20px]">near_me</span>
                  <span className>Track Live Dispatches</span>
                </a>
                <button className="inline-flex items-center justify-center gap-space-2xs px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-all" id="open-video-btn">
                  <span className="material-symbols-outlined text-[20px] text-primary">play_circle</span>
                  <span className>Watch 60-Sec Demo</span>
                </button>
              </div>
              {/* Micro Credibility Indicators */}
              <div className="pt-space-xs flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
                <div className="flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                  <span className>Zero Audit Leakage</span>
                </div>
                <div className="flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
                  <span className>Sub-second Batch Match</span>
                </div>
                <div className="flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">thermostat</span>
                  <span className>HACCP Thermal Guard</span>
                </div>
              </div>
            </div>
            {/* Visual Block: Photo + Floating AI Glass Telemetry */}
            <div className="lg:col-span-7 relative">
              {/* Background Glow Backdrop */}
              <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-primary-fixed-dim/30 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full bg-secondary-fixed/40 blur-2xl pointer-events-none" />
              <div className="relative flex flex-col lg:flex-row gap-space-sm overflow-visible">
                <div className="relative min-w-0 flex-1 rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest">
                  <img alt="Commercial kitchen with smart scale telemetry" className="hero-kitchen-image w-full h-[360px] xl:h-[400px] object-cover" src="/high_end_modern_commercial_kitchen_in_a_university_or_corporate_tech_park/screen.png" />
                </div>
                <div className="hero-telemetry-panel flex flex-col gap-space-sm lg:w-64">
                {/* Live Telemetry Panel */}
                <div className="bg-surface-container-lowest rounded-lg p-space-sm shadow-md flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">scale</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-space-2xs">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Scale Node #04 - Tech Dining 2</span>
                    </div>
                    <div className="font-headline-sm text-headline-sm text-on-surface">68.4 kg Fresh Dal &amp; Rice</div>
                    <div className="font-body-sm text-body-sm text-primary font-semibold">Surplus verified safe for 3h 40m</div>
                  </div>
                </div>
                {/* Dispatch Pulse Panel */}
                <div className="bg-inverse-surface rounded-lg p-space-sm shadow-lg text-inverse-on-surface">
                  <div className="flex items-center justify-between gap-space-sm font-label-sm text-label-sm mb-space-2xs">
                    <span className="text-tertiary-fixed font-semibold">AI Dispatch Match #9214</span>
                    <span className="bg-primary-container px-space-2xs py-[2px] rounded text-[10px]">Optimal Route</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-inverse-on-surface/90">Van EV-08 en route - ETA 14 mins to Annapurna Shelter</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* Quick Live Stat Ticker Banner */}
          <div className="mt-space-xl grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {/* Stat 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex items-center gap-space-md">
              <div className="w-14 h-14 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-[32px]">rice_bowl</span>
              </div>
              <div>
                <div className="font-display-lg text-display-lg text-primary tracking-tight" id="counter-meals">14,883+</div>
                <div className="font-headline-sm text-headline-sm text-on-surface">Meals Rescued Today</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">Diverted across 42 institutional kitchens</div>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex items-center gap-space-md">
              <div className="w-14 h-14 rounded-xl bg-tertiary-fixed/40 flex items-center justify-center text-tertiary flex-shrink-0">
                <span className="material-symbols-outlined text-[32px]">health_and_safety</span>
              </div>
              <div>
                <div className="font-display-lg text-display-lg text-tertiary tracking-tight">99.4%</div>
                <div className="font-headline-sm text-headline-sm text-on-surface">FSSAI Safety Verified</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">Strict dual-probe thermal logging at source</div>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex items-center gap-space-md">
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary flex-shrink-0">
                <span className="material-symbols-outlined text-[32px]">co2</span>
              </div>
              <div>
                <div className="font-display-lg text-display-lg text-secondary tracking-tight">38.2 Tons</div>
                <div className="font-headline-sm text-headline-sm text-on-surface">COΓéée Averted</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">Preventing methane release via landfill diversion</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partner Logos Banner */}
      <section className="w-full bg-surface-container-low py-space-lg">
        <div className="max-w-7xl mx-auto px-margin">
          <p className="text-center font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-space-md">
            Operational Pilots &amp; Integration Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-space-xl opacity-80">
            <div className="flex items-center gap-space-2xs font-headline-sm text-headline-sm text-on-surface">
              <span className="material-symbols-outlined text-primary text-[26px]">school</span>
              <span className>IIT Hyderabad Dining</span>
            </div>
            <div className="flex items-center gap-space-2xs font-headline-sm text-headline-sm text-on-surface">
              <span className="material-symbols-outlined text-primary text-[26px]">apartment</span>
              <span className>Infosys Green Cafeterias</span>
            </div>
            <div className="flex items-center gap-space-2xs font-headline-sm text-headline-sm text-on-surface">
              <span className="material-symbols-outlined text-secondary text-[26px]">volunteer_activism</span>
              <span className>Feeding India Hubs</span>
            </div>
            <div className="flex items-center gap-space-2xs font-headline-sm text-headline-sm text-on-surface">
              <span className="material-symbols-outlined text-secondary text-[26px]">group</span>
              <span className>Robin Hood Army Network</span>
            </div>
          </div>
        </div>
      </section>
      {/* Core Value & 3 Visual Pillar Cards with Real Photos */}
      <section className="w-full py-space-3xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div>
              <div className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant font-label-sm text-label-sm mb-space-xs">
                <span className="material-symbols-outlined text-[16px]">device_hub</span>
                <span className>Tri-Pillar Architecture</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-background tracking-tight">
                Engineered for Precision. Bound by Humanity.
              </h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              How AnnaSetu replaces chaotic phone-tree charity with calibrated, tamper-evident food rescue logistics.
            </p>
          </div>
          {/* Grid of 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Pillar Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md flex flex-col group hover:shadow-xl transition-all">
              <div className="relative h-60 overflow-hidden">
                <img alt="Smart IoT Scale Telemetry in Institutional Kitchen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/high_end_modern_commercial_kitchen_in_a_university_or_corporate_tech_park/screen.png" />
                <div className="absolute top-space-xs left-space-xs bg-surface-container-lowest/90 backdrop-blur-md px-space-xs py-space-2xs rounded text-primary font-label-sm text-label-sm font-bold flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-[16px]">sensors</span>
                  <span className>Step 01 - Source Logging</span>
                </div>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                    Source Prevention &amp; Smart IoT Scale Telemetry
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    Custom ESP32 strain-gauge scales record surplus weight, temperature, and shelf-life directly at the service counter. Chefs log meal composition in 4 taps without interrupting rush operations.
                  </p>
                </div>
                <div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">IoT Log Speed</span>
                  <span className="font-label-md text-label-md text-primary font-bold">&lt; 3.5 seconds</span>
                </div>
              </div>
            </div>
            {/* Pillar Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md flex flex-col group hover:shadow-xl transition-all">
              <div className="relative h-60 overflow-hidden">
                <img alt="Electric insulated delivery van and logistics staff" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/modern_electric_temperature_controlled_delivery_van_with_green_and_white_eco/screen.png" />
                <div className="absolute top-space-xs left-space-xs bg-surface-container-lowest/90 backdrop-blur-md px-space-xs py-space-2xs rounded text-secondary font-label-sm text-label-sm font-bold flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-[16px]">electric_bolt</span>
                  <span className>Step 02 - Route Matching</span>
                </div>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                    Zero-Emission Cold-Chain Route Matching
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    Our dynamic Hungarian matching algorithm computes traffic, shelter meal capacity, and thermal degradation rates to dispatch the closest refrigerated EV fleet with live temperature validation.
                  </p>
                </div>
                <div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Average Pickup ETA</span>
                  <span className="font-label-md text-label-md text-secondary font-bold">18.4 minutes</span>
                </div>
              </div>
            </div>
            {/* Pillar Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md flex flex-col group hover:shadow-xl transition-all">
              <div className="relative h-60 overflow-hidden">
                <img alt="Dignified food serving in community dining center" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/volunteers_and_staff_at_a_bright_clean_dignified_community_dining_center/screen.png" />
                <div className="absolute top-space-xs left-space-xs bg-surface-container-lowest/90 backdrop-blur-md px-space-xs py-space-2xs rounded text-tertiary font-label-sm text-label-sm font-bold flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-[16px]">favorite</span>
                  <span className>Step 03 - Dignified Handoff</span>
                </div>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                    Dignified Humanitarian Handover
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    Recipients receive piping-hot, nutritious meals in verified community centers. QR digital vouchers verify batch consumption and complete the chain-of-custody compliance report.
                  </p>
                </div>
                <div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Spoilage Rate</span>
                  <span className="font-label-md text-label-md text-tertiary font-bold">0.02% total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Problem vs Solution Matrix */}
      <section className="w-full py-space-3xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="text-center max-w-2xl mx-auto mb-space-2xl">
            <h2 className="font-headline-xl text-headline-xl text-on-background tracking-tight">
              The Redistribution Paradigm Shift
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Comparing traditional manual charity food runs with AnnaSetu's sensor-driven, automated infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            {/* Legacy Problem Side */}
            <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">warning</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">The Status Quo: Unstructured Waste</h3>
                </div>
                <span className="px-space-xs py-space-2xs rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">High Risk</span>
              </div>
              <ul className="space-y-space-sm font-body-md text-body-md text-on-surface-variant">
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-error text-[20px] flex-shrink-0 mt-0.5">cancel</span>
                  <span className><strong>Slow manual calls:</strong> Kitchen staff spend 45+ minutes telephoning individual local charities, resulting in meals souring past safe ingestion thresholds.</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-error text-[20px] flex-shrink-0 mt-0.5">cancel</span>
                  <span className><strong>Zero food safety audit trails:</strong> No ambient temperature logs or FSSAI-mandated handling history, leaving corporate kitchens legally exposed.</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-error text-[20px] flex-shrink-0 mt-0.5">cancel</span>
                  <span className><strong>Mismatched distribution:</strong> Too much food delivered to one shelter while another nearby community goes unserved.</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-error text-[20px] flex-shrink-0 mt-0.5">cancel</span>
                  <span className><strong>Landfill emissions:</strong> 40% of institutional surplus is dumped, accelerating municipal greenhouse methane release.</span>
                </li>
              </ul>
            </div>
            {/* AnnaSetu Solution Side */}
            <div className="bg-primary-container text-on-primary rounded-xl p-space-xl shadow-lg flex flex-col space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-primary">The AnnaSetu Standard: Autonomous &amp; Safe</h3>
                </div>
                <span className="px-space-xs py-space-2xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">Zero Waste</span>
              </div>
              <ul className="space-y-space-sm font-body-md text-body-md text-surface-container-lowest">
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
                  <span className><strong>Instant automated dispatch:</strong> Scale telemetry auto-triggers a vehicle request the moment surplus exceeds 10kg with calibrated expiry countdowns.</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
                  <span className><strong>Continuous thermal compliance:</strong> IoT probes record source temp, vehicle cold-lock, and arrival heat index into an immutable audit registry.</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
                  <span className><strong>Equitable allocation engine:</strong> Real-time demand aggregation balances meal quantities across child centers, shelters, and old-age homes.</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[20px] flex-shrink-0 mt-0.5">check_circle</span>
                  <span className><strong>Certified ESG reporting:</strong> Cafeteria managers receive automated Scope 3 and CSR compliance reports for corporate sustainability disclosures.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Live Product Demo / Interactive Console Preview */}
      <section className="w-full py-space-3xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="text-center max-w-3xl mx-auto mb-space-2xl">
            <div className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-sm text-label-sm mb-space-xs">
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              <span className>Live Console Telemetry Mockup</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-background tracking-tight">
              Engineered for Busy Kitchen Heads &amp; Dispatch Fleet Leads
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Clean, non-intrusive terminal designed for touchscreens mounted in high-tempo kitchens.
            </p>
          </div>
          {/* Interactive Console Teaser UI */}
          <div className="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden">
            {/* Mock Browser Bar */}
            <div className="bg-surface-container-high px-space-md py-space-xs flex items-center justify-between">
              <div className="flex items-center gap-space-2xs">
                <span className="w-3 h-3 rounded-full bg-error" />
                <span className="w-3 h-3 rounded-full bg-secondary-container" />
                <span className="w-3 h-3 rounded-full bg-primary-fixed" />
                <span className="font-label-sm text-label-sm text-on-surface-variant ml-space-xs">console.annasetu.in/kitchen/live-feed</span>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className>WebSocket Live - 6 Nodes Online</span>
              </div>
            </div>
            {/* Dashboard Layout Inside Preview */}
            <div className="p-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              {/* Active Surplus Feeds (8 cols) */}
              <div className="lg:col-span-8 space-y-space-md">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">Surplus Lots Pending Dispatch</h4>
                  <span className="font-label-sm text-label-sm text-primary font-bold">Auto-matching in 00:42</span>
                </div>
                {/* Feed Item 1 */}
                <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="w-12 h-12 rounded-lg bg-primary-fixed/60 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">soup_kitchen</span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-headline-sm text-on-surface">Paneer Butter Masala &amp; Roti</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">Batch #PBM-401 - Temp 64 deg C (Safe) - 120 Portions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="px-space-xs py-space-2xs rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant font-label-sm text-label-sm">Van #04 Matched</span>
                    <button className="px-space-sm py-space-2xs rounded bg-primary text-on-primary font-label-sm text-label-sm shadow-sm hover:bg-primary-container">
                      Print QR Slip
                    </button>
                  </div>
                </div>
                {/* Feed Item 2 */}
                <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="w-12 h-12 rounded-lg bg-secondary-fixed/60 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[24px]">bakery_dining</span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-headline-sm text-on-surface">Steamed Idli &amp; Vegetable Sambar</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">Batch #IDL-812 - Temp 61 deg C (Safe) - 85 Portions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="px-space-xs py-space-2xs rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-sm text-label-sm">Routing to St. Jude</span>
                    <button className="px-space-sm py-space-2xs rounded bg-surface text-on-surface font-label-sm text-label-sm shadow-sm hover:bg-surface-container">
                      Details
                    </button>
                  </div>
                </div>
              </div>
              {/* Micro Fleet Status (4 cols) */}
              <div className="lg:col-span-4 bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-headline-sm text-headline-sm text-on-surface">Active Fleet Map</span>
                    <span className="font-label-sm text-label-sm text-primary">3 En Route</span>
                  </div>
                  {/* Map placeholder representation */}
                  <div className="fleet-map-image w-full h-40 bg-cover rounded-lg shadow-inner mb-space-sm" data-location="Hyderabad, Telangana, India" aria-label="Live Hyderabad fleet route map" role="img" />
                  <div className="space-y-space-2xs font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex justify-between">
                      <span className>EV Fleet Coverage:</span>
                      <span className="font-bold text-on-surface">14.8 km zone</span>
                    </div>
                    <div className="flex justify-between">
                      <span className>Average Cabinet Temp:</span>
                      <span className="font-bold text-primary">4.2 C Cold / 62.0 C Hot</span>
                    </div>
                  </div>
                </div>
                <a className="mt-space-md w-full text-center py-space-xs rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm hover:bg-surface-variant transition-colors" href="#">
                  Open Full Dispatch Map ΓåÆ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technical Architecture & Specifications Bar */}
      <section className="w-full bg-surface-container-high py-space-xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md text-on-surface">
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-space-xs mb-space-xs text-primary">
                <span className="material-symbols-outlined">memory</span>
                <span className="font-label-md text-label-md uppercase tracking-wider">IoT Hardware Edge</span>
              </div>
              <div className="font-headline-sm text-headline-sm mb-space-2xs">ESP32 + HX711 + DS18B20</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Industrial 24-bit ADC scale sensors paired with waterproof digital thermal probes logging over MQTT.</p>
            </div>
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-space-xs mb-space-xs text-primary">
                <span className="material-symbols-outlined">dns</span>
                <span className="font-label-md text-label-md uppercase tracking-wider">Backend Core</span>
              </div>
              <div className="font-headline-sm text-headline-sm mb-space-2xs">Java Spring Boot 3.2</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">High-throughput reactive event pipelines, FSSAI regulatory compliance schema, and PostgreSQL temporal store.</p>
            </div>
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-space-xs mb-space-xs text-secondary">
                <span className="material-symbols-outlined">psychology</span>
                <span className="font-label-md text-label-md uppercase tracking-wider">AI Route Solver</span>
              </div>
              <div className="font-headline-sm text-headline-sm mb-space-2xs">OR-Tools + Fast Hungarian</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Time-windowed vehicle routing problems solved dynamically factoring food temperature decay kinetics.</p>
            </div>
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-space-xs mb-space-xs text-primary">
                <span className="material-symbols-outlined">devices</span>
                <span className="font-label-md text-label-md uppercase tracking-wider">Web Client</span>
              </div>
              <div className="font-headline-sm text-headline-sm mb-space-2xs">React 18 &amp; Tailwind CSS</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">PWA-ready high-contrast kitchen touch interface with sub-50ms offline state resilience.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to Deploy CTA Banner */}
      <section className="w-full py-space-3xl bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="relative rounded-2xl bg-gradient-to-r from-primary via-primary-container to-tertiary text-on-primary p-space-2xl overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-lowest/20 backdrop-blur-md font-label-sm text-label-sm mb-space-md">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">stars</span>
                <span className>Zero Deployment Capital Required for Partner Institutions</span>
              </div>
              <h2 className="font-display-lg text-display-lg tracking-tight mb-space-sm">
                Equip Your Cafeteria With AnnaSetu in 48 Hours.
              </h2>
              <p className="font-body-xl text-body-xl text-surface-container-high mb-space-xl">
                Join premier universities, industrial tech parks, and certified disaster-relief food banks building India's zero-waste cold-chain grid.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm">
                <a className="px-space-xl py-space-sm rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-md hover:bg-surface-container transition-all" href="#">
                  Request On-Site IoT Pilot
                </a>
                <a className="px-space-lg py-space-sm rounded-lg bg-surface-container-lowest/10 text-on-primary font-label-lg text-label-lg backdrop-blur-sm hover:bg-surface-container-lowest/20 transition-all" href="#">
                  Download SIH 2026 Whitepaper
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal for 60-Sec Demo (Vanilla JS Driven) */}
      <div className="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-sm items-center justify-center p-margin" id="demo-modal">
        <div className="bg-surface-container-lowest rounded-xl max-w-2xl w-full p-space-lg shadow-2xl space-y-space-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[24px]">play_circle</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">AnnaSetu Architecture Walkthrough</h3>
            </div>
            <button className="text-on-surface-variant hover:text-on-surface" id="close-video-btn">
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
          <div className="aspect-video bg-inverse-surface rounded-lg overflow-hidden flex flex-col items-center justify-center text-inverse-on-surface text-center p-space-lg relative">
            <span className="material-symbols-outlined text-[64px] text-tertiary-fixed mb-space-xs animate-bounce">smart_display</span>
            <div className="font-headline-sm text-headline-sm">Interactive Architecture Showcase Ready</div>
            <div className="font-body-sm text-body-sm text-inverse-on-surface/80 max-w-sm mt-space-2xs">
              Simulating real-time telemetry from Tech Park Unit 4 to Annapurna Dining Hall.
            </div>
            <div className="mt-space-md flex gap-space-xs">
              <span className="px-space-xs py-space-2xs rounded bg-surface-container/20 font-label-sm text-label-sm">ESP32 Edge Ping: 12ms</span>
              <span className="px-space-xs py-space-2xs rounded bg-surface-container/20 font-label-sm text-label-sm">Cold Chain: Safe</span>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-space-md py-space-xs bg-primary text-on-primary rounded font-label-md text-label-md" id="close-modal-footer">
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div></main><footer className="w-full bg-inverse-surface text-inverse-on-surface pt-space-3xl pb-space-xl border-t border-outline-variant/20"><div className="max-w-7xl mx-auto px-margin"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-2xl border-b border-surface-variant/20"><div className="lg:col-span-4 flex flex-col space-y-space-md"><div className="flex items-center gap-space-xs"><div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center text-primary-fixed"><span className="material-symbols-outlined text-[22px]">eco</span></div><span className="font-headline-md text-headline-md text-surface-container-lowest tracking-tight">AnnaSetu</span><span className="px-space-xs py-[2px] rounded-full bg-primary-fixed/20 text-tertiary-fixed font-label-sm text-label-sm border border-tertiary-fixed/30">SIH 2026</span></div><p className="font-body-md text-body-md text-inverse-on-surface/80 leading-relaxed">AI-Powered Smart Food Waste Reduction &amp; Autonomous Redistribution Infrastructure. Empowering institutional kitchens, tier-1 catering hubs, and verified humanitarian networks with real-time IoT cold-chain orchestration.</p><div className="flex flex-wrap gap-space-2xs pt-space-xs"><div className="inline-flex items-center gap-space-2xs bg-surface-container-lowest/10 border border-surface-container-lowest/15 px-space-xs py-space-2xs rounded-md text-[11px] text-inverse-on-surface/90 font-label-sm"><span className="material-symbols-outlined text-tertiary-fixed text-[14px]">verified</span><span className>FSSAI Regulations (2019) Compliant</span></div><div className="inline-flex items-center gap-space-2xs bg-surface-container-lowest/10 border border-surface-container-lowest/15 px-space-xs py-space-2xs rounded-md text-[11px] text-inverse-on-surface/90 font-label-sm"><span className="material-symbols-outlined text-secondary-fixed text-[14px]">public</span><span className>Aligned UN SDG 12.3 &amp; SDG 2</span></div><div className="inline-flex items-center gap-space-2xs bg-surface-container-lowest/10 border border-surface-container-lowest/15 px-space-xs py-space-2xs rounded-md text-[11px] text-inverse-on-surface/90 font-label-sm"><span className="material-symbols-outlined text-primary-fixed text-[14px]">military_tech</span><span className>Smart India Hackathon Finalist</span></div></div></div><div className="lg:col-span-3 flex flex-col space-y-space-sm"><h4 className="font-headline-sm text-headline-sm text-surface-container-lowest flex items-center gap-space-2xs"><span className="material-symbols-outlined text-primary-fixed text-[18px]">hub</span><span className>Solution &amp; Platform</span></h4><ul className="space-y-space-xs font-body-sm text-body-sm text-inverse-on-surface/75"><li className><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>Kitchen IoT Telemetry</a></li><li className><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>AI Dynamic Route Matchmaker</a></li><li className><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>Cold-Chain Fleet Tracker</a></li><li className><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>NGO Partner Portal</a></li><li className><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>ESG Impact Analytics</a></li><li className><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>API &amp; Sensor Documentation</a></li></ul></div><div className="lg:col-span-3 flex flex-col space-y-space-sm"><h4 className="font-headline-sm text-headline-sm text-surface-container-lowest flex items-center gap-space-2xs"><span className="material-symbols-outlined text-secondary-fixed text-[18px]">corporate_fare</span><span className>Institutional Sectors</span></h4><ul className="space-y-space-xs font-body-sm text-body-sm text-inverse-on-surface/75"><li className><a href="#" className="hover:text-secondary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>University &amp; College Messes</a></li><li className><a href="#" className="hover:text-secondary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>Corporate Tech Cafeterias</a></li><li className><a href="#" className="hover:text-secondary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>Food Processing Facilities</a></li><li className><a href="#" className="hover:text-secondary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>Verified NGO Networks</a></li><li className><a href="#" className="hover:text-secondary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>Cloud Kitchens &amp; Banquets</a></li></ul></div><div className="lg:col-span-2 flex flex-col space-y-space-sm"><h4 className="font-headline-sm text-headline-sm text-surface-container-lowest flex items-center gap-space-2xs"><span className="material-symbols-outlined text-tertiary-fixed text-[18px]">security</span><span className>Trust &amp; Safety</span></h4><ul className="space-y-space-xs font-body-sm text-body-sm text-inverse-on-surface/75"><li className><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>Digital Custody Protocol</a></li><li className><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>HACCP Standards</a></li><li className><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>Data Privacy &amp; Security</a></li><li className><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>Smart Contract Audits</a></li><li className><a href="#" className="hover:text-tertiary-fixed transition-colors flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[14px]">chevron_right</span>ESG Carbon Credit Registry</a></li></ul></div></div><div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md text-inverse-on-surface/60 font-body-sm text-body-sm"><div className="flex flex-col sm:flex-row items-center gap-space-xs text-center sm:text-left"><span className> deg  2026 AnnaSetu Ecosystem. Developed for SIH 2026 (PS: SIH26234).</span><span className="hidden sm:inline">-</span><span className="text-inverse-on-surface/80">Team ByteBack# (ID: 129645)</span></div><div className="inline-flex items-center gap-space-2xs bg-surface-container-lowest/10 px-space-sm py-space-2xs rounded-full text-inverse-on-surface/90 font-label-sm text-label-sm border border-surface-container-lowest/15"><span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse" /><span className>Mesh Active</span><span className="text-inverse-on-surface/40">-</span><span className>All Systems Operational (14ms)</span></div><div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm"><span className><a href="#" className="hover:text-inverse-on-surface transition-colors">Privacy Policy</a></span><span className><a href="#" className="hover:text-inverse-on-surface transition-colors">Terms of Service</a></span><span className><a href="#" className="hover:text-inverse-on-surface transition-colors">FSSAI Bundle</a></span><span className><a href="#" className="hover:text-inverse-on-surface transition-colors">Security</a></span></div></div></div></footer>
    {notice && <div className="fixed bottom-5 right-5 z-[100] rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-on-primary shadow-lg">{notice} ready</div>}
  </div>
  );
}







