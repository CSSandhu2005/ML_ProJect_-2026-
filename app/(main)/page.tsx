import HeroMain from "@/components/HeroMain";
import { BentoMain } from "@/components/ui/bento-grid-main";
import { MarqueeMain } from "@/components/ui/marquee-main";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import VerticalTabs from "@/components/ui/vertical-tabs";
import { SplineScene } from "@/components/ui/splite";
import { CursorDrivenParticleTypography } from "@/components/cursor-driven-particles-typography";
import { ChangeLog } from "@/components/interactive-changelog-with-dialog";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-sans">
      <HeroMain />

      <div className="py-18 flex flex-col gap-12">
        <GooeyText
          texts={["Integrations", "And", "Reviews"]}
          morphTime={1}
          cooldownTime={0.25}
          className="font-bold mb-6"
        />
        <BentoMain />
      </div>

      <MarqueeMain />
      <ChangeLog />
      <VerticalTabs />

      <div>
        <CursorDrivenParticleTypography
          text="Build. Code. Control."
          fontSize={160}
          particleDensity={5}
          dispersionStrength={20}
        />
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-screen h-screen "
        />
      </div>
    </div>
  );
}
