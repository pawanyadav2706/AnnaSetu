import { useState } from "react";

export default function NgoPrototype() {
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
. The logo should be visually consistent with these brand tokens." className="h-7 w-auto object-contain" src="/annasetu_official_logo/screen.png" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-primary leading-tight">AnnaSetu</span><span className="font-label-sm text-label-sm text-outline">Zero-Waste Hub</span></div></div><nav className="flex-1 px-space-sm space-y-space-2xs" data-active-classes="bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-sm"><a className="flex items-center px-space-sm py-space-xs rounded-xl text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="landing-overview" href="/prototype"><span className="material-symbols-outlined mr-space-sm text-[20px]">hub</span>Landing Overview</a><a className="flex items-center px-space-sm py-space-xs rounded-xl text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="kitchen-iot-console" href="/prototype/kitchen"><span className="material-symbols-outlined mr-space-sm text-[20px]">kitchen</span>Kitchen IoT Console</a><a className="flex items-center px-space-sm py-space-xs rounded-xl text-on-surface-variant font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="dispatcher-and-fleet-map" href="/prototype/fleet"><span className="material-symbols-outlined mr-space-sm text-[20px]">local_shipping</span>Dispatcher &amp; Fleet Map</a><a aria-current="page" className="flex items-center px-space-sm py-space-xs transition-all bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-sm" data-path="ngo-partner-portal" href="/prototype/ngo"><span className="material-symbols-outlined mr-space-sm text-[20px]">volunteer_activism</span>NGO Partner Portal</a></nav><div className="px-space-md pt-space-sm bg-surface-container-lowest/60 mx-space-sm rounded-xl p-space-sm"><div className="flex items-center justify-between mb-space-2xs"><span className="font-label-sm text-label-sm text-outline">Node Status</span><span className="w-2 h-2 rounded-full bg-primary" /></div><p className="font-label-sm text-label-sm text-on-surface font-semibold">Online - 18ms Latency</p><p className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">SIH 2026 #129645</p></div></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-16 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg"><div className="flex items-center gap-space-sm"><span className="font-label-md text-label-md bg-surface-container px-space-xs py-space-2xs rounded-full text-on-surface-variant">SIH 2026 | Team ByteBack# 129645</span><div className="flex items-center gap-space-2xs bg-primary-fixed/40 px-space-xs py-space-2xs rounded-full text-on-primary-fixed-variant font-label-sm text-label-sm"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><span>Online - Latency 18ms</span></div></div><div className="flex items-center gap-space-sm"><button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"><span className="material-symbols-outlined text-[20px]">notifications</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="relative pt-16 bg-surface px-space-lg py-space-md min-h-screen"><div className="flex flex-col w-full gap-space-lg pb-space-3xl">
        {/* Top Organization Identification Bar */}
        <section className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex items-start gap-space-sm min-w-0">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[28px]">handshake</span>
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <h1 className="font-headline-md text-headline-md text-on-surface truncate">
                    Robin Hood Army - South Hyderabad Distribution Chapter
                  </h1>
                  <span className="inline-flex items-center gap-1 bg-primary-fixed/40 text-on-primary-fixed-variant px-2 py-0.5 rounded-full font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">verified</span> FSSAI Verified
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  <span className="font-label-md text-label-md text-outline">Partner ID: <span className="text-on-surface font-mono">NGO-ACT-8841</span></span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant" />
                  <span>License Ref: FSSAI-HYD-REC-2026-901</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant" />
                  <span className="text-primary font-label-md text-label-md flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Acceptance Window Open: 350 Headcount Today
                  </span>
                </div>
              </div>
            </div>
            {/* Capacity Micro Progress Bar */}
            <div className="bg-surface-container rounded-xl p-space-sm min-w-[260px] flex flex-col justify-center shrink-0">
              <div className="flex items-center justify-between font-label-md text-label-md mb-1.5">
                <span className="text-on-surface-variant">Daily Quota Fulfilled</span>
                <span className="text-primary font-headline-sm text-headline-sm">280 / 350</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full transition-all duration-500" style={{width: '80%'}} />
              </div>
              <div className="flex items-center justify-between font-label-sm text-label-sm text-outline mt-1.5">
                <span>80% Target Served</span>
                <span className="text-secondary font-semibold">70 Meals Gap</span>
              </div>
            </div>
          </div>
        </section>
        {/* Editorial Hero Banner */}
        <section className="relative w-full rounded-xl overflow-hidden shadow-md">
          <div className="relative h-64 md:h-72 lg:h-80 w-full">
            <img alt="Volunteers and staff at a bright, clean, dignified community dining center serving hot nutritious Indian food from clean thermal stainless steel containers" className="w-full h-full object-cover" src="/volunteers_and_staff_at_a_bright_clean_dignified_community_dining_center/screen.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/95 via-inverse-surface/60 to-transparent flex flex-col justify-end p-space-lg text-inverse-on-surface">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-space-xs bg-secondary-container/90 text-on-secondary-container px-space-xs py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider mb-space-xs">
                  <span className="material-symbols-outlined text-[14px]">bolt</span>
                  Rapid Humanitarian Redistribution
                </div>
                <h2 className="font-headline-xl text-headline-xl text-surface-container-lowest leading-tight tracking-tight">
                  Connecting Surplus to Nourishment in &lt;40 Minutes
                </h2>
                <p className="font-body-md text-body-md text-inverse-on-surface/80 mt-1 max-w-2xl">
                  Real-time IoT dispatch from tier-1 institutional kitchens straight to local distribution centers with continuous thermal monitoring and cryptographic custody handshakes.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Central Operational Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          {/* Left 7 Columns: Live Inbound Delivery & Handshake Console */}
          <div className="xl:col-span-7 flex flex-col gap-space-md">
            {/* Real-time Inbound Shipment Card */}
            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-ping" />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Active Incoming Delivery</h3>
                </div>
                <span className="bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-2.5 py-1 rounded-full">
                  Arriving in 6 mins
                </span>
              </div>
              {/* Transit Meta Details Box */}
              <div className="bg-surface-container-low rounded-xl p-space-md mt-space-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">electric_bolt</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface">EV Van #DL-04</span>
                      <span className="font-label-sm text-label-sm bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-mono">Route: ORR-Express-B</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      From: <span className="font-semibold text-on-surface">IIT Hyderabad Central Dining Hall</span>
                    </p>
                  </div>
                  <div className="text-right sm:text-right">
                    <span className="font-headline-md text-headline-md text-primary block">200 Servings</span>
                    <span className="font-label-sm text-label-sm text-outline">Dal Tadka &amp; Jeera Rice</span>
                  </div>
                </div>
                {/* Cold-Chain & Thermal Telemetry Bar */}
                <div className="mt-space-md pt-space-sm bg-surface-container-lowest rounded-lg p-space-sm flex flex-wrap items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[20px]">thermostat</span>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline">IoT Vessel Pod #09</p>
                      <p className="font-label-md text-label-md text-on-surface">64.8 deg C <span className="text-primary font-normal">(Optimal Thermal Hold)</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[20px]">timer</span>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline">Transit Duration</p>
                      <p className="font-label-md text-label-md text-on-surface">18 mins elapsed / 24 max</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-outline text-[20px]">shield</span>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline">Seal Status</p>
                      <p className="font-label-md text-label-md text-primary font-semibold">Intact / Tamper Void Clear</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cryptographic Dual Handshake Verification Flow */}
              <div className="mt-space-md bg-surface-container rounded-xl p-space-md">
                <div className="flex items-center gap-space-xs mb-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
                  <h4 className="font-label-lg text-label-lg text-on-surface">Dual Cryptographic Receipt Handshake</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  {/* Temperature Validation Control */}
                  <div className="bg-surface-container-lowest rounded-lg p-space-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-sm text-label-sm text-outline">FSSAI Guideline Compliance</span>
                        <span className="bg-primary-fixed/50 text-on-primary-fixed-variant font-label-sm text-label-sm px-1.5 rounded">Required &gt;60 deg C</span>
                      </div>
                      <label className="font-label-md text-label-md text-on-surface block mb-1" htmlFor="tempInput">
                        Physical Probe Measured Temp ( deg C)
                      </label>
                      <div className="relative">
                        <input className="w-full bg-surface-container-low px-3 py-2 rounded-lg font-headline-sm text-headline-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" id="tempInput" placeholder="e.g. 63.4" step="0.1" type="number" defaultValue="63.2" />
                        <span className="absolute right-3 top-2.5 font-label-md text-label-md text-outline"> deg Celsius</span>
                      </div>
                    </div>
                    <p className="font-label-sm text-label-sm text-primary mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span> Meets instant intake threshold
                    </p>
                  </div>
                  {/* QR Handshake Confirmation Box */}
                  <div className="bg-surface-container-lowest rounded-lg p-space-sm flex flex-col justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-outline">Driver Verification</span>
                      <p className="font-label-md text-label-md text-on-surface font-semibold mt-0.5">Ramesh V. (ID: DRV-409)</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Digital Token: <span className="font-mono text-[11px]">8f4a-99bc-2026-safe</span></p>
                    </div>
                    <button className="w-full mt-3 bg-secondary hover:bg-secondary/90 text-on-secondary py-2.5 px-3 rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors shadow-sm" id="qrTriggerBtn">
                      <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                      Scan Driver QR &amp; Confirm
                    </button>
                  </div>
                </div>
                {/* Micro Security Info Note */}
                <div className="flex items-center gap-2 mt-space-sm text-outline font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  <span>Generates immutable hash on AnnaSetu Distributed Food Safety Ledger SIH-2026</span>
                </div>
              </div>
            </section>
            {/* Distribution Staging Checklist */}
            <section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <div className="flex items-center justify-between mb-space-sm">
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Community Dining Center Staging Checklist</h4>
                <span className="font-label-sm text-label-sm text-outline">Auto-QC Validated</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Sanitized Thermal Food Warmers Ready</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">Ready</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Biodegradable Plates &amp; Cutlery Stock (500 units)</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">Stocked</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">Potable RO Drinking Water Dispenser Active</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">Online</span>
                </div>
              </div>
            </section>
          </div>
          {/* Right 5 Columns: Daily Demand Planner & Verified Safety / ESG Log */}
          <div className="xl:col-span-5 flex flex-col gap-space-md">
            {/* Daily Demand & Headcount Planner */}
            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
              <div className="flex items-start justify-between mb-space-sm">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Daily Demand &amp; Headcount Planner</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Broadcast accurate headcount demand to the AnnaSetu routing engine.</p>
                </div>
                <span className="material-symbols-outlined text-primary text-[24px]">groups</span>
              </div>
              <form className="space-y-space-sm mt-space-xs" id="demandForm" onsubmit="event.preventDefault();">
                {/* Children Segment */}
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-label-md text-label-md text-on-surface flex items-center gap-1.5" htmlFor="headcountChildren">
                      <span className="material-symbols-outlined text-primary text-[18px]">child_care</span>
                      Children &amp; Primary Students
                    </label>
                    <span className="font-label-sm text-label-sm text-outline">Mild spice preferred</span>
                  </div>
                  <div className="relative">
                    <input className="w-full bg-surface-container-lowest px-3 py-2 rounded-lg font-headline-sm text-headline-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" id="headcountChildren" type="number" defaultValue={120} />
                    <span className="absolute right-3 top-2.5 font-label-md text-label-md text-outline">Pax</span>
                  </div>
                </div>
                {/* Elderly Segment */}
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-label-md text-label-md text-on-surface flex items-center gap-1.5" htmlFor="headcountElderly">
                      <span className="material-symbols-outlined text-primary text-[18px]">elderly</span>
                      Elderly Residents &amp; Day Care
                    </label>
                    <span className="font-label-sm text-label-sm text-outline">Soft texture meals</span>
                  </div>
                  <div className="relative">
                    <input className="w-full bg-surface-container-lowest px-3 py-2 rounded-lg font-headline-sm text-headline-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" id="headcountElderly" type="number" defaultValue={80} />
                    <span className="absolute right-3 top-2.5 font-label-md text-label-md text-outline">Pax</span>
                  </div>
                </div>
                {/* General Adults Segment */}
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-label-md text-label-md text-on-surface flex items-center gap-1.5" htmlFor="headcountGeneral">
                      <span className="material-symbols-outlined text-primary text-[18px]">person</span>
                      General Community Walk-ins
                    </label>
                    <span className="font-label-sm text-label-sm text-outline">Full nutritious meal</span>
                  </div>
                  <div className="relative">
                    <input className="w-full bg-surface-container-lowest px-3 py-2 rounded-lg font-headline-sm text-headline-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" id="headcountGeneral" type="number" defaultValue={150} />
                    <span className="absolute right-3 top-2.5 font-label-md text-label-md text-outline">Pax</span>
                  </div>
                </div>
                {/* Total Forecast Sum and Update CTA */}
                <div className="pt-space-xs flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Total Scheduled</span>
                    <span className="font-headline-lg text-headline-lg text-primary" id="totalDemandDisplay">350 Meals</span>
                  </div>
                  <button className="bg-primary hover:bg-primary-container text-on-primary py-2.5 px-space-md rounded-lg font-label-lg text-label-lg flex items-center gap-1.5 transition-colors shadow-sm" id="updateDemandBtn" type="submit">
                    <span className="material-symbols-outlined text-[18px]">sync</span>
                    Sync Demand
                  </button>
                </div>
              </form>
            </section>
            {/* Verified Safety & ESG Log (Past 7 Days) */}
            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Verified Safety &amp; ESG Log</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Past 7 days tamper-proof distribution records.</p>
                </div>
                <button className="flex items-center gap-1 font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high px-2.5 py-1.5 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[16px]">download</span> FSSAI Audit Bundle
                </button>
              </div>
              {/* High Impact ESG Metrics Bento */}
              <div className="grid grid-cols-2 gap-space-xs">
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <span className="font-label-sm text-label-sm text-outline block">Total Food Received (7d)</span>
                  <span className="font-headline-md text-headline-md text-on-surface font-bold">1,840 kg</span>
                  <span className="font-label-sm text-label-sm text-primary flex items-center gap-0.5 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span> 2,410 Meals Distributed
                  </span>
                </div>
                <div className="bg-primary-fixed/30 p-space-sm rounded-xl">
                  <span className="font-label-sm text-label-sm text-on-primary-fixed-variant block">Food Safety Index</span>
                  <span className="font-headline-md text-headline-md text-primary font-bold">100% Zero Defect</span>
                  <span className="font-label-sm text-label-sm text-on-primary-fixed-variant flex items-center gap-0.5 mt-0.5 font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span> 0 Illness Incidents Guarantee
                  </span>
                </div>
              </div>
              {/* Past 7 Days Receipts Mini-Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-sm text-body-sm">
                  <thead>
                    <tr className="text-outline font-label-sm text-label-sm border-b border-surface-container">
                      <th className="py-2 pr-2">Date</th>
                      <th className="py-2 px-2">Origin Kitchen</th>
                      <th className="py-2 px-2">Quantity</th>
                      <th className="py-2 text-right">Avg Intake Temp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    <tr>
                      <td className="py-2.5 pr-2 font-label-md text-label-md text-on-surface">Oct 23</td>
                      <td className="py-2.5 px-2 text-on-surface-variant">Wipro Campus SEZ</td>
                      <td className="py-2.5 px-2 font-semibold text-on-surface">310 Meals</td>
                      <td className="py-2.5 text-right font-mono text-primary font-semibold">63.8 deg C</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-2 font-label-md text-label-md text-on-surface">Oct 22</td>
                      <td className="py-2.5 px-2 text-on-surface-variant">IIT Hyderabad Dining</td>
                      <td className="py-2.5 px-2 font-semibold text-on-surface">260 Meals</td>
                      <td className="py-2.5 text-right font-mono text-primary font-semibold">64.1 deg C</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-2 font-label-md text-label-md text-on-surface">Oct 21</td>
                      <td className="py-2.5 px-2 text-on-surface-variant">Microsoft Cafeteria 2</td>
                      <td className="py-2.5 px-2 font-semibold text-on-surface">340 Meals</td>
                      <td className="py-2.5 text-right font-mono text-primary font-semibold">62.9 deg C</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-2 font-label-md text-label-md text-on-surface">Oct 20</td>
                      <td className="py-2.5 px-2 text-on-surface-variant">Novotel Convention Ctr</td>
                      <td className="py-2.5 px-2 font-semibold text-on-surface">420 Meals</td>
                      <td className="py-2.5 text-right font-mono text-primary font-semibold">65.2 deg C</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-2 font-label-md text-label-md text-on-surface">Oct 19</td>
                      <td className="py-2.5 px-2 text-on-surface-variant">TCS Synergy Hall</td>
                      <td className="py-2.5 px-2 font-semibold text-on-surface">280 Meals</td>
                      <td className="py-2.5 text-right font-mono text-primary font-semibold">63.0 deg C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Compliance Sign-off Badge */}
              <div className="bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Annual FSSAI Recovery Compliance</p>
                    <p className="font-label-sm text-label-sm text-outline">Audited monthly by TS Food Safety Cell</p>
                  </div>
                </div>
                <button className="text-primary font-label-md text-label-md flex items-center gap-1 hover:underline">
                  View Certificate <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </button>
              </div>
            </section>
          </div>
        </div>
        {/* Interactive Handshake Success Modal Simulator */}
        <div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/50 backdrop-blur-sm p-space-md" id="receiptModal">
          <div className="bg-surface-container-lowest rounded-xl max-w-md w-full p-space-lg shadow-xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-space-sm">
              <span className="material-symbols-outlined text-[36px]">task_alt</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Cryptographic Receipt Signed!</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Delivery from EV Van #DL-04 confirmed at 63.2 deg C. 200 Dal Tadka &amp; Jeera Rice servings successfully admitted for distribution.
            </p>
            <div className="w-full bg-surface-container p-space-sm rounded-lg font-mono text-[11px] text-on-surface-variant my-space-md text-left">
              <p>TX-ID: 0x93FA...E419</p>
              <p>BLOCK-HEIGHT: #849,219</p>
              <p>RECEIPT HASH: sha256:7e21a8...99b0c</p>
            </div>
            <button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2.5 rounded-lg font-label-lg text-label-lg transition-colors" id="closeModalBtn">
              Done &amp; Update Live Inventory
            </button>
          </div>
        </div>
      </div>
    </main></div>
  {notice && <div className="fixed bottom-5 right-5 z-[100] rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-on-primary shadow-lg">{notice} ready</div>}
  </div>
  );
}






