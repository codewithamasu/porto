import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.02;

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-3 items-center justify-center">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">{DATA.sections.projects.heading}</h2>
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-[600px]">
                        {DATA.sections.projects.text}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto w-full">
                    {DATA.projects.map((project, id) => {
                        // Bento Box Asymmetric Layout logic (for 4 items)
                        // 1st: col-span-2 (Large Featured)
                        // 2nd & 3rd: col-span-1 (Secondary)
                        // 4th: col-span-2 (Large Featured Alternative)
                        const bentoClass = 
                            id === 0 ? "md:col-span-2" :
                            id === 3 ? "md:col-span-2" :
                            "md:col-span-1";

                        return (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                                className={`h-full w-full ${bentoClass}`}
                            >
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    video={project.video}
                                    links={project.links}
                                />
                            </BlurFade>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

