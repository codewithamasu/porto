import BlurFade from "@/components/magicui/blur-fade";
import { ChevronRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.02;

interface Post {
  id: string;
  title: string;
  publishedAt: string;
}

interface Pagination {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface BlogListProps {
  posts: Post[];
  allPostsCount: number;
  pagination: Pagination;
  pageSize: number;
}

export default function BlogList({ posts, allPostsCount, pagination, pageSize }: BlogListProps) {
  return (
    <section id="blog" className="flex flex-col gap-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            <span>Logbook</span>
            <span className="opacity-30">•</span>
            <span>{allPostsCount} entries recorded</span>
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
            Archive
          </h1>
        </div>
      </BlurFade>

      {posts.length > 0 ? (
        <div className="flex flex-col">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col divide-y divide-border/40">
              {posts.map((post, id) => {
                const indexNumber = (pagination.page - 1) * pageSize + id + 1;
                return (
                  <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={post.id}>
                    <a
                      className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-8 gap-4 focus-visible:outline-none"
                      href={`/blog/${post.id}`}
                    >
                      <div className="flex items-start gap-4 sm:gap-8 flex-1">
                        <span className="text-2xl sm:text-3xl font-mono text-muted-foreground/20 group-hover:text-primary/40 transition-colors duration-500 tabular-nums mt-1">
                          {String(indexNumber).padStart(2, "0")}
                        </span>
                        <div className="flex flex-col gap-1 flex-1">
                          <h2 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                            {post.title}
                            <ChevronRight
                              className="size-5 text-primary opacity-0 -translate-x-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0"
                              aria-hidden
                            />
                          </h2>
                          <div className="sm:hidden font-mono text-[10px] uppercase tracking-wider text-muted-foreground/50">
                            {post.publishedAt}
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:block font-mono text-xs uppercase tracking-widest text-muted-foreground/40 group-hover:text-muted-foreground transition-colors duration-500">
                        {post.publishedAt}
                      </div>
                      
                      {/* Hover Backdrop */}
                      <div className="absolute inset-x-[-1.5rem] inset-y-0 bg-muted/0 group-hover:bg-muted/30 -z-10 transition-colors duration-500 rounded-2xl" />
                    </a>
                  </BlurFade>
                );
              })}
            </div>
          </BlurFade>

          {pagination.totalPages > 1 && (
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex gap-4 items-center justify-between mt-12 pt-8 border-t border-border/40">
                <div className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground/50">
                  Page {pagination.page} / {pagination.totalPages}
                </div>
                <div className="flex gap-2">
                  {pagination.hasPreviousPage ? (
                    <a
                      href={`/blog?page=${pagination.page - 1}`}
                      className="h-9 px-4 flex items-center justify-center text-[10px] uppercase tracking-widest font-bold border border-border/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Prev
                    </a>
                  ) : (
                    <span className="h-9 px-4 flex items-center justify-center text-[10px] uppercase tracking-widest font-bold border border-border/20 rounded-full opacity-30 cursor-not-allowed">
                      Prev
                    </span>
                  )}
                  {pagination.hasNextPage ? (
                    <a
                      href={`/blog?page=${pagination.page + 1}`}
                      className="h-9 px-4 flex items-center justify-center text-[10px] uppercase tracking-widest font-bold border border-border/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Next
                    </a>
                  ) : (
                    <span className="h-9 px-4 flex items-center justify-center text-[10px] uppercase tracking-widest font-bold border border-border/20 rounded-full opacity-30 cursor-not-allowed">
                      Next
                    </span>
                  )}
                </div>
              </div>
            </BlurFade>
          )}
        </div>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-20 px-4 border border-dashed border-border/50 rounded-3xl bg-muted/10">
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest text-center">
              The archive is currently empty.
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
