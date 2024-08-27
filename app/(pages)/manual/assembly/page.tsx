import Blockquote from "@/components/Blockquote/Blockquote";
import { Suspense } from "react";
import Steps from "./Steps";

export default function Assembly() {
  return (
    <>
      <p>
        Follow the instructions to disassemble the mill for detailed cleaning.
        To reassemble the mill, simply reverse the steps.
      </p>
      <p>
        To avoid scratches it’s recommended to use a cloth on the surface of the
        disassembly/assembly.
      </p>
      <p>
        If the rotary dial accidentally unscrews completely on a very coarse
        setting, reassembly is easy and straightforward. In this case, make sure
        not to remove the knob (A); instead, turn it upside down so that you are
        looking at the grinder from below and follow the steps in the assembly
        instructions.
      </p>
      <Blockquote title="Important">
        If the bottom washer becomes loose and falls out during disassembly or
        assembly, follow step 3 of the assembly instructions. Make sure to
        insert the washer correctly and ensure the rotary shaft is straight in
        the mill housing.
      </Blockquote>
      <Suspense>
        <Steps />
      </Suspense>
    </>
  );
}
