"use client";
import React from "react";
import projects from "@/data/projects.json";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { ArrowRightIcon } from "@radix-ui/react-icons";

const ProjectsGrid = () => {
  return (
    <div className="container grid md:grid-cols-2 gap-8 items-center place-items-center mb-4">
      {projects.map((project) => (
        <Dialog key={project.id}>
          <DialogTrigger asChild>
            <Card className="w-full hover:cursor-pointer">
              <CardHeader className="hover:opacity-80 transition ease-in-out duration-300">
                <Image
                  src={project.cover}
                  width={600}
                  height={300}
                  alt={project.name}
                  className="rounded-t-xl h-full w-full"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="text-[rgb(53,66,89)]">
                  <div className="flex flex-row space-x-2 items-center">
                    <h1>{project.name}</h1> <ArrowRightIcon />
                  </div>
                </CardTitle>
                <CardDescription>{project.short_description}</CardDescription>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="flex flex-row justify-between items-center">
                  {project.name}{" "}
                  {project.in_progress && (
                    <Badge variant="one" className="mr-6">
                      In Progress
                    </Badge>
                  )}
                </div>
              </DialogTitle>
              <div className="flex flex-col space-y-4 items-center">
                {project.image && project.link ? (
                  <Link href={project.link} target="_blank" className="w-full">
                    <Image
                      src={project.image}
                      width={600}
                      height={300}
                      alt={project.name}
                      className="w-full max-w-full"
                    />
                  </Link>
                ) : (
                  project.image && (
                    <Image
                      src={project.image}
                      width={600}
                      height={300}
                      alt={project.name}
                      className="w-full max-w-full"
                    />
                  )
                )}
                <p className="text-[#131411] break-words">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {project.tools.map((tool, index) => (
                    <Badge
                      key={index}
                      variant={
                        index % 3 === 0
                          ? "one"
                          : index % 3 === 1
                          ? "two"
                          : "three"
                      }
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default ProjectsGrid;
