import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function ProjectCollaborators({
  collaborators,
}: {
  collaborators: {
    name: string;
    role: string;
    github?: string;
    linkedin?: string;
    website?: string;
  }[];
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Collaborators
      </h2>
      <div className="flex max-w-[600px]">
        {collaborators.map((collaborator, i) => (
          <div
            className="flex w-72 flex-col items-center rounded-sm border border-white/20 bg-black/0 px-4 py-1.5 transition-all hover:bg-white/20"
            key={i}
          >
            <p className="text-xl font-medium leading-5">{collaborator.name}</p>
            <span className="text-sm text-muted-foreground">
              {collaborator.role}
            </span>
            <div className="flex gap-x-3 pt-1">
              {collaborator.github && (
                <Link href={collaborator.github} target="_blank">
                  <FontAwesomeIcon
                    className="h-7 w-7 transition-all hover:scale-110"
                    icon={faGithub}
                  />
                </Link>
              )}
              {collaborator.linkedin && (
                <Link href={collaborator.linkedin} target="_blank">
                  <FontAwesomeIcon
                    className="h-7 w-7 transition-all hover:scale-110"
                    icon={faLinkedin}
                  />
                </Link>
              )}
              {collaborator.website && (
                <Link href={collaborator.website} target="_blank">
                  <FontAwesomeIcon
                    className="h-7 w-7 transition-all hover:scale-110"
                    icon={faGlobe}
                  />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
