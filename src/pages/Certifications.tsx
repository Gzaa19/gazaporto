import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";
import workerSrc from "pdfjs-dist/build/pdf.worker.min?url";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

// Disusun dari isi folder public/certification
const asahFiles = [
  "Belajar Dasar Git dengan GitHub.pdf",
  "Belajar Dasar Pemrograman JavaScript.pdf",
  "Belajar Dasar Pemrograman Web.pdf",
  "Belajar Membuat Aplikasi Web dengan React.pdf",
  "Belajar Membuat Front-End Web untuk Pemula.pdf",
  "Memulai Dasar Pemrograman untuk Menjadi Pengembang.pdf",
  "Pengenalan ke Logika Pemrograman (Programming Logic 101).pdf",
];

const courseraFiles = [
  "API's.pdf",
  "Advanced React.pdf",
  "Database for Back End Development.pdf",
  "Django web Framework.pdf",
  "Front End Dev.pdf",
  "HTML and CSS in depth.pdf",
  "Meta Fullstack.pdf",
  "Programming in Python.pdf",
  "Programming with Javascript.pdf",
  "React Basics.pdf",
  "Version Control.pdf",
];

const buildCerts = (folder: string, files: string[], issuer: string) =>
  files.map((f) => ({
    title: f.replace(/\.pdf$/i, ""),
    issuer,
    pdfUrl: `/certification/${folder}/${encodeURIComponent(f)}`,
  }));

const certifications = [
  ...buildCerts("Asah Cohort Dicoding", asahFiles, "Asah Cohort Dicoding"),
  ...buildCerts("Coursera", courseraFiles, "Coursera"),
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

const Certifications = () => {
  const [thumbs, setThumbs] = useState<Record<string, string>>({});

  // Set worker untuk pdf.js (Vite mendukung import ?url)
  GlobalWorkerOptions.workerSrc = workerSrc;

  useEffect(() => {
    let canceled = false;
    const loadThumbnails = async () => {
      const entries: Array<[string, string]> = [];
      for (const cert of certifications) {
        try {
          const task = getDocument(cert.pdfUrl);
          const pdf = await task.promise;
          const page = await pdf.getPage(1);
          const scale = 0.6; // ukuran thumbnail
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) continue;
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          await page.render({ canvasContext: ctx, viewport, canvas }).promise;
          const url = canvas.toDataURL("image/png");
          entries.push([cert.title, url]);
        } catch (e) {
          entries.push([cert.title, ""]);
        }
      }
      if (!canceled) setThumbs(Object.fromEntries(entries));
    };
    loadThumbnails();
    return () => {
      canceled = true;
    };
  }, []);
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
            Certifications
          </h1>
          <p className="text-lg text-muted-foreground">
            Professional certifications and achievements
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-elegant hover:shadow-glow transition-shadow duration-300"
            >
              <div className="relative h-44 overflow-hidden bg-gradient-primary/10">
                <img
                  src={thumbs[cert.title] || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-70 select-none pointer-events-none"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-3">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{cert.title}</h3>
                <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                {/* Tanggal terdapat pada PDF masing-masing */}
                
                <Button size="sm" className="gap-2 w-full" variant="outline" onClick={() => window.open(cert.pdfUrl, '_blank')}>
                  <ExternalLink className="w-4 h-4" />
                  View Credential
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Certifications;
