import Lead from "@/components/Lead";
import PerfectGrip from "@/components/PerfectGrip/PerfectGrip";
import ColorTags from "@/components/ColorTags/ColorTags";
import Apex from "@/components/Apex/Apex";
import GrindRange from "../GrindRange/GrindRange";
import MoreOutput from "../MoreOutput/MoreOutput";
import PreciseAdjustment from "../PreciseAdjustment/PreciseAdjustment";
import Features from "../Features/Features";
import TechSpecsLink from "../TechSpecsLink/TechSpecsLink";

export default function Homepage() {
  return (
    <>
      <Lead />
      <PerfectGrip />
      <ColorTags />
      <Apex />
      <GrindRange />
      <MoreOutput />
      <PreciseAdjustment />
      <Features />
      <TechSpecsLink />
    </>
  );
}
