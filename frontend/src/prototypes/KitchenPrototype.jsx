import { useState } from "react";

export default function KitchenPrototype() {
  const [notice, setNotice] = useState("");

  function handleAction(event) {
    const target = event.target.closest("button");
    if (!target) return;
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
// . The logo should be visually consistent with these brand tokens." className="h-7 w-auto object-contain" src="/annasetu_official_logo/screen.png" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-primary leading-tight">AnnaSetu</span><span className="font-label-sm text-label-sm text-outline">Zero-Waste Hub</span></div></div><nav className="flex-1 px-space-sm space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-sm"><a className="flex items-center px-space-sm py-space-xs rounded-xl text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="landing-overview" href="/prototype"><span className="material-symbols-outlined mr-space-sm text-[20px]">hub</span>Landing Overview</a><a aria-current="page" className="flex items-center px-space-sm py-space-xs transition-all bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-sm" data-path="kitchen-iot-console" href="/prototype/kitchen"><span className="material-symbols-outlined mr-space-sm text-[20px]">kitchen</span>Kitchen IoT Console</a><a className="flex items-center px-space-sm py-space-xs rounded-xl text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="dispatcher-and-fleet-map" href="/prototype/fleet"><span className="material-symbols-outlined mr-space-sm text-[20px]">local_shipping</span>Dispatcher &amp; Fleet Map</a><a className="flex items-center px-space-sm py-space-xs rounded-xl text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="ngo-partner-portal" href="/prototype/ngo"><span className="material-symbols-outlined mr-space-sm text-[20px]">volunteer_activism</span>NGO Partner Portal</a></nav><div className="px-space-md pt-space-sm bg-surface-container-lowest/60 mx-space-sm rounded-xl p-space-sm"><div className="flex items-center justify-between mb-space-2xs"><span className="font-label-sm text-label-sm text-outline">Node Status</span><span className="w-2 h-2 rounded-full bg-primary" /></div><p className="font-label-sm text-label-sm text-on-surface font-semibold">Online - 18ms Latency</p><p className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">SIH 2026 #129645</p></div></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg"><div className="flex items-center gap-space-sm"><div className="flex items-center gap-space-2xs bg-primary-fixed/40 px-space-xs py-space-2xs rounded-full text-on-primary-fixed-variant font-label-sm text-label-sm"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><span>Online - Latency 18ms</span></div></div><div className="flex items-center gap-space-sm"><button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"><span className="material-symbols-outlined text-[20px]">notifications</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="relative pt-16 bg-surface px-space-lg py-space-md min-h-screen"><div className="flex flex-col w-full gap-y-space-md">
        {/* Operational Breadcrumb & Telemetry Header Bar */}
        <header className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex flex-col gap-space-2xs">
              <div className="flex items-center gap-space-xs flex-wrap">
                <span className="px-space-xs py-space-2xs bg-primary-fixed/40 text-on-primary-fixed-variant rounded-full font-label-sm text-label-sm font-semibold tracking-wider uppercase">Live Operations Console</span>
                <span className="text-outline-variant">-</span>
                <span className="font-label-md text-label-md text-primary font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  ESP32-HX711 Node 04: CONNECTED
                </span>
                <span className="text-outline-variant">-</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Firmware v2.4.1</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">IIT Hyderabad Main Dining Hall A (Block 4)</h1>
              <div className="flex items-center gap-space-md text-on-surface-variant flex-wrap font-body-sm text-body-sm">
                <span className="flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                  Shift: <strong className="text-on-surface font-semibold">Lunch Service (11:30 - 14:30 IST)</strong>
                </span>
                <span className="text-outline-variant">|</span>
                <span className="flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-[16px] text-primary">person</span>
                  Head Chef: <strong className="text-on-surface font-semibold">Chef Rajesh K. (ID #4092)</strong>
                </span>
                <span className="text-outline-variant">|</span>
                <span className="flex items-center gap-space-2xs text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">sensors</span>
                  Sampling Frequency: 500ms
                </span>
              </div>
            </div>
            {/* Quick Operational Action Triggers */}
            <div className="flex items-center gap-space-xs flex-wrap self-start lg:self-center">
              <button className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors flex items-center gap-space-2xs" id="btn-manual-batch">
                <span className="material-symbols-outlined text-[18px]">add_box</span>
                Log Manual Batch
              </button>
              <button className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors flex items-center gap-space-2xs" id="btn-thermal">
                <span className="material-symbols-outlined text-[18px] text-secondary">thermostat</span>
                Trigger Thermal Scanner
              </button>
              <button className="px-space-sm py-space-xs rounded-lg font-label-md text-label-md bg-secondary text-on-secondary hover:opacity-95 shadow-sm transition-all flex items-center gap-space-2xs" id="btn-simulate-surplus">
                <span className="material-symbols-outlined text-[18px]">emergency_heat</span>
                Simulate +30kg Surplus
              </button>
            </div>
          </div>
        </header>
        {/* Key Metrics Telemetry Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/* Total Prepared Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Total Production</span>
                <div className="font-display-lg text-display-lg text-on-surface leading-none mt-space-2xs">1,400</div>
                <span className="font-label-md text-label-md text-on-surface-variant">Portions (462.5 kg total bulk)</span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">skillet</span>
              </div>
            </div>
            {/* Visual Mini Sparkline/Bar chart */}
            <div className="mt-space-md pt-space-xs">
              <div className="flex items-end gap-1.5 h-8">
                <div className="w-full bg-primary-fixed rounded-t h-[40%]" />
                <div className="w-full bg-primary-fixed rounded-t h-[55%]" />
                <div className="w-full bg-primary-fixed rounded-t h-[80%]" />
                <div className="w-full bg-primary-fixed rounded-t h-[95%]" />
                <div className="w-full bg-primary-fixed rounded-t h-[70%]" />
                <div className="w-full bg-primary-fixed rounded-t h-[100%]" />
                <div className="w-full bg-primary rounded-t h-[85%]" />
              </div>
              <div className="flex justify-between font-label-sm text-label-sm text-outline mt-1">
                <span>11:30</span>
                <span>Prep Peak</span>
                <span>14:00</span>
              </div>
            </div>
          </div>
          {/* Consumed at Counters */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Counter Depletion Rate</span>
                <div className="font-display-lg text-display-lg text-on-surface leading-none mt-space-2xs">1,120</div>
                <span className="font-label-md text-label-md text-on-primary-fixed-variant font-semibold">80.0% Service Fulfillment</span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">group</span>
              </div>
            </div>
            <div className="mt-space-md">
              <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
                <div className="bg-primary h-2.5 rounded-full" style={{width: '80%'}} />
              </div>
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mt-1.5">
                <span>Counters 1-6 Aggregated</span>
                <span className="text-primary font-semibold">+18 portions/min</span>
              </div>
            </div>
          </div>
          {/* Surplus Detected Card (Alert Mode) */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-start justify-between relative z-10">
              <div>
                <div className="flex items-center gap-space-2xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Surplus Detected (IoT)</span>
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
                </div>
                <div className="font-display-lg text-display-lg text-secondary leading-none mt-space-2xs">280</div>
                <div className="flex items-center gap-space-xs mt-1">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">92.0 kg Surplus Mass</span>
                  <span className="px-space-2xs py-[2px] bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm rounded-full font-bold">Action Required</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">scale</span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant relative z-10">
              <span className="flex items-center gap-1 text-secondary font-medium">
                <span className="material-symbols-outlined text-[14px]">warning</span>
                Exceeds 5% Shift Buffer
              </span>
              <span className="font-semibold text-primary">Redistribution Ready</span>
            </div>
          </div>
          {/* FSSAI Microbial Safe Window Radial Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">FSSAI Microbe Safety</span>
                <div className="font-headline-lg text-headline-lg text-on-surface leading-tight mt-space-2xs">3h 15m</div>
                <span className="font-label-sm text-label-sm text-primary font-semibold">Remaining at &gt;65 deg C Critical Temp</span>
              </div>
              {/* Radial progress ring */}
              <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                  <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="72, 100" strokeLinecap="round" strokeWidth="3.5" />
                </svg>
                <span className="material-symbols-outlined text-primary text-[18px] absolute">timer</span>
              </div>
            </div>
            <div className="mt-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span>Temp Safety Margin: Safe</span>
              <span className="text-primary font-bold">Standard #FSSAI-HACCP-09</span>
            </div>
          </div>
        </section>
        {/* Asymmetrical Main Control Blueprint */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md">
          {/* LEFT COLUMN: Live Connected Trays Telemetry (7 Columns) */}
          <section className="xl:col-span-7 flex flex-col gap-space-md">
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
                  <h2 className="font-headline-md text-headline-md text-on-surface">Live IoT Scales &amp; Thermal Telemetry</h2>
                </div>
                <span className="px-space-xs py-space-2xs bg-surface-container rounded-full font-label-sm text-label-sm text-on-surface-variant font-medium">3 Active Induction Bays</span>
              </div>
              {/* Trays List */}
              <div className="flex flex-col gap-space-sm mt-space-xs">
                {/* Tray A */}
                <div className="p-space-sm bg-surface-container-low hover:bg-surface-container transition-all rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary font-headline-md text-headline-md font-bold shadow-sm">
                      A
                    </div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Dal Tadka (Slow Simmer)</h3>
                        <span className="px-space-xs py-0.5 rounded-full bg-primary-fixed/50 text-on-primary-fixed font-label-sm text-label-sm font-semibold">Safe</span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm mt-0.5">
                        <span>Bay #01</span>
                        <span>-</span>
                        <span>Tare: 4.2 kg</span>
                        <span>-</span>
                        <span>HX711 Channel A</span>
                      </div>
                    </div>
                  </div>
                  {/* Telemetry Values */}
                  <div className="grid grid-cols-3 gap-space-sm items-center text-center">
                    <div className="bg-surface-container-lowest px-space-xs py-1.5 rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline block">Net Mass</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">38.5 <span className="text-xs font-normal">kg</span></span>
                    </div>
                    <div className="bg-surface-container-lowest px-space-xs py-1.5 rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline block">Thermal (IR)</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">69.2<span className="text-xs font-normal"> deg C</span></span>
                    </div>
                    <div className="bg-surface-container-lowest px-space-xs py-1.5 rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline block">Freshness</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-primary">98%</span>
                    </div>
                  </div>
                </div>
                {/* Tray B */}
                <div className="p-space-sm bg-surface-container-low hover:bg-surface-container transition-all rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary font-headline-md text-headline-md font-bold shadow-sm">
                      B
                    </div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Jeera Basmati Rice</h3>
                        <span className="px-space-xs py-0.5 rounded-full bg-primary-fixed/50 text-on-primary-fixed font-label-sm text-label-sm font-semibold">Safe</span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm mt-0.5">
                        <span>Bay #02</span>
                        <span>-</span>
                        <span>Tare: 4.8 kg</span>
                        <span>-</span>
                        <span>HX711 Channel B</span>
                      </div>
                    </div>
                  </div>
                  {/* Telemetry Values */}
                  <div className="grid grid-cols-3 gap-space-sm items-center text-center">
                    <div className="bg-surface-container-lowest px-space-xs py-1.5 rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline block">Net Mass</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">44.0 <span className="text-xs font-normal">kg</span></span>
                    </div>
                    <div className="bg-surface-container-lowest px-space-xs py-1.5 rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline block">Thermal (IR)</span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">67.8<span className="text-xs font-normal"> deg C</span></span>
                    </div>
                    <div className="bg-surface-container-lowest px-space-xs py-1.5 rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline block">Freshness</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-primary">96%</span>
                    </div>
                  </div>
                </div>
                {/* Tray C */}
                <div className="p-space-sm bg-surface-container-low hover:bg-surface-container transition-all rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary font-headline-md text-headline-md font-bold shadow-sm">
                      C
                    </div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Paneer Butter Masala</h3>
                        <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">Surge Risk</span>
                      </div>
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm mt-0.5">
                        <span>Bay #03</span>
                        <span>-</span>
                        <span>Tare: 5.1 kg</span>
                        <span>-</span>
                        <span>HX711 Channel C</span>
                      </div>
                    </div>
                  </div>
                  {/* Telemetry Values */}
                  <div className="grid grid-cols-3 gap-space-sm items-center text-center">
                    <div className="bg-surface-container-lowest px-space-xs py-1.5 rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline block">Net Mass</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">22.5 <span className="text-xs font-normal">kg</span></span>
                    </div>
                    <div className="bg-surface-container-lowest px-space-xs py-1.5 rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline block">Thermal (IR)</span>
                      <span className="font-headline-sm text-headline-sm text-secondary font-bold">65.4<span className="text-xs font-normal"> deg C</span></span>
                    </div>
                    <div className="bg-surface-container-lowest px-space-xs py-1.5 rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline block">Freshness</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-primary">94%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Live Kitchen IoT Optical & Sensor Feed Verification Card */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between mb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">videocam</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Kitchen Verification Feed</h3>
                </div>
                <span className="px-space-xs py-1 bg-surface-container rounded-full text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Cam 02 (Induction Bay Overview)
                </span>
              </div>
              <div className="relative w-full h-64 rounded-lg overflow-hidden bg-surface-container-highest shadow-inner">
                <img alt="IIT Hyderabad Smart Kitchen scale telemetry setup" className="w-full h-full object-cover" src="/high_end_modern_commercial_kitchen_in_a_university_or_corporate_tech_park/screen.png" />
                {/* Glassmorphism Sensor Telemetry Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-between p-space-sm">
                  <div className="flex justify-between items-start">
                    <span className="bg-surface/90 backdrop-blur-md px-space-xs py-space-2xs rounded-md text-primary font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      Live Sensor Telemetry Verified
                    </span>
                    <span className="bg-inverse-surface/80 text-inverse-on-surface px-space-xs py-space-2xs rounded font-label-sm text-label-sm">
                      60 FPS - 1080p
                    </span>
                  </div>
                  <div className="flex items-end justify-between text-inverse-on-surface font-body-sm text-body-sm">
                    <div>
                      <p className="font-label-md text-label-md font-semibold text-white">Central Serving Induction Array</p>
                      <p className="text-surface-variant font-body-sm text-body-sm">Optical validation matches load cell measurement delta &lt; 0.2%</p>
                    </div>
                    <div className="bg-primary/90 text-on-primary px-space-xs py-space-2xs rounded-md font-label-sm text-label-sm font-semibold">
                      AI Vision Confirmed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* RIGHT COLUMN: AI Demand Forecast & Auto-Match Dispatch Pipeline (5 Columns) */}
          <section className="xl:col-span-5 flex flex-col gap-space-md">
            {/* AI Matchmaking Hub */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[22px]">smart_toy</span>
                    <h2 className="font-headline-md text-headline-md text-on-surface">AI Auto-Match Pipeline</h2>
                  </div>
                  <span className="px-space-xs py-space-2xs bg-primary-fixed/40 text-on-primary-fixed-variant rounded-full font-label-sm text-label-sm font-bold">Algorithmic Fit 99.4%</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Dynamic load matched to nearby verified humanitarian distribution nodes within a 5 km radius based on heat decay rate.
                </p>
                {/* Match Target 1 */}
                <div className="mt-space-md p-space-sm bg-surface-container-low rounded-xl flex flex-col gap-space-xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <h3 className="font-label-lg text-label-lg text-on-surface font-bold">Robin Hood Army Sangareddy Hub</h3>
                        <span className="px-space-2xs py-[2px] bg-primary-fixed text-on-primary-fixed-variant rounded font-label-sm text-label-sm">Primary Node</span>
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Distance: <strong className="text-on-surface font-semibold">2.8 km away</strong> - ETA 14 mins (EV Van)
                      </div>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">200 Meals</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{width: '71.4%'}} />
                  </div>
                  <div className="flex justify-between font-label-sm text-label-sm text-outline">
                    <span>Accepting: Dal Tadka + Basmati</span>
                    <span>Capacity: 200/200</span>
                  </div>
                </div>
                {/* Match Target 2 */}
                <div className="mt-space-xs p-space-sm bg-surface-container-low rounded-xl flex flex-col gap-space-xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <h3 className="font-label-lg text-label-lg text-on-surface font-bold">Bal Seva Child Welfare Shelter</h3>
                        <span className="px-space-2xs py-[2px] bg-secondary-fixed text-on-secondary-fixed rounded font-label-sm text-label-sm">High Priority</span>
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Distance: <strong className="text-on-surface font-semibold">4.1 km away</strong> - ETA 22 mins
                      </div>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">80 Meals</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-1.5">
                    <div className="bg-secondary h-1.5 rounded-full" style={{width: '28.6%'}} />
                  </div>
                  <div className="flex justify-between font-label-sm text-label-sm text-outline">
                    <span>Accepting: Paneer Butter Masala</span>
                    <span>Capacity: 80/80</span>
                  </div>
                </div>
              </div>
              {/* 1-Click Action Dispatch Button */}
              <div className="mt-space-md pt-space-xs">
                <button className="w-full py-space-sm px-space-md bg-primary hover:bg-primary-container text-on-primary rounded-xl font-headline-sm text-headline-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-space-xs" id="btn-authorize-dispatch">
                  <span className="material-symbols-outlined text-[24px]">electric_bolt</span>
                  Authorize FSSAI QR Handshake &amp; Request EV Pickup
                </button>
                <p className="text-center font-label-sm text-label-sm text-outline mt-space-2xs">
                  Triggers automatic telemetry handover &amp; generates cold-chain transit seal
                </p>
              </div>
            </div>
            {/* Batch QR Cryptographic Manifest Card */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <div className="flex items-center justify-between mb-space-xs">
                <h3 className="font-label-lg text-label-lg text-on-surface font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                  Cryptographic Batch Manifest
                </h3>
                <span className="font-label-sm text-label-sm font-mono text-outline">SHA-256 SECURED</span>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-xl flex items-center gap-space-md">
                {/* Visual Vector QR Code */}
                <div className="w-24 h-24 bg-surface-container-lowest p-1.5 rounded-lg shadow-sm flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full text-on-surface" fill="currentColor" viewBox="0 0 100 100">
                    {/* QR Finder Top Left */}
                    <rect fill="currentColor" height={30} width={30} x={5} y={5} />
                    <rect fill="white" height={20} width={20} x={10} y={10} />
                    <rect fill="currentColor" height={10} width={10} x={15} y={15} />
                    {/* QR Finder Top Right */}
                    <rect fill="currentColor" height={30} width={30} x={65} y={5} />
                    <rect fill="white" height={20} width={20} x={70} y={10} />
                    <rect fill="currentColor" height={10} width={10} x={75} y={15} />
                    {/* QR Finder Bottom Left */}
                    <rect fill="currentColor" height={30} width={30} x={5} y={65} />
                    <rect fill="white" height={20} width={20} x={10} y={70} />
                    <rect fill="currentColor" height={10} width={10} x={15} y={75} />
                    {/* Data bits */}
                    <rect fill="currentColor" height={6} width={6} x={42} y={10} />
                    <rect fill="currentColor" height={6} width={6} x={52} y={15} />
                    <rect fill="currentColor" height={6} width={6} x={42} y={25} />
                    <rect fill="currentColor" height={6} width={6} x={10} y={45} />
                    <rect fill="currentColor" height={6} width={6} x={25} y={45} />
                    <rect fill="currentColor" height={6} width={6} x={35} y={45} />
                    <rect fill="currentColor" height={10} width={10} x={45} y={45} />
                    <rect fill="currentColor" height={6} width={6} x={65} y={45} />
                    <rect fill="currentColor" height={6} width={6} x={80} y={45} />
                    <rect fill="currentColor" height={6} width={6} x={45} y={65} />
                    <rect fill="currentColor" height={6} width={6} x={55} y={75} />
                    <rect fill="currentColor" height={10} width={10} x={70} y={65} />
                    <rect fill="currentColor" height={6} width={6} x={85} y={75} />
                    <rect fill="currentColor" height={6} width={6} x={65} y={85} />
                    <rect fill="currentColor" height={6} width={10} x={80} y={85} />
                  </svg>
                </div>
                {/* Cryptographic Metadata */}
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Manifest Hash</span>
                  <p className="font-label-sm text-label-sm font-mono text-on-surface truncate">
                    0x8F9B...2A41C89E902D
                  </p>
                  <div className="flex items-center gap-space-2xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[14px] text-primary">gavel</span>
                    FSSAI Sec Reg: <strong className="text-on-surface">#2026-IITH-008</strong>
                  </div>
                  <div className="flex items-center gap-space-2xs text-primary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    ECDSA Signed by Kitchen Node 04
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Interactive UI Behavior Script */}
    </main></div>
    {notice && <div className="fixed bottom-5 right-5 z-[100] rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-on-primary shadow-lg">{notice} ready</div>}
    </div>
  );
}






