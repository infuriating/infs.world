"use client";

import { cubicBezier, motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import SocialIcon from "./ui/social-icon";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import GradientText from "@/components/ui/gradient-text";

export default function Introduction() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-lg flex-col">
        <br />
        <TextGenerateEffect
          className="text-base text-muted-foreground"
          words="Luca Kuiper @ infs.world"
        />
        <TextGenerateEffect
          className="text-2xl"
          words="Bringing web experiences out of this universe. Exploring design, UX and back-end."
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2.75,
            duration: 0.75,
            ease: cubicBezier(0.22, 0.61, 0.36, 1),
          }}
        >
          <p>
            Get in touch via the <GradientText text="following mediums" />
          </p>
          <div className="mt-2 flex justify-center gap-x-6">
            <SocialIcon
              url="https://linkedin.com/in/lucakuiper"
              medium="LinkedIn"
              icon={faLinkedin}
            />
            <SocialIcon
              url="https://github.com/infuriating"
              medium="GitHub"
              icon={faGithub}
            />
            <SocialIcon
              url="mailto:luca@infs.world"
              medium="Email"
              icon={faEnvelope}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
