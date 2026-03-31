"use client";

import { useState } from "react";

import { communityStatements } from "@/data/exhibits";

const gallonsPerPledge = 2000;
const initialPledges = 186;

export function CommunityImpact() {
  const [pledges, setPledges] = useState(initialPledges);

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="artifact-card p-5 sm:p-6">
        <p className="display-type text-sm uppercase tracking-[0.22em] text-clay">Social Proof / Community Impact</p>
        <p
          className="impact-number mt-5 text-rust"
          aria-live="polite"
          aria-atomic="true"
          aria-label={`${(pledges * gallonsPerPledge).toLocaleString()} gallons symbolically saved`}
        >
          {(pledges * gallonsPerPledge).toLocaleString()}
        </p>
        <p aria-hidden="true" className="display-type mt-3 text-2xl uppercase text-ash md:text-3xl">gallons symbolically saved</p>
        <p className="mt-4 text-base leading-7 text-ash/80">
          Each pledge represents one decision to buy used, repair first, or upcycle what already exists.
        </p>
        <button
          type="button"
          onClick={() => setPledges((current) => current + 1)}
          aria-label="Add your pledge to the community count"
          className="mt-6 w-full border border-teal bg-teal px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-mist transition hover:bg-ash sm:w-auto"
        >
          Add your pledge
        </button>
        <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ash/80">{pledges.toLocaleString()} community commitments recorded</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
        {communityStatements.map((statement, index) => (
          <blockquote key={statement} className="artifact-card p-5 text-base leading-7 text-ash/82">
            <p className="display-type text-sm uppercase tracking-[0.22em] text-clay">Statement {index + 1}</p>
            <p className="mt-3">{statement}</p>
          </blockquote>
        ))}
      </div>
    </div>
  );
}