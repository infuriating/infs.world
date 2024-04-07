import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type H3 = {
  text: string;
  id: string;
};

export default function page() {
  const hthrees = [
    {
      text: "Who am I?",
      id: "who-am-i",
    },
    {
      text: "My Background",
      id: "my-background",
    },
    {
      text: "My Interests",
      id: "my-interests",
    },
    {
      text: "Inspiration",
      id: "inspiration",
    },
  ];

  const renderH3 = (hthree: H3) => (
    <Link className="group" href={`#${hthree.id}`}>
      <h3
        key={hthree.id}
        id={hthree.id}
        className="flex cursor-pointer items-center gap-x-2 py-1 text-muted-foreground underline transition-all hover:text-white"
      >
        <LinkIcon className="group-hover:scale-110" size={18} /> {hthree.text}
      </h3>
    </Link>
  );

  return (
    <div className="prose prose-invert flex flex-col gap-y-2 prose-headings:mb-1 prose-headings:mt-0.5 prose-p:mb-0 prose-p:mt-0.5 lg:px-8">
      <h1>Hey!</h1>
      <h2>I really appreciate you taking the time to visit my website!</h2>
      <h2>Anyway, let me properly introduce myself.</h2>
      {/* Who am I? */}
      {renderH3(hthrees[0])}
      <p>
        My name is Luca Kuiper, and I am a 21 year old web developer from the
        Netherlands. I currently reside in the city of Den Haag, and I am
        currently in my second year of studying at Grafisch Lyceum Rotterdam.
      </p>
      <p>
        From a young age I have always been interested in technology and
        computers. I started programming when I was as little as 12 years old,
        but I only started taking it seriously when I switched courses in
        college and figured out that there was a whole world of possibilities
        out there.
      </p>
      {/* My Background */}
      {renderH3(hthrees[1])}
      <p>hey</p>
      {/* My Interests */}
      {renderH3(hthrees[2])}
      <p>
        I have a wide range of interests, but the most important ones to me are
        working out, design, and video games. I have always been interested in
        creating things, providing solutions and making them look good and user
        friendly, which is why I chose to become a web developer and specialize
        in front-end development.
      </p>
      <p>
        One of the things I enjoy doing from time to time is playing video games
        with my friends. I have always been interested in video games, and I
        have played a wide range of games from different genres.{" "}
      </p>
      <Link href="/games">
        You can see an collection of the variety of games I have played here
      </Link>
      {/* Inspiration */}
      {renderH3(hthrees[3])}
      <p>
        I get inspired by a lot of things, but the most important ones to me are
        the people around me and the things I see on the internet. I am always
        looking for new things to learn and new things to try out, which is why
        I am always looking for new things to try out and new things to learn.
      </p>
    </div>
  );
}
