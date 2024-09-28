"use client";

import Lead from "@/components/Lead/Lead";
import PerfectGrip from "@/components/PerfectGrip/PerfectGrip";
import ColorTags from "@/components/ColorTags/ColorTags";
import Apex from "@/components/Apex/Apex";
import GrindRange from "@/components/GrindRange/GrindRange";
import MoreOutput from "@/components/MoreOutput/MoreOutput";
import PreciseAdjustment from "@/components/PreciseAdjustment/PreciseAdjustment";
import Features from "@/components/Features/Features";
import React from "react";
import Slides from "@/components/Slides/Slides";
import Sentinel from "@/components/Sentinel/Sentinel";

export default function Homepage() {
  return (
    <>
      <Lead />
      <Sentinel variant="white">
        <PerfectGrip />
      </Sentinel>
      <Sentinel variant="light1">
        <ColorTags />
      </Sentinel>
      <Sentinel variant="dark">
        <Apex />
        <GrindRange />
        <MoreOutput />
        <PreciseAdjustment />
      </Sentinel>
      <Sentinel variant="white">
        <Features />
      </Sentinel>
    </>
  );
}
