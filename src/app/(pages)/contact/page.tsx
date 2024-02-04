import React from "react";
import SocialIcon from "../(home)/components/ui/social-icon";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function page() {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-4xl font-bold">How to contact me</p>
      <p className="max-w-xl text-xl text-muted-foreground">
        Incase you have any inquiries or want to reach out to me, here are the
        following mediums you can use to contact me
      </p>
      <div className="flex justify-center gap-x-4">
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
          url="https://instagram.com/infs.world"
          medium="Instagram"
          icon={faInstagram}
        />
        <SocialIcon
          url="mailto:luca@infs.world"
          medium="Email"
          icon={faEnvelope}
        />
      </div>
    </div>
  );
}
