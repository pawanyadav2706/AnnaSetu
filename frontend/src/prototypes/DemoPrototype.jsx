import { useState } from "react";

export default function DemoPrototype() {
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
  <meta charSet="utf-8" /><meta content="width=device-width, initial-scale=1.0" name="viewport" /><meta content="web_dashboard" name="shell-type" /><title>AnnaSetu - AI Dispatch &amp; Redistribution Console</title><link href="https://fonts.googleapis.com" rel="preconnect" /><link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" /><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" /><style dangerouslySetInnerHTML={{__html: "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}" }} /><aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between py-space-md"><div className="px-space-md space-y-space-md"><div className="flex items-center gap-space-sm px-space-xs"><img alt="AnnaSetu Official Logo" className="h-8 w-auto object-contain" src="/annasetu_official_logo/screen.png" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm font-bold text-primary leading-none">AnnaSetu</span><span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Dispatch Console</span></div></div><div className="p-space-xs rounded-xl bg-surface-container"><div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1"><span>AI Allocation Engine</span><span className="text-tertiary font-bold">99.4% Latency-Safe</span></div><div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden"><div className="bg-primary h-full w-[94%]" /></div></div><nav className="space-y-1" data-active-classes="bg-primary-container text-on-primary font-bold shadow-sm"><a aria-current="page" className="flex items-center px-space-md py-2.5 rounded-xl transition-all bg-primary-container text-on-primary font-bold shadow-sm" data-path="live-demo-dashboard" href="/prototype/demo"><span className="material-symbols-outlined mr-space-sm text-[20px]">grid_view</span>Operations Overview</a><a className="flex items-center px-space-md py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="food-inventory-logs" href="#"><span className="material-symbols-outlined mr-space-sm text-[20px]">inventory_2</span>Live Surplus Batches</a><a className="flex items-center px-space-md py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="ai-matchmaker" href="#"><span className="material-symbols-outlined mr-space-sm text-[20px]">hub</span>Smart AI Matchmaker</a><a className="flex items-center px-space-md py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="fleet-logistics" href="#"><span className="material-symbols-outlined mr-space-sm text-[20px]">local_shipping</span>Logistics &amp; Cold-Chain</a><a className="flex items-center px-space-md py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="ngo-redistribution" href="#"><span className="material-symbols-outlined mr-space-sm text-[20px]">volunteer_activism</span>NGO Distribution Nodes</a><a className="flex items-center px-space-md py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="impact-esg-metrics" href="#"><span className="material-symbols-outlined mr-space-sm text-[20px]">query_stats</span>ESG Audit &amp; Analytics</a></nav></div><div className="px-space-md space-y-space-sm"><div className="p-space-sm rounded-xl bg-surface-container-high"><span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block mb-1">SIH26234 Verification</span><p className="font-body-sm text-body-sm text-on-surface-variant">Evaluator Sandboxing is Active. IoT simulators running on mock MQTT streams.</p></div><a className="flex items-center px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="problem-solution" href="/prototype"><span className="material-symbols-outlined mr-2 text-[18px]">arrow_back</span>Back to Portal</a></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-gutter"><div className="flex items-center gap-space-sm"><span className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">ByteBack# Cluster: Central-01</span><span className="hidden sm:inline-flex items-center gap-1 font-body-sm text-body-sm text-tertiary font-medium"><span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping" />Redis Sync: Online</span></div><div className="flex items-center gap-space-md"><div className="hidden md:flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm"><span className="material-symbols-outlined text-[16px]">speed</span><span>API Latency: 42ms</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="relative pt-16 w-full px-gutter bg-surface min-h-screen"><div className="flex flex-col w-full pb-space-2xl space-y-space-lg">
        {/* Top Hero Status Bar & Judge Sandbox Notification */}
        <div className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl p-space-md shadow-md relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
          <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[160px]">eco</span>
          </div>
          <div className="flex items-start md:items-center gap-space-md z-10">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest/15 flex items-center justify-center shrink-0 backdrop-blur-md">
              <span className="material-symbols-outlined text-tertiary-fixed text-[28px]">deployed_code_history</span>
            </div>
            <div>
              <div className="flex items-center gap-space-xs flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider">SIH26234 Live Demo</span>
                <span className="font-label-sm text-label-sm text-on-primary-container">ByteBack# Team Production Sandbox</span>
                <span className="flex items-center gap-1 text-tertiary-fixed font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping" /> Real-Time Telemetry Engaged
                </span>
              </div>
              <h1 className="font-headline-md text-headline-md font-bold mt-1 text-on-primary">
                Smart Food Waste Reduction &amp; Autonomous Redistribution Network
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-space-xs shrink-0 z-10 flex-wrap">
            <button className="px-space-md py-2 rounded-lg bg-secondary-container hover:bg-secondary text-on-secondary font-label-md text-label-md transition-all shadow-sm flex items-center gap-1.5" id="btnSimulateSurplus" data-action="simulateSurplusIncrement()">
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              Simulate Surplus (+50 kg)
            </button>
            <button className="px-space-md py-2 rounded-lg bg-surface-container-lowest/20 hover:bg-surface-container-lowest/30 text-on-primary font-label-md text-label-md backdrop-blur-md transition-all flex items-center gap-1.5" id="btnTriggerMatching" data-action="triggerAIMatch()">
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              Trigger AI Match
            </button>
            <button className="px-space-md py-2 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-md text-label-md backdrop-blur-md transition-all flex items-center gap-1.5" data-action="openModal('fssaiModal')">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              FSSAI Audit Pass
            </button>
          </div>
        </div>
        {/* Real-Time Metrics Overview: ESG & Impact Ticker */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/* Metric 1 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
            <div className="flex justify-between items-start">
              <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Meals Rescued Today</span>
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">restaurant</span>
              </div>
            </div>
            <div className="my-space-xs">
              <div className="flex items-baseline gap-space-2xs">
                <span className="font-display-lg text-display-lg font-extrabold text-primary leading-none" id="mealsSavedCounter">1,480</span>
                <span className="font-body-md text-body-md text-on-surface-variant">servings</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2">
              <span className="inline-flex items-center text-tertiary font-bold gap-0.5">
                <span className="material-symbols-outlined text-[16px]">trending_up</span> +34% vs yesterday
              </span>
              <span className="font-label-sm text-label-sm text-outline">Target: 2,000</span>
            </div>
          </div>
          {/* Metric 2 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
            <div className="flex justify-between items-start">
              <span className="font-label-md text-label-md text-on-surface-variant font-semibold">CO2e Emissions Prevented</span>
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[20px]">co2</span>
              </div>
            </div>
            <div className="my-space-xs">
              <div className="flex items-baseline gap-space-2xs">
                <span className="font-display-lg text-display-lg font-extrabold text-on-surface leading-none" id="co2Counter">620</span>
                <span className="font-body-md text-body-md text-on-surface-variant">kg CO2e</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2">
              <span className="inline-flex items-center text-tertiary font-bold gap-0.5">
                <span className="material-symbols-outlined text-[16px]">energy_savings_leaf</span> 18 mature trees/yr
              </span>
              <span className="font-label-sm text-label-sm text-outline">Zero-Methane Loop</span>
            </div>
          </div>
          {/* Metric 3 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
            <div className="flex justify-between items-start">
              <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Virtual Water Conserved</span>
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[20px]">water_drop</span>
              </div>
            </div>
            <div className="my-space-xs">
              <div className="flex items-baseline gap-space-2xs">
                <span className="font-display-lg text-display-lg font-extrabold text-on-surface leading-none" id="waterCounter">125,000</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Litres</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2">
              <span className="inline-flex items-center text-secondary font-bold gap-0.5">
                <span className="material-symbols-outlined text-[16px]">cyclone</span> Hydrologic Offset
              </span>
              <span className="font-label-sm text-label-sm text-outline">ISO 14046 Tier-1</span>
            </div>
          </div>
          {/* Metric 4 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
            <div className="flex justify-between items-start">
              <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Institutional Cost Savings</span>
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[20px]">savings</span>
              </div>
            </div>
            <div className="my-space-xs">
              <div className="flex items-baseline gap-space-2xs">
                <span className="font-display-lg text-display-lg font-extrabold text-on-surface leading-none">Γé╣84,500</span>
                <span className="font-body-md text-body-md text-on-surface-variant">INR</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2">
              <span className="inline-flex items-center text-tertiary font-bold gap-0.5">
                <span className="material-symbols-outlined text-[16px]">format_image_left</span> Audit Certified
              </span>
              <span className="font-label-sm text-label-sm text-outline">Per-unit: Γé╣62.5</span>
            </div>
          </div>
        </div>
        {/* Main Split Architecture & Operations Workspace */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
          {/* LEFT COLUMN: Kitchen Operations & Live Inventory (7 Cols) */}
          <div className="xl:col-span-7 flex flex-col space-y-space-lg">
            {/* Operational Hub Panel */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-xs">
                <div>
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                    <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">Node Unit 04-A</span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Active Service Shift</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">
                    Central Kitchen - IIT Campus Cafeteria / Institutional Unit
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    Lunch Buffer: 13:45 IST
                  </span>
                </div>
              </div>
              {/* Demand vs Surplus Live Micro-Telemetry */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Prepared Capacity</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-md text-headline-md font-bold text-on-surface">1,250</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">portions</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-primary h-full w-full" />
                  </div>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-xl">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Consumed in Service</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-md text-headline-md font-bold text-on-surface">980</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">served</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-tertiary-container h-full w-[78.4%]" />
                  </div>
                </div>
                <div className="bg-secondary-fixed/30 p-space-sm rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary font-bold">Surplus Detected</span>
                    <span className="px-1.5 py-0.2 rounded bg-secondary text-on-secondary font-label-sm text-label-sm">Actionable</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-headline-md text-headline-md font-bold text-secondary" id="surplusServingsDisplay">270</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">portions (~94.5 kg)</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 font-label-sm text-label-sm text-secondary">
                    <span>Risk: Minimal</span>
                    <span className="font-bold">Freshness: 98%</span>
                  </div>
                </div>
              </div>
              {/* AI Real-Time Dispatch Allocation Banner */}
              <div className="bg-surface-container p-space-md rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">psychology</span>
                  </div>
                  <div>
                    <span className="font-label-md text-label-md font-bold text-primary flex items-center gap-1">
                      AI Optimization Recommendation 
                      <span className="text-tertiary text-[11px] font-medium bg-surface-container-lowest px-2 py-0.5 rounded-full">Confidence 99.2%</span>
                    </span>
                    <p className="font-body-md text-body-md text-on-surface mt-0.5">
                      Dispatch <span className="font-bold text-primary">180 servings</span> to Robin Hood Army Hub (2.4 km away, capacity 200). Route remaining <span className="font-bold text-primary">90 servings</span> to St. Jude Childcare.
                    </p>
                  </div>
                </div>
                <button className="shrink-0 px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all flex items-center gap-1.5" id="btnApproveDispatch" data-action="approveAIDispatch()">
                  <span className="material-symbols-outlined text-[18px]">done_all</span>
                  Execute Smart Split
                </button>
              </div>
            </div>
            {/* Live Surplus Batches Table & Food Diagnostics */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Surplus Food Inventory Log</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">IoT Temperature Sensors &amp; Digital Traceability Ledger</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1" data-action="openModal('freshnessModal')">
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    Vision Freshness Scan
                  </button>
                  <span className="font-label-sm text-label-sm text-tertiary bg-surface-container-low px-2.5 py-1.5 rounded-lg font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-tertiary" /> 4 Batches Active
                  </span>
                </div>
              </div>
              {/* Inventory List */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-sm text-body-sm">
                  <thead>
                    <tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                      <th className="py-3 px-space-sm rounded-l-lg">Dish / Category</th>
                      <th className="py-3 px-space-sm">Portions (kg)</th>
                      <th className="py-3 px-space-sm">Cook Time</th>
                      <th className="py-3 px-space-sm">Safe Shelf-Life</th>
                      <th className="py-3 px-space-sm">Thermal Core</th>
                      <th className="py-3 px-space-sm">QR Token</th>
                      <th className="py-3 px-space-sm rounded-r-lg">Dispatch State</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2" id="inventoryTableBody">
                    <tr className="bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-space-sm font-label-md text-label-md text-on-surface font-bold">
                        Dal Tadka &amp; Steamed Basmati
                        <span className="block font-body-sm text-body-sm text-on-surface-variant font-normal">Hot Vegetarian Stew</span>
                      </td>
                      <td className="py-3 px-space-sm font-semibold">120 serv (42 kg)</td>
                      <td className="py-3 px-space-sm text-on-surface-variant">12:30 IST</td>
                      <td className="py-3 px-space-sm text-tertiary font-semibold">3h 45m left</td>
                      <td className="py-3 px-space-sm">
                        <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-primary font-bold">67.4 deg C</span>
                      </td>
                      <td className="py-3 px-space-sm">
                        <button className="font-label-sm text-label-sm text-primary underline flex items-center gap-0.5" data-action="inspectQR('BATCH-89021')">
                          <span className="material-symbols-outlined text-[14px]">qr_code_2</span>#89021
                        </button>
                      </td>
                      <td className="py-3 px-space-sm">
                        <span className="px-2.5 py-1 rounded-full bg-secondary-fixed/50 text-secondary font-label-sm text-label-sm font-bold inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> Ready for Pickup
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-space-sm font-label-md text-label-md text-on-surface font-bold">
                        Paneer Butter Masala &amp; Roti
                        <span className="block font-body-sm text-body-sm text-on-surface-variant font-normal">Dairy &amp; Whole Wheat</span>
                      </td>
                      <td className="py-3 px-space-sm font-semibold">90 serv (31.5 kg)</td>
                      <td className="py-3 px-space-sm text-on-surface-variant">12:45 IST</td>
                      <td className="py-3 px-space-sm text-tertiary font-semibold">4h 10m left</td>
                      <td className="py-3 px-space-sm">
                        <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-primary font-bold">65.8 deg C</span>
                      </td>
                      <td className="py-3 px-space-sm">
                        <button className="font-label-sm text-label-sm text-primary underline flex items-center gap-0.5" data-action="inspectQR('BATCH-89022')">
                          <span className="material-symbols-outlined text-[14px]">qr_code_2</span>#89022
                        </button>
                      </td>
                      <td className="py-3 px-space-sm">
                        <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold inline-flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">local_shipping</span> Driver Assigned
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-space-sm font-label-md text-label-md text-on-surface font-bold">
                        Mixed Vegetable Pulao
                        <span className="block font-body-sm text-body-sm text-on-surface-variant font-normal">Dry Grains &amp; Legumes</span>
                      </td>
                      <td className="py-3 px-space-sm font-semibold">60 serv (21 kg)</td>
                      <td className="py-3 px-space-sm text-on-surface-variant">13:10 IST</td>
                      <td className="py-3 px-space-sm text-tertiary font-semibold">4h 40m left</td>
                      <td className="py-3 px-space-sm">
                        <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-primary font-bold">64.1 deg C</span>
                      </td>
                      <td className="py-3 px-space-sm">
                        <button className="font-label-sm text-label-sm text-primary underline flex items-center gap-0.5" data-action="inspectQR('BATCH-89023')">
                          <span className="material-symbols-outlined text-[14px]">qr_code_2</span>#89023
                        </button>
                      </td>
                      <td className="py-3 px-space-sm">
                        <span className="px-2.5 py-1 rounded-full bg-secondary-fixed/50 text-secondary font-label-sm text-label-sm font-bold inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> Pending Transit
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Process Flowchart Visualizer (Matching User System Flow) */}
              <div className="pt-space-sm">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-space-xs font-semibold">
                  AnnaSetu 6-Stage Autonomous Redistribution Pipeline
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  <div className="p-2.5 rounded-lg bg-surface-container text-center">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-[11px] font-bold mx-auto flex items-center justify-center mb-1">1</span>
                    <span className="font-label-sm text-label-sm font-bold text-on-surface block">Food Input</span>
                    <span className="text-[10px] text-on-surface-variant block">Kitchen logs qty</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container text-center">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-[11px] font-bold mx-auto flex items-center justify-center mb-1">2</span>
                    <span className="font-label-sm text-label-sm font-bold text-on-surface block">AI Analysis</span>
                    <span className="text-[10px] text-on-surface-variant block">Waste prediction</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-primary-container text-on-primary text-center">
                    <span className="w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold mx-auto flex items-center justify-center mb-1">3</span>
                    <span className="font-label-sm text-label-sm font-bold block">Matchmaking</span>
                    <span className="text-[10px] text-on-primary-container block">Nearest demand</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-secondary text-on-secondary text-center">
                    <span className="w-6 h-6 rounded-full bg-surface-container-lowest text-secondary text-[11px] font-bold mx-auto flex items-center justify-center mb-1">4</span>
                    <span className="font-label-sm text-label-sm font-bold block">Redistribution</span>
                    <span className="text-[10px] text-secondary-fixed block">EV fleet dispatch</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container text-center">
                    <span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface text-[11px] font-bold mx-auto flex items-center justify-center mb-1">5</span>
                    <span className="font-label-sm text-label-sm font-bold text-on-surface block">Receive &amp; Verify</span>
                    <span className="text-[10px] text-on-surface-variant block">Digital OTP &amp; QR</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container text-center">
                    <span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface text-[11px] font-bold mx-auto flex items-center justify-center mb-1">6</span>
                    <span className="font-label-sm text-label-sm font-bold text-on-surface block">ESG Audit</span>
                    <span className="text-[10px] text-on-surface-variant block">Govt/FSSAI logs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN: Fleet Logistics, AI Matchmaker & Live Telemetry (5 Cols) */}
          <div className="xl:col-span-5 flex flex-col space-y-space-lg">
            {/* Active Redistribution Partner Card */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[22px]">hub</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Algorithmic Match Profile</h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">Matched #RHA-774</span>
              </div>
              {/* Matched NGO Profile Box */}
              <div className="p-space-md rounded-xl bg-surface-container-low space-y-space-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Priority Tier 1 Rescue Node</span>
                    <h4 className="font-headline-sm text-headline-sm font-bold text-primary mt-0.5">Robin Hood Army - South Delhi Hub</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Direct Community Dining, Kalkaji Distribution Point</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-space-xs pt-2">
                  <div className="p-2 bg-surface-container-lowest rounded-lg text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Distance</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface">2.4 km</span>
                  </div>
                  <div className="p-2 bg-surface-container-lowest rounded-lg text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Transit ETA</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-secondary">14 mins</span>
                  </div>
                  <div className="p-2 bg-surface-container-lowest rounded-lg text-center">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Receiving Cap</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-tertiary">200 meals</span>
                  </div>
                </div>
              </div>
              {/* Assigned EV Logistics Telemetry */}
              <div className="space-y-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold block">Assigned Transport Unit</span>
                <div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">electric_car</span>
                    </div>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-on-surface">Tata Ace EV Mini #DL-04-EV-2026</span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">Driver: Rajesh Kumar  deg  Insulated Thermal Box: +4 deg C</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm">En Route</span>
                </div>
              </div>
              {/* Interactive Stepper Progress Indicator */}
              <div className="pt-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-space-sm font-semibold">Redistribution Handshake Protocol</span>
                <div className="space-y-3">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Surplus Logged &amp; Kitchen Thermal Sign-off</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">13:15 IST</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">AI Safety &amp; Microbiological Window Validated</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">13:18 IST</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">NGO Node Acceptance &amp; Port Allocation</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">13:21 IST</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm animate-pulse">
                      <span className="material-symbols-outlined text-[14px]">navigation</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-label-md text-label-md font-bold text-secondary">Driver En Route to IIT Gate 3 Loading Dock</span>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">Live (4 min away)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm opacity-60">
                    <div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">qr_code_scanner</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-label-md text-label-md text-on-surface">Cryptographic Dual QR Receiving Handshake</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Pending Arrival</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-2 flex gap-2">
                <button className="flex-1 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-on-surface transition-colors flex items-center justify-center gap-1" id="btnSimulateDriver" data-action="simulateDriverArrival()">
                  <span className="material-symbols-outlined text-[18px]">pin_drop</span>
                  Simulate Arrival
                </button>
                <button className="flex-1 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-colors flex items-center justify-center gap-1 shadow-sm" data-action="openModal('dispatchModal')">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  Dual QR Auth
                </button>
              </div>
            </div>
            {/* Live Mock Static Map Telemetry Panel */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Redistribution Geo-Spatial Mesh</h4>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Multi-destination cold-chain corridor</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-container-low text-primary font-label-sm text-label-sm font-bold">GPS: Active</span>
              </div>
              {/* Interactive Map Container */}
              <div className="w-full h-48 rounded-xl relative overflow-hidden bg-surface-container flex items-center justify-center" data-location="IIT Delhi, Hauz Khas, New Delhi" style={{backgroundImage: 'url("/high_resolution_realistic_photo_of_a_professional_delivery_driver_in_clean/screen.png")'}}>
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
                {/* Route Pin Overlays */}
                <div className="z-10 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-xl shadow-lg flex items-center gap-3 border-none">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-ping" />
                  <div>
                    <span className="font-label-md text-label-md font-bold text-on-surface block">EV Van #DL-04 in Transit</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Speed: 28 km/h  deg  Temperature: 65.2 deg C Hot Box</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SIH Evaluator Technology Architecture Reference (From System Diagram) */}
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-sm gap-space-xs">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">System Architecture Specification</span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">End-to-End Enterprise Tech Stack Alignment</h3>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="px-2.5 py-1 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">Spring Boot RESTful Engine</span>
              <span className="px-2.5 py-1 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">MongoDB Cluster</span>
              <span className="px-2.5 py-1 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">XGBoost Waste Predictor</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-sm pt-space-xs">
            <div className="p-space-sm rounded-xl bg-surface-container-low space-y-1">
              <div className="flex items-center gap-1.5 text-primary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-[18px]">group</span>
                1. System Users
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                IIT Campus Cafeterias, Commercial Processing Units, NGOs, Volunteers &amp; Certified Receivers.
              </p>
            </div>
            <div className="p-space-sm rounded-xl bg-surface-container-low space-y-1">
              <div className="flex items-center gap-1.5 text-primary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-[18px]">code</span>
                2. Web Interface Layer
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Component-based UI with real-time WebSocket state management, telemetry dashboard &amp; offline PWA mode.
              </p>
            </div>
            <div className="p-space-sm rounded-xl bg-surface-container-low space-y-1">
              <div className="flex items-center gap-1.5 text-primary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-[18px]">dns</span>
                3. Backend &amp; AI Layer
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Spring Boot microservices, automated route optimization, weather API ingestion, and surplus forecast pipelines.
              </p>
            </div>
            <div className="p-space-sm rounded-xl bg-surface-container-low space-y-1">
              <div className="flex items-center gap-1.5 text-primary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-[18px]">database</span>
                4. Persistence &amp; Audit
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                NoSQL MongoDB document store for immutable food safety logs, donation receipts, and ESG lifecycle records.
              </p>
            </div>
          </div>
        </div>
        {/* MODAL: Computer Vision Freshness Inspection (Interactive Demo) */}
        <div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm p-space-md" id="freshnessModal">
          <div className="bg-surface-container-lowest max-w-xl w-full rounded-xl shadow-xl p-space-lg space-y-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[24px]">center_focus_strong</span>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">AI Freshness &amp; Shelf-Life Vision Scan</h4>
              </div>
              <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high" data-action="closeModal('freshnessModal')">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="relative w-full h-52 rounded-xl overflow-hidden bg-surface-container flex items-center justify-center">
              <img className="w-full h-full object-cover" data-alt="High-resolution close-up top-down photograph of freshly cooked dal tadka and steamed basmati rice in industrial stainless steel kitchen chafing dishes, warm kitchen lighting, clear steam rising, safe thermal condition" src="/high_resolution_realistic_photo_of_a_professional_delivery_driver_in_clean/screen.png" />
              <div className="absolute inset-0 bg-primary/10 flex flex-col justify-between p-space-sm">
                <div className="flex justify-between items-start">
                  <span className="px-2 py-1 bg-surface-container-lowest/90 backdrop-blur-md rounded text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-tertiary animate-ping" /> YOLOv8-FoodNet: Active
                  </span>
                  <span className="px-2 py-1 bg-tertiary text-on-tertiary rounded font-label-sm text-label-sm font-bold">
                    98.4% Confidence Safe
                  </span>
                </div>
                <div className="bg-surface-container-lowest/90 backdrop-blur-md p-2.5 rounded-lg text-on-surface font-label-sm text-label-sm">
                  <div className="flex justify-between">
                    <span>Bacterial Hazard Likelihood: &lt;0.01%</span>
                    <span className="text-tertiary font-bold">Safe for Consumption</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-label-md text-label-md">
                <span className="text-on-surface-variant">Thermal Sensor Cross-Verification</span>
                <span className="text-primary font-bold">67.4 deg C (Safe Zone &gt; 60 deg C)</span>
              </div>
              <div className="flex justify-between font-label-md text-label-md">
                <span className="text-on-surface-variant">Visual Discoloration / Oxidation</span>
                <span className="text-tertiary font-bold">Zero Anomaly Detected</span>
              </div>
              <div className="flex justify-between font-label-md text-label-md">
                <span className="text-on-surface-variant">FSSAI Safe Ingestion Limit</span>
                <span className="text-on-surface font-semibold">Valid until 17:15 IST</span>
              </div>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all" data-action="closeModal('freshnessModal')">
              Approve Food Quality Verification
            </button>
          </div>
        </div>
        {/* MODAL: FSSAI Compliance Certificate */}
        <div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm p-space-md" id="fssaiModal">
          <div className="bg-surface-container-lowest max-w-lg w-full rounded-xl shadow-xl p-space-lg space-y-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-tertiary text-[24px]">verified</span>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">FSSAI Food Safety Digital Certificate</h4>
              </div>
              <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high" data-action="closeModal('fssaiModal')">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low border-none space-y-space-sm text-center">
              <div className="w-16 h-16 rounded-full bg-tertiary-fixed text-on-tertiary-fixed mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-[36px]">shield_with_heart</span>
              </div>
              <h5 className="font-headline-sm text-headline-sm font-bold text-on-surface">Certificate of Safe Redistribution</h5>
              <span className="font-label-sm text-label-sm text-on-surface-variant block">Reg. Code: FSSAI-DEL-IIT-2026-992140</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Food batch handled in compliance with FSSAI (Recovery &amp; Distribution of Surplus Food) Regulations. Cold-chain and hot-holding temperatures verified by IoT gateway.
              </p>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
              <span>Auditor: AnnaSetu AI Sensor Array</span>
              <span>Timestamp: Today, 13:20 IST</span>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all" data-action="closeModal('fssaiModal')">
              Download Signed Cryptographic Token
            </button>
          </div>
        </div>
        {/* MODAL: Dual QR Dispatch Verification Handshake */}
        <div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm p-space-md" id="dispatchModal">
          <div className="bg-surface-container-lowest max-w-md w-full rounded-xl shadow-xl p-space-lg space-y-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[24px]">qr_code_scanner</span>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Dual QR Handshake</h4>
              </div>
              <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high" data-action="closeModal('dispatchModal')">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container text-center space-y-space-sm">
              <div className="w-36 h-36 mx-auto bg-surface-container-lowest p-2 rounded-xl shadow-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-[120px] text-primary">qr_code_2</span>
              </div>
              <span className="font-label-md text-label-md text-primary font-bold block">Token: ANNA-2026-IITDEL-RHA</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Scan with driver tablet to confirm handover, thermal lock, and recipient NGO custody.
              </p>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary font-label-md text-label-md font-bold transition-all" data-action="executeQRHandshakeSuccess()">
              Complete Digital Custody Transfer
            </button>
          </div>
        </div>
      </div>
      {/* Inline Interactive Micro-Scripting for Live Hackathon Demonstration */}
    </main></div>
  {notice && <div className="fixed bottom-5 right-5 z-[100] rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-on-primary shadow-lg">{notice} ready</div>}
  </div>
  );
}






