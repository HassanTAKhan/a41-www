"use client";

export default function NumberPlateSearch() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 opacity-50 pointer-events-none select-none">
        <div className="flex-1 relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-blue-800 rounded-l-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">GB</span>
          </div>
          <div className="plate-input w-full h-14 pl-16 pr-4 bg-amber-400 text-amber-600/50 text-2xl font-bold rounded-lg flex items-center">
            ENTER REG
          </div>
        </div>
        <div className="h-14 px-8 bg-accent text-black font-bold rounded-lg text-lg flex items-center whitespace-nowrap">
          Check MOT
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-muted">
        MOT history check — coming soon
      </p>
    </div>
  );
}
