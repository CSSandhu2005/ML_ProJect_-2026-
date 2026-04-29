import { GLSLHills } from "./glsl-hills";

export default function HeroMain() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden ">
      <GLSLHills />
      <div className="pointer-events-none z-10 text-center absolute">
        <h1 className="font-semibold text-7xl whitespace-pre-wrap">
          <span className="italic text-6xl font-thin">
            Designs That Speak <br />{" "}
          </span>
          Louder Than Words
        </h1>
        <p className="text-sm text-white/60">
          We craft stunning visuals and user - friendly experiences that <br />{" "}
          help your brand stand out and connect with your audience.
        </p>
      </div>
    </div>
  );
}
