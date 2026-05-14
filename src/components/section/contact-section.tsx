import { DATA } from "@/data/resume";
import { Send } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="relative flex flex-col items-center gap-4 text-center py-10 px-6 border border-border/50 rounded-3xl bg-muted/20">
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {DATA.sections.contact.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance mb-4">
          {DATA.sections.contact.text}
        </p>
        <a
          href={DATA.contact.social.email.url}
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-primary/20 active:scale-95"
        >
          <span className="transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0 text-lg">
            Say Hello
          </span>
          <span className="absolute flex items-center justify-center translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-lg">
            <Send className="mr-2 size-5 -mt-0.5 group-hover:animate-pulse" /> Send Message
          </span>
        </a>
      </div>
    </div>
  );
}

