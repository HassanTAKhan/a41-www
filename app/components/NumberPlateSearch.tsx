"use client";

import { useState } from "react";

interface MotResult {
  registration: string;
  make: string;
  model: string;
  colour: string;
  fuelType: string;
  motTestExpiryDate?: string;
  motTests?: {
    completedDate: string;
    testResult: string;
    expiryDate?: string;
    odometerValue?: string;
    odometerUnit?: string;
    defects?: {
      text: string;
      type: string;
    }[];
  }[];
}

export default function NumberPlateSearch() {
  const [registration, setRegistration] = useState("");
  const [result, setResult] = useState<MotResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = registration.replace(/\s/g, "").toUpperCase();
    if (!trimmed) return;

    // Basic UK plate format validation
    if (!/^[A-Z0-9]{2,7}$/.test(trimmed)) {
      setError("Please enter a valid UK registration number");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        `/api/mot-check?registration=${encodeURIComponent(trimmed)}`
      );
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Unable to check MOT status. Please try again.");
        return;
      }

      setResult(data);
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getMotStatus = () => {
    if (!result?.motTestExpiryDate) return null;
    const expiry = new Date(result.motTestExpiryDate);
    const now = new Date();
    const daysLeft = Math.ceil(
      (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysLeft < 0) return { status: "EXPIRED", color: "text-red-500", bg: "bg-red-500/10 border-red-500/30" };
    if (daysLeft <= 30) return { status: "EXPIRING SOON", color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500/30" };
    return { status: "VALID", color: "text-green-500", bg: "bg-green-500/10 border-green-500/30" };
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-blue-800 rounded-l-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">GB</span>
          </div>
          <input
            type="text"
            value={registration}
            onChange={(e) => setRegistration(e.target.value.toUpperCase())}
            placeholder="ENTER REG"
            maxLength={8}
            className="plate-input w-full h-14 pl-16 pr-4 bg-amber-400 text-black text-2xl font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-amber-600/50 placeholder:text-xl"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="h-14 px-8 bg-accent hover:bg-accent-hover text-black font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg whitespace-nowrap cursor-pointer"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Checking...
            </span>
          ) : (
            "Check MOT"
          )}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-6 bg-surface border border-border rounded-xl overflow-hidden">
          {/* Vehicle Info Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {result.make} {result.model}
                </h3>
                <p className="text-muted mt-1">
                  {result.colour} · {result.fuelType} · {result.registration}
                </p>
              </div>
              {getMotStatus() && (
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold border ${getMotStatus()!.bg} ${getMotStatus()!.color}`}
                >
                  MOT {getMotStatus()!.status}
                </span>
              )}
            </div>
          </div>

          {/* MOT Expiry */}
          {result.motTestExpiryDate && (
            <div className="p-6 border-b border-border">
              <p className="text-muted text-sm">MOT Expires</p>
              <p className="text-lg font-semibold text-white mt-1">
                {formatDate(result.motTestExpiryDate)}
              </p>
            </div>
          )}

          {/* Latest Test */}
          {result.motTests && result.motTests.length > 0 && (
            <div className="p-6">
              <p className="text-muted text-sm mb-3">Latest MOT Test</p>
              <div className="flex items-center gap-3">
                <span
                  className={`text-sm font-bold ${
                    result.motTests[0].testResult === "PASSED"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {result.motTests[0].testResult}
                </span>
                <span className="text-muted">
                  on {formatDate(result.motTests[0].completedDate)}
                </span>
              </div>
              {result.motTests[0].odometerValue && (
                <p className="text-muted text-sm mt-2">
                  Mileage: {Number(result.motTests[0].odometerValue).toLocaleString()}{" "}
                  {result.motTests[0].odometerUnit?.toLowerCase()}
                </p>
              )}
              {result.motTests[0].defects &&
                result.motTests[0].defects.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-muted mb-2">Advisories & Defects:</p>
                    <ul className="space-y-1">
                      {result.motTests[0].defects.map((defect, i) => (
                        <li
                          key={i}
                          className={`text-sm pl-4 border-l-2 ${
                            defect.type === "ADVISORY" || defect.type === "MINOR"
                              ? "border-amber-500/50 text-amber-200/80"
                              : "border-red-500/50 text-red-300/80"
                          }`}
                        >
                          {defect.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          )}

          {/* CTA */}
          <div className="p-6 bg-accent/5 border-t border-border">
            <p className="text-center text-sm text-muted">
              Need an MOT?{" "}
              <a href="#contact" className="text-accent hover:underline font-medium">
                Book with us today
              </a>{" "}
              or call{" "}
              <a href="tel:07377745544" className="text-accent hover:underline font-medium">
                07377 745544
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
