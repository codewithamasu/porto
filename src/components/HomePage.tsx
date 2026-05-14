import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import PhotosSection from "@/components/section/photos-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.02;

const sectionComponents: Record<string, React.ReactNode> = {
  about: (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold tracking-tighter">{DATA.sections.about.heading}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </div>
    </section>
  ),
  work: (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-2xl font-bold tracking-tighter">{DATA.sections.work.heading}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <WorkSection />
        </BlurFade>
      </div>
    </section>
  ),
  education: (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-2xl font-bold tracking-tighter">{DATA.sections.education.heading}</h2>
        </BlurFade>
        <div className="grid grid-cols-1 gap-4">
          {DATA.education.map((education, index) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
              <a
                href={education.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-4 p-4 border border-border/50 bg-card/50 rounded-2xl group transition-all duration-300 hover:bg-muted/50 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-x-4 flex-1 min-w-0">
                  {education.logoUrl ? (
                    <img
                      src={education.logoUrl}
                      alt={education.school}
                      loading="lazy"
                      className="size-10 md:size-12 p-1.5 border border-border/50 rounded-xl bg-background shadow-sm overflow-hidden object-contain flex-none"
                    />
                  ) : (
                    <div className="size-10 md:size-12 border border-border/50 rounded-xl bg-muted flex-none" />
                  )}
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <div className="font-semibold text-base leading-none flex items-center gap-2">
                      {education.school}
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" aria-hidden />
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">{education.degree}</div>
                  </div>
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-muted-foreground/60 tabular-nums text-right flex-none">
                  {education.start} — {education.end}
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  ),
  skills: (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-2xl font-bold tracking-tighter">{DATA.sections.skills.heading}</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <div className="group border border-border/50 bg-card rounded-xl h-9 w-fit px-4 flex items-center gap-2.5 hover:bg-muted/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default">
                {skill.icon && <skill.icon className="size-4 grayscale group-hover:grayscale-0 transition-all duration-300 rounded overflow-hidden object-contain" />}
                <span className="text-foreground text-xs font-medium tracking-tight">{skill.name}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  ),
  projects: (
    <section id="projects">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <ProjectsSection />
      </BlurFade>
    </section>
  ),
  hackathons: null,
  photos: null,
  contact: (
    <section id="contact">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <ContactSection />
      </BlurFade>
    </section>
  ),
};

export default function HomePage() {
  const orderedSections = Object.entries(DATA.sections)
    .filter(([, s]) => s.enabled)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);

  return (
    <main className="flex flex-col gap-20 relative">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <section id="hero" className="w-full pt-8 pb-4">
        <div className="flex flex-col items-start gap-8">
          
          {/* Metadata Row */}
          <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
            <div className="flex flex-wrap items-center gap-4 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open for collaboration
              </span>
              <span className="opacity-30">•</span>
              <span>{DATA.location}</span>
            </div>
          </BlurFade>

          {/* Huge Name & Large Avatar Row */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <BlurFade delay={BLUR_FADE_DELAY * 2} yOffset={8} className="flex-1">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.8] uppercase text-foreground">
                  <span className="relative inline-block whitespace-nowrap">
                    <span className="relative z-10">{DATA.name.split(" ")[0]}</span>
                    <svg className="absolute -left-2 -right-2 sm:-left-4 sm:-right-4 -top-1 -bottom-1 w-[calc(100%+1rem)] sm:w-[calc(100%+2rem)] h-[120%] -z-10 text-amber-400" preserveAspectRatio="none">
                      <defs>
                        <filter id="marker-roughness" x="-20%" y="-20%" width="140%" height="140%">
                          <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="3" result="noise" />
                          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
                        </filter>
                      </defs>
                      <rect x="5%" y="15%" width="90%" height="70%" fill="currentColor" opacity="0.7" filter="url(#marker-roughness)" rx="5" />
                    </svg>
                  </span>
                </h1>
              </BlurFade>
              
              <BlurFade delay={BLUR_FADE_DELAY * 3} className="shrink-0">
                <Avatar className="size-24 sm:size-32 md:size-36 rounded-full shadow-lg grayscale hover:grayscale-0 transition-all duration-500 ease-out hover:scale-105 hover:-rotate-3 cursor-pointer overflow-hidden">
                  <AvatarImage alt={`${DATA.name}`} src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback className="rounded-none">{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>

            {/* Description Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-8">
              <BlurFadeText
                className="text-muted-foreground max-w-[450px] text-base sm:text-lg leading-relaxed font-medium"
                delay={BLUR_FADE_DELAY * 4}
                text={DATA.description}
              />
            </div>
          </div>

        </div>
      </section>
      <div className="flex flex-col gap-20">
        {orderedSections.map((key) => (
          <React.Fragment key={key}>
            {sectionComponents[key]}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
