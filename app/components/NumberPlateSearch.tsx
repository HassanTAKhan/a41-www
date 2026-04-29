"use client";

import { useState } from "react";

type Defect = { text: string; type: string };

type MotTest = {
  completedDate: string;
  testResult: string;
  expiryDate?: string | null;
  odometerValue?: string;
  odometerUnit?: string;
  defects?: Defect[];
};

type VehicleData = {
  registration: string;
  make: string | null;
  model: string | null;
  colour: string | null;
  fuelType: string | null;
  motTestExpiryDate?: string | null;
  expired: boolean;
  motTests?: MotTest[];
};

function formatDate(dateStr?: string | null) {
  if (!dateStr) return "N/A";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatDateShort(dateStr?: string | null) {
  if (!dateStr) return "N/A";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function daysUntil(dateStr?: string | null): number | null {
  if (!dateStr) return null;
  const diff = new Date(dateStr).getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function NumberPlateSearch() {
  const [reg, setReg] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);

  async function handleCheck() {
    const sanitized = reg.replace(/\s+/g, "").toUpperCase();
    if (!sanitized) return;

    setLoading(true);
    setError(null);
    setVehicle(null);

    try {
      const res = await fetch(
        `/api/mot-check?registration=${encodeURIComponent(sanitized)}`
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setVehicle(data);
      }
    } catch {
      setError("Unable to connect. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleCheck();
  }

  const days = daysUntil(vehicle?.motTestExpiryDate);
  const expiringSoon = !vehicle?.expired && days !== null && days <= 30;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Search bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-blue-800 rounded-l-lg flex items-center justify-center z-10">
            <span className="text-white text-xs font-bold tracking-tight">GB</span>
          </div>
          <input
            type="text"
            value={reg}
            onChange={(e) => setReg(e.target.value.toUpperCase())}
            onKeyDown={handleKeyDown}
            placeholder="ENTER REG"
            maxLength={8}
            spellCheck={false}
            className="plate-input w-full h-14 pl-16 pr-4 bg-amber-400 text-black text-2xl font-bold rounded-lg uppercase focus:outline-none focus:ring-2 focus:ring-blue-800 placeholder:text-amber-700/50"
          />
        </div>
        <button
          onClick={handleCheck}
          disabled={loading || !reg.trim()}
          className="h-14 px-8 bg-accent text-white font-bold rounded-lg text-base whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent-hover transition-colors"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Checking…
            </span>
          ) : (
            "Check MOT"
          )}
        </button>
      </div>

      {error && (
        <div className="mt-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      {vehicle && (
        <div className="mt-6 rounded-2xl border border-border overflow-hidden bg-surface">

          {/* Status banner */}
          <div
            className={`px-6 py-5 flex items-center justify-between ${
              vehicle.expired
                ? "bg-red-600/15 border-b border-red-600/20"
                : expiringSoon
                ? "bg-amber-500/15 border-b border-amber-500/20"
                : "bg-green-600/15 border-b border-green-600/20"
            }`}
          >
            <div className="flex items-center gap-3">
              {vehicle.expired ? (
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              ) : (
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${expiringSoon ? "bg-amber-500/20" : "bg-green-600/20"}`}>
                  <svg className={`w-5 h-5 ${expiringSoon ? "text-amber-400" : "text-green-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              <div>
                <p className={`font-bold text-lg leading-tight ${vehicle.expired ? "text-red-400" : expiringSoon ? "text-amber-400" : "text-green-400"}`}>
                  {vehicle.expired ? "MOT Expired" : expiringSoon ? "Expiring Soon" : "MOT Valid"}
                </p>
                <p className="text-muted text-sm">
                  {vehicle.expired
                    ? `Expired ${formatDate(vehicle.motTestExpiryDate)}`
                    : days !== null
                    ? `${days} day${days === 1 ? "" : "s"} remaining`
                    : "No expiry date"}
                </p>
              </div>
            </div>

            {/* Number plate */}
            <div className="hidden sm:flex items-center">
              <div className="flex rounded-md overflow-hidden border-2 border-amber-400/80 shadow-lg">
                <div className="bg-blue-800 px-1.5 flex flex-col items-center justify-center gap-0.5 py-1">
                  <span className="text-white text-[9px] font-bold leading-none">GB</span>
                  <div className="w-3 h-3 rounded-full border border-amber-400/60" />
                </div>
                <div className="bg-amber-400 px-3 py-1 plate-input text-black font-bold text-lg tracking-widest">
                  {vehicle.registration}
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle & expiry info */}
          <div className="px-6 py-5 grid grid-cols-2 sm:grid-cols-3 gap-5 border-b border-border">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Vehicle</p>
              <p className="text-white font-semibold text-sm">
                {vehicle.make && vehicle.model
                  ? `${vehicle.make} ${vehicle.model}`
                  : vehicle.registration}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Expiry Date</p>
              <p className="text-white font-semibold text-sm">
                {formatDate(vehicle.motTestExpiryDate)}
              </p>
            </div>
            {(vehicle.colour || vehicle.fuelType) && (
              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-1">Details</p>
                <p className="text-white font-semibold text-sm">
                  {[vehicle.colour, vehicle.fuelType].filter(Boolean).join(" · ")}
                </p>
              </div>
            )}
          </div>

          {/* Test history */}
          {vehicle.motTests && vehicle.motTests.length > 0 && (
            <div className="px-6 py-5">
              <p className="text-xs text-muted uppercase tracking-wider mb-4">MOT History</p>
              <div className="flex flex-col gap-2">
                {vehicle.motTests.map((test, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-surface-light border border-border p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-2 h-2 rounded-full shrink-0 mt-1 ${
                            test.testResult === "PASSED" ? "bg-green-400" : "bg-red-400"
                          }`}
                        />
                        <div className="min-w-0">
                          <p className="text-white text-sm font-medium">
                            {formatDateShort(test.completedDate)}
                          </p>
                          {test.odometerValue && (
                            <p className="text-muted text-xs mt-0.5">
                              {parseInt(test.odometerValue).toLocaleString()} {test.odometerUnit?.toLowerCase()}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        {test.expiryDate && test.testResult === "PASSED" && (
                          <span className="text-xs text-muted hidden sm:block">
                            Until {formatDateShort(test.expiryDate)}
                          </span>
                        )}
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                            test.testResult === "PASSED"
                              ? "bg-green-500/15 text-green-400"
                              : "bg-red-500/15 text-red-400"
                          }`}
                        >
                          {test.testResult === "PASSED" ? "Pass" : "Fail"}
                        </span>
                      </div>
                    </div>

                    {test.defects && test.defects.length > 0 && (
                      <ul className="mt-3 pt-3 border-t border-border flex flex-col gap-1.5">
                        {test.defects.map((d, j) => (
                          <li key={j} className="flex gap-2 text-xs">
                            <span
                              className={`shrink-0 font-semibold min-w-[52px] ${
                                d.type === "FAIL"
                                  ? "text-red-400"
                                  : d.type === "ADVISORY"
                                  ? "text-amber-400"
                                  : "text-muted"
                              }`}
                            >
                              {d.type === "FAIL" ? "Fail" : d.type === "ADVISORY" ? "Advisory" : d.type}
                            </span>
                            <span className="text-muted leading-relaxed">{d.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA if expired or expiring soon */}
          {(vehicle.expired || expiringSoon) && (
            <div className="px-6 pb-5">
              <a
                href="tel:07377745544"
                className="flex items-center justify-center gap-2 w-full py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Book your MOT — 07377 745544
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
