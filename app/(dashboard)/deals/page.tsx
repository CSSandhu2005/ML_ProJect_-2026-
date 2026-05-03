"use client";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const Deals = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient Background */}
      <AnimatedGradientBackground />

      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-32 text-center">
        <motion.div transition={{ delay: 0.4, duration: 0.9 }}>
          <DotLottieReact
            src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
            loop
            autoplay
          />
        </motion.div>
        <p className="mt-4 text-lg text-gray-300 md:text-xl max-w-lg">
          In DevelopMent Process , Coming Soon ... 👨🏻‍💻 .
        </p>
      </div>
    </div>
  );
};

export default Deals;
