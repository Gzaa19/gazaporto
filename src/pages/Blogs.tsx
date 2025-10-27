import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, BookOpen, ExternalLink } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const posts: Array<{
  id: number;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  cover: string;
  url: string;
}> = [];

const Blogs = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Blogs
          </h1>
          <p className="text-lg text-muted-foreground">
            Short articles, technical notes, and ideas.
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <div className="bg-card border border-border rounded-xl p-8 shadow-elegant">
            <h3 className="text-xl font-semibold mb-2 text-foreground">No blogs yet</h3>
            <p className="text-muted-foreground">Blog content will appear here.</p>
          </div>
        ) : (
          <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-elegant hover:shadow-glow transition-shadow duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-foreground flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button size="sm" className="gap-2 w-full" variant="outline" onClick={() => window.open(post.url, "_blank")}>
                  <ExternalLink className="w-4 h-4" />
                  Read More
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
        )}
      </div>
    </PageTransition>
  );
};

export default Blogs;