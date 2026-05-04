import { GLSLHills } from "./glsl-hills";

export default function HeroMain() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden ">
      <GLSLHills />
      <div className="pointer-events-none z-10 text-center absolute">
        <h1 className="font-semibold text-7xl whitespace-pre-wrap">
          <span className="italic text-6xl font-thin">
            Build Systems That Think <br />{" "}
          </span>
          Code Hardware Into Life
        </h1>
        <p className="text-sm text-white/60">
          Empower kids to assemble hardware and program it seamlessly—turning ideas <br/>
          into real-world interactive systems.
        </p>
      </div>
    </div>
  );
}
