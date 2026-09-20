import { useState } from "react";

export default function FleetPrototype() {
  const [notice, setNotice] = useState("");
  function handleAction(event) {
    const target = event.target.closest("button, a");
    if (!target) return;
    if (target.tagName === "A" && target.getAttribute("href") === "#") event.preventDefault();
    setNotice(target.textContent.trim().replace(/\s+/g, " "));
    window.setTimeout(() => setNotice(""), 2200);
  }
  return (
    <div onClick={handleAction}>
  <meta charSet="utf-8" /><meta content="width=device-width, initial-scale=1.0" name="viewport" /><meta content="web_dashboard" name="shell-type" /><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" /><link href="https://fonts.googleapis.com" rel="preconnect" /><link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" /><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" /><style dangerouslySetInnerHTML={{__html: "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}" }} /><aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-50 flex flex-col pt-space-md pb-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="px-space-md mb-space-lg flex items-center gap-space-xs"><img alt="Modern vector logo for AnnaSetu: a stylized digital leaf seamlessly intertwined with an AI neural network circuit node and a bridge arc icon, emerald green #1e5e3a with saffron #f97316 accent, minimalist tech and sustainability mark. Design context: - Primary color: #1e5e3a
- Font: plusJakartaSans
- Mode: light
- Roundness: rounded-md
. The logo should be visually consistent with these brand tokens." className="h-7 w-auto object-contain" src="/annasetu_official_logo/screen.png" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-primary leading-tight">AnnaSetu</span><span className="font-label-sm text-label-sm text-outline">Zero-Waste Hub</span></div></div><nav className="flex-1 px-space-sm space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-sm"><a className="flex items-center px-space-sm py-space-xs rounded-xl text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="landing-overview" href="/prototype"><span className="material-symbols-outlined mr-space-sm text-[20px]">hub</span>Landing Overview</a><a className="flex items-center px-space-sm py-space-xs rounded-xl text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="kitchen-iot-console" href="/prototype/kitchen"><span className="material-symbols-outlined mr-space-sm text-[20px]">kitchen</span>Kitchen IoT Console</a><a aria-current="page" className="flex items-center px-space-sm py-space-xs transition-all bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-sm" data-path="dispatcher-and-fleet-map" href="/prototype/fleet"><span className="material-symbols-outlined mr-space-sm text-[20px]">local_shipping</span>Dispatcher &amp; Fleet Map</a><a className="flex items-center px-space-sm py-space-xs rounded-xl text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="ngo-partner-portal" href="/prototype/ngo"><span className="material-symbols-outlined mr-space-sm text-[20px]">volunteer_activism</span>NGO Partner Portal</a></nav><div className="px-space-md pt-space-sm bg-surface-container-lowest/60 mx-space-sm rounded-xl p-space-sm"><div className="flex items-center justify-between mb-space-2xs"><span className="font-label-sm text-label-sm text-outline">Node Status</span><span className="w-2 h-2 rounded-full bg-primary" /></div><p className="font-label-sm text-label-sm text-on-surface font-semibold">Online - 18ms Latency</p><p className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">SIH 2026 #129645</p></div></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg"><div className="flex items-center gap-space-sm"><div className="flex items-center gap-space-2xs bg-primary-fixed/40 px-space-xs py-space-2xs rounded-full text-on-primary-fixed-variant font-label-sm text-label-sm"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><span>Online - Latency 18ms</span></div></div><div className="flex items-center gap-space-sm"><button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"><span className="material-symbols-outlined text-[20px]">notifications</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="relative pt-16 bg-surface px-space-lg py-space-md min-h-screen"><div className="flex flex-col w-full gap-space-lg">
        {/* Top Command Ribbon */}
        <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
          <div className="flex flex-wrap items-center justify-between gap-space-md">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs mb-space-2xs">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Autonomous Dispatch Fabric v4.2</span>
                <span className="bg-surface-container px-space-xs py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm">Telangana Zone 01</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Real-time Regional Logistics Control - Central Hub Cyberabad</h1>
            </div>
            {/* Quick Filter Buttons */}
            <div className="flex items-center gap-space-xs bg-surface-container-low p-1.5 rounded-xl">
              <button className="filter-btn active px-space-md py-1.5 rounded-lg font-label-md text-label-md bg-primary text-on-primary shadow-sm transition-all" data-filter="all">All Fleets</button>
              <button className="filter-btn px-space-md py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center gap-1" data-filter="critical">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary-container" />
                Critical Safe-Window (&lt;1hr)
              </button>
              <button className="filter-btn px-space-md py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" data-filter="delivered">Delivered Today</button>
            </div>
          </div>
          {/* Telemetry Badges Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm pt-space-xs">
            <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-xl">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed/40 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">electric_bolt</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">Active EV Transports</span>
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">6 Vehicles</span>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-primary font-semibold bg-primary-fixed/30 px-2 py-0.5 rounded-full">100% Eco-Fleet</span>
            </div>
            <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-xl">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[22px]">nest_clock_farsight_analog</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">On-Route Rescues</span>
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">4 Batches</span>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-semibold bg-secondary-fixed/30 px-2 py-0.5 rounded-full">3,850 Meals</span>
            </div>
            <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-xl">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-tertiary-fixed-dim/30 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[22px]">speed</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">Avg Delivery Time</span>
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">18.4 mins</span>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-primary font-semibold bg-primary-fixed/30 px-2 py-0.5 rounded-full">-3.2m vs SLA</span>
            </div>
            <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-xl">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[22px]">thermostat</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">Cold/Hot Chain Integrity</span>
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">99.8%</span>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-primary font-semibold bg-primary-fixed/30 px-2 py-0.5 rounded-full">Optimal QC</span>
            </div>
          </div>
        </section>
        {/* Split Screen Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* LEFT SIDE (7 Cols): Live Interactive Geo-Spatial Mesh & Cold Chain Tracker */}
          <section className="lg:col-span-7 flex flex-col gap-space-md">
            {/* Primary Map Canvas Container */}
            <div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
              {/* Map Header Toolbar */}
              <div className="p-space-md flex items-center justify-between bg-surface-container-lowest/90 backdrop-blur-sm z-10">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">explore</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Live Interactive Geo-Spatial Mesh &amp; Cold Chain Tracker</h2>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                    <span className="w-2 h-2 rounded-full bg-primary" /> Origins
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                    <span className="w-2 h-2 rounded-full bg-secondary" /> EV Transit
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                    <span className="w-2 h-2 rounded-full bg-primary-container" /> NGO Beneficiary
                  </span>
                </div>
              </div>
              {/* Simulated Map Grid Visual Layer */}
              <div className="relative w-full h-[460px] bg-[#eef3f0] overflow-hidden select-none">
                {/* Stylized Geo Vector Overlay (Simulated Cartographic Map) */}
                <svg className="absolute inset-0 w-full h-full text-outline-variant/30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern height={40} id="grid-pattern" patternUnits="userSpaceOnUse" width={40}>
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
                    </pattern>
                  </defs>
                  <rect fill="url(#grid-pattern)" height="100%" width="100%" />
                  {/* Road Arteries (Cyberabad / Gachibowli / Hitec Corridor simulation) */}
                  <path d="M-20,120 Q180,160 320,190 T680,240 T920,380" fill="none" stroke="#d5ded8" strokeLinecap="round" strokeWidth={12} />
                  <path d="M120,-20 Q160,200 280,260 T540,320 T720,520" fill="none" stroke="#d5ded8" strokeLinecap="round" strokeWidth={9} />
                  <path d="M380,60 L380,480" fill="none" stroke="#d5ded8" strokeLinecap="round" strokeWidth={7} />
                  <path d="M50,380 Q320,340 500,160 T860,110" fill="none" stroke="#d5ded8" strokeLinecap="round" strokeWidth={8} />
                  {/* Route 1 Path Active Pulse (IIT Hyd -> Aasra) */}
                  <path className="opacity-80" d="M140,90 Q220,130 310,185 T480,230" fill="none" id="route-line-1" stroke="#004625" strokeDasharray="6,4" strokeWidth={4} />
                  {/* Route 2 Path Active (TCS -> St. Jude) */}
                  <path className="opacity-70" d="M520,110 Q490,210 390,290 T240,380" fill="none" id="route-line-2" stroke="#944a00" strokeDasharray="4,4" strokeWidth={3} />
                </svg>
                {/* Nodes: Origin Kitchen 1 (IIT Hyderabad) */}
                <div className="absolute top-[80px] left-[130px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md ring-4 ring-primary-fixed/40">
                    <span className="material-symbols-outlined text-[16px]">soup_kitchen</span>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm font-semibold whitespace-nowrap">
                    IIT Hyderabad Hub
                  </div>
                </div>
                {/* Nodes: Origin Kitchen 2 (TCS Synergy) */}
                <div className="absolute top-[100px] left-[520px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md ring-4 ring-primary-fixed/40">
                    <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm font-semibold whitespace-nowrap">
                    TCS Synergy Cafeteria
                  </div>
                </div>
                {/* Nodes: Destination NGO 1 (Aasra Kitchen) */}
                <div className="absolute top-[220px] left-[480px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-md ring-4 ring-tertiary-fixed/40">
                    <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm font-semibold whitespace-nowrap">
                    Aasra Community Kitchen
                  </div>
                </div>
                {/* Nodes: Destination NGO 2 (St. Jude Childcare) */}
                <div className="absolute top-[375px] left-[235px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-md ring-4 ring-tertiary-fixed/40">
                    <span className="material-symbols-outlined text-[16px]">favorite</span>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm font-semibold whitespace-nowrap">
                    St. Jude Childcare
                  </div>
                </div>
                {/* Moving EV Van #02 Marker */}
                <div className="absolute top-[170px] left-[490px] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-secondary/20 animate-ping" />
                    <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[15px]">electric_car</span>
                    </div>
                  </div>
                  <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-on-surface/90 text-surface font-label-sm text-label-sm px-1.5 py-0.5 rounded whitespace-nowrap">EV-02 Docked</span>
                </div>
                {/* Active Pulsing Moving EV Van Marker (Tata Ace EV #DL-04-EV-2026) */}
                <div className="absolute top-[180px] left-[300px] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer" id="primary-vehicle-marker">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-12 h-12 rounded-full bg-primary/25 animate-ping" />
                    <span className="absolute w-16 h-16 rounded-full bg-primary/10" />
                    <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg ring-2 ring-surface-container-lowest">
                      <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                    </div>
                  </div>
                </div>
                {/* Floating Interactive Vehicle Telemetry Pop-up Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-96 bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-xl shadow-xl z-30">
                  <div className="flex items-start justify-between mb-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Tata Ace EV #DL-04-EV-2026</h3>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Fleet Unit 04 - Driver: Rajesh Kumar</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">Live GPS</span>
                  </div>
                  {/* Sensor Telemetry Metrics Matrix */}
                  <div className="grid grid-cols-3 gap-space-xs py-space-xs bg-surface-container-low rounded-lg px-space-xs mb-space-xs text-center">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Cargo Temp</span>
                      <span className="font-headline-sm text-headline-sm text-secondary font-bold">65.0 deg C</span>
                      <span className="font-label-sm text-label-sm text-[10px] text-on-surface-variant block">Hot-Box Safe</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Speed</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">32 km/h</span>
                      <span className="font-label-sm text-label-sm text-[10px] text-primary block">Optimal Econ</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">ETA</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">7 mins</span>
                      <span className="font-label-sm text-label-sm text-[10px] text-on-surface-variant block">to Aasra Hub</span>
                    </div>
                  </div>
                  {/* Route Quick Info */}
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">navigation</span>
                      Outer Ring Rd - Miyapur Exit
                    </span>
                    <span className="text-on-surface font-semibold">Battery: 78% (94km range)</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Embedded Fleet Asset Card with Verification Specs */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
              <div className="relative md:w-5/12 h-52 md:h-auto overflow-hidden">
                <img alt="Modern electric temperature-controlled delivery van with green eco branding" className="w-full h-full object-cover" src="/modern_electric_temperature_controlled_delivery_van_with_green_and_white_eco/screen.png" />
                <div className="absolute top-3 left-3 bg-primary text-on-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">eco</span>
                  Insulated EV Cold/Hot Chain Fleet
                </div>
              </div>
              <div className="p-space-md md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-2xs">
                    <span className="font-label-sm text-label-sm text-primary font-bold tracking-wide uppercase">Hardware Node Specification</span>
                    <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">IoT Gateway Gen-3</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-2xs">Active Dual-Chamber Temperature Lock</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Continuous infrared air and probe tracking. Automated temperature logging every 3 seconds with tamper-evident digital seal triggers on loading bay doors.
                  </p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary">sensors</span>
                    <span>LoraWAN Active</span>
                  </div>
                  <span className="text-outline-variant">-</span>
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary">lock_clock</span>
                    <span>Lockbox Secures: 14 Crates</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* RIGHT SIDE (5 Cols): Active Dispatch Queue & Smart Matchmaker */}
          <section className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Active Dispatch Queue &amp; Matchmaker</h2>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Automated dynamic matchmaking pipeline</span>
              </div>
              <span className="bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                2 High-Priority
              </span>
            </div>
            {/* Card 1: Batch #8921 (In Transit) */}
            <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">Batch #8921</span>
                    <span className="bg-primary-fixed/40 text-on-primary-fixed-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold">Ready-to-Eat Hot Meals</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Cooked Rice, Dal Makhani &amp; Mixed Veg Sabzi - 320 Portions</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-secondary-fixed/40 text-secondary font-label-sm text-label-sm font-bold animate-pulse">
                    In Transit
                  </span>
                  <span className="block font-label-sm text-label-sm text-on-surface-variant mt-0.5 font-semibold">6 mins remaining</span>
                </div>
              </div>
              {/* Route Nodes */}
              <div className="flex items-center justify-between p-space-xs bg-surface-container-low rounded-lg text-body-sm font-body-sm">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="material-symbols-outlined text-primary text-[18px]">business</span>
                  <span className="truncate font-semibold text-on-surface">IIT Hyderabad</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-[16px] px-1">arrow_forward</span>
                <div className="flex items-center gap-1.5 min-w-0 text-right">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">volunteer_activism</span>
                  <span className="truncate font-semibold text-on-surface">Aasra Kitchen</span>
                </div>
              </div>
              {/* Linear Progress Stepper Tracker */}
              <div className="flex flex-col gap-1.5 pt-space-2xs">
                <div className="flex justify-between text-[11px] font-semibold text-on-surface-variant">
                  <span className="text-primary font-bold">1. Logged (11:40)</span>
                  <span className="text-primary font-bold">2. QC Passed</span>
                  <span className="text-primary font-bold">3. Dispatched</span>
                  <span className="text-secondary font-bold">4. Delivering...</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
                  <div className="bg-primary h-full w-1/4" />
                  <div className="bg-primary h-full w-1/4" />
                  <div className="bg-primary h-full w-1/4" />
                  <div className="bg-secondary-container h-full w-1/6 animate-pulse" />
                </div>
                <div className="flex justify-between items-center text-[10px] text-on-surface-variant">
                  <span>FSSAI Hygiene Index: 9.8/10</span>
                  <span>Est. Arrival: 12:12 PM IST</span>
                </div>
              </div>
            </article>
            {/* Card 2: Batch #8922 (Docked & Assigned) */}
            <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">Batch #8922</span>
                    <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold">Fresh Dairy &amp; Fruits</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Assorted Fruit Boxes &amp; Milk Pouches - 85 Servings</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                    Driver Assigned
                  </span>
                  <span className="block font-label-sm text-label-sm text-on-surface-variant mt-0.5">EV Van #02 at Dock</span>
                </div>
              </div>
              {/* Route Nodes */}
              <div className="flex items-center justify-between p-space-xs bg-surface-container-low rounded-lg text-body-sm font-body-sm">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="material-symbols-outlined text-primary text-[18px]">corporate_fare</span>
                  <span className="truncate font-semibold text-on-surface">TCS Synergy Cafeteria</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-[16px] px-1">arrow_forward</span>
                <div className="flex items-center gap-1.5 min-w-0 text-right">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">child_care</span>
                  <span className="truncate font-semibold text-on-surface">St. Jude Childcare</span>
                </div>
              </div>
              {/* Stepper Progress Tracker */}
              <div className="flex flex-col gap-1.5 pt-space-2xs">
                <div className="flex justify-between text-[11px] font-semibold text-on-surface-variant">
                  <span className="text-primary font-bold">1. Logged (12:02)</span>
                  <span className="text-primary font-bold">2. QC Approved</span>
                  <span className="text-primary font-bold">3. Loading...</span>
                  <span className="text-outline">4. En Route</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
                  <div className="bg-primary h-full w-1/4" />
                  <div className="bg-primary h-full w-1/4" />
                  <div className="bg-primary-container h-full w-1/8 animate-pulse" />
                  <div className="bg-transparent h-full w-1/2" />
                </div>
                <div className="flex justify-between items-center text-[10px] text-on-surface-variant">
                  <span>Chill Temp Target: 4.0 deg C</span>
                  <span>Departure in 3 mins</span>
                </div>
              </div>
            </article>
            {/* QR Code Handshake Verification Panel */}
            <section className="bg-primary text-on-primary rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary-container/40 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary-fixed text-[22px]">qr_code_scanner</span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-primary">Gate Handshake &amp; Custody Protocol</h3>
                    <span className="font-label-sm text-label-sm text-primary-fixed-dim">Zero-Trust Chain of Custody</span>
                  </div>
                </div>
                <span className="bg-primary-container/80 text-primary-fixed px-2 py-0.5 rounded text-[11px] font-mono tracking-wider">BLOCK-REC #4092</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm items-center bg-primary-container/50 p-space-sm rounded-xl">
                {/* Stylized QR Code Visual SVG */}
                <div className="flex flex-col items-center justify-center p-2 bg-surface-container-lowest rounded-lg shadow-inner w-28 h-28 mx-auto">
                  <svg className="w-full h-full text-on-surface" fill="currentColor" viewBox="0 0 100 100">
                    {/* Corner Finder 1 */}
                    <rect fill="none" height={28} rx={2} stroke="currentColor" strokeWidth={6} width={28} x={5} y={5} />
                    <rect height={12} width={12} x={13} y={13} />
                    {/* Corner Finder 2 */}
                    <rect fill="none" height={28} rx={2} stroke="currentColor" strokeWidth={6} width={28} x={67} y={5} />
                    <rect height={12} width={12} x={75} y={13} />
                    {/* Corner Finder 3 */}
                    <rect fill="none" height={28} rx={2} stroke="currentColor" strokeWidth={6} width={28} x={5} y={67} />
                    <rect height={12} width={12} x={13} y={75} />
                    {/* Data Pixels Pattern */}
                    <rect height={6} width={6} x={40} y={8} />
                    <rect height={6} width={6} x={50} y={15} />
                    <rect height={6} width={6} x={42} y={26} />
                    <rect height={6} width={6} x={52} y={36} />
                    <rect height={6} width={6} x={10} y={44} />
                    <rect height={6} width={6} x={22} y={48} />
                    <rect height={8} width={8} x={36} y={44} />
                    <rect height={6} width={6} x={48} y={52} />
                    <rect height={6} width={6} x={65} y={42} />
                    <rect height={6} width={6} x={78} y={46} />
                    <rect height={6} width={6} x={88} y={56} />
                    <rect height={6} width={6} x={68} y={68} />
                    <rect height={8} width={8} x={82} y={72} />
                    <rect height={6} width={6} x={42} y={74} />
                    <rect height={6} width={6} x={54} y={82} />
                    <rect height={6} width={6} x={74} y={86} />
                  </svg>
                  <span className="text-[9px] font-mono text-outline mt-1 uppercase">Scan at Dock</span>
                </div>
                {/* Handshake PIN & Gates */}
                <div className="sm:col-span-2 flex flex-col gap-space-xs">
                  <div>
                    <span className="font-label-sm text-label-sm text-primary-fixed-dim block">Receiver One-Time Handshake PIN</span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="px-2.5 py-1 bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold rounded">8</span>
                      <span className="px-2.5 py-1 bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold rounded">4</span>
                      <span className="px-2.5 py-1 bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold rounded">1</span>
                      <span className="px-2.5 py-1 bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold rounded">9</span>
                      <button className="ml-2 p-1.5 rounded bg-primary-container text-on-primary hover:bg-tertiary transition" title="Refresh PIN">
                        <span className="material-symbols-outlined text-[16px]">sync</span>
                      </button>
                    </div>
                  </div>
                  <div className="pt-1">
                    <span className="font-label-sm text-label-sm text-primary-fixed-dim block">Gate Temperature Verification Threshold</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">&gt; 60 deg C Hot / &lt; 5 deg C Cold</span>
                      <span className="text-[11px] text-on-primary/80">Infrared Gate Probe Sync: Ready</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Instant Manual Action CTA */}
              <div className="flex items-center justify-between pt-space-2xs">
                <button className="px-space-md py-2 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container transition-all flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Simulate Receiver Sign-off
                </button>
                <span className="font-label-sm text-label-sm text-primary-fixed-dim">Auto-logs to Smart Contract</span>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main></div>
  {notice && <div className="fixed bottom-5 right-5 z-[100] rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-on-primary shadow-lg">{notice} ready</div>}
  </div>
  );
}






