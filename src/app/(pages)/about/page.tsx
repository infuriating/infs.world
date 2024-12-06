export const dynamic = "force-static";

import GradientText from "@/components/ui/gradient-text";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-[calc(100_-_104px)] w-full flex-col justify-between gap-16 pb-4">
      <main className="flex w-full flex-col justify-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 lg:px-8">
          <section className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              About <GradientText text="infs.world" />
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Hey! I&apos;m Luca Kuiper, a passionate full-stack web developer
              from the Netherlands. I specialize in creating modern, responsive
              web applications with a focus on user experience.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Background</h2>
            <div className="flex max-w-2xl flex-col gap-4 text-muted-foreground">
              <p>
                Currently in my third and last year at Grafisch Lyceum
                Rotterdam, I&apos;ve been immersed in the world of programming
                since I was 12 years old. My journey began with simple curiosity
                and has later evolved into a deep passion for web development.
              </p>
              <p>
                Based in Den Haag, I&apos;ve developed a strong foundation in
                both front-end and back-end technologies, with a particular
                focus on React and Next.js. My early exposure to technology has
                shaped my approach to problem-solving and innovation in web
                development.
              </p>
              <p>
                At the moment, I&apos;m an intern at{" "}
                <Link
                  href="https://rox.nl"
                  className="font-bold text-primary underline transition-colors hover:text-primary/80"
                >
                  ROX
                </Link>
                , where I&apos;m working on new and exciting projects. So far
                the journey has been pretty great and have taught me a lot,
                thanks to the great team!
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Interests & Hobbies</h2>
            <div className="flex max-w-2xl flex-col gap-4 text-muted-foreground">
              <p>
                Beyond coding, I always try to keep a balanced lifestyle that
                includes regular workouts and exploring new design trends. I
                believe that physical well-being and creativity go hand in hand
                in fostering personal growth.
              </p>
              <p>
                Gaming is another passion of mine, doing it competitively when I
                was younger, and still enjoying it casually today. Playing games
                made my creativity and love for designing spark, but also for
                video editing.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Professional Focus</h2>
            <div className="flex max-w-2xl flex-col gap-4 text-muted-foreground">
              <p>
                My primary focus lies in creating intuitive and efficient web
                solutions. I&apos;m constantly learning and adapting to new
                technologies, ensuring that I stay current with industry best
                practices and emerging trends.
              </p>
              <p>
                I believe in the power of clean code and thoughtful design to
                create meaningful user experiences. Whether it&apos;s front-end
                development or full-stack solutions, I approach each project
                with dedication and attention to detail.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
