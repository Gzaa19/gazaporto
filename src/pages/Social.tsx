import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { SiGithub, SiLinkedin, SiInstagram, SiDiscord, SiSpotify } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    platform: "GitHub",
    handle: "@Gzaa19",
    url: "https://github.com/Gzaa19",
    icon: SiGithub,
    description: "Check out my open source projects and contributions",
    color: "#181717",
  },
  {
    platform: "LinkedIn",
    handle: "Gaza Al Ghozali",
    url: "https://www.linkedin.com/in/gaza-al-ghozali-a29754288/",
    icon: SiLinkedin,
    description: "Connect with me professionally",
    color: "#0A66C2",
  },
  {
    platform: "Email",
    handle: "gaza0alghozali@gmail.com",
    url: "mailto:gaza0alghozali@gmail.com",
    icon: MdEmail,
    description: "Get in touch via email",
    color: "#EA4335",
  },
  {
    platform: "Instagram",
    handle: "gazaa_chansa",
    url: "https://www.instagram.com/gazaa_chansaa/",
    icon: SiInstagram,
    description: "Visit my personal Instagram profile",
    color: "#E4405F",
  },
  {
    platform: "Discord",
    handle: "aizen.19",
    url: "https://discord.com/User/642391799259987969",
    icon: SiDiscord,
    description: "Join me on Discord",
    color: "#5865F2",
  },
  {
    platform: "Spotify",
    handle: "Gaza Al Ghozali",
    url: "https://spotify.app.link/?product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Fuser%2F31hcittlk3d46bettzdjzrrt4r3e%3Fsi%3D3ABwUrqQQi-z-iOzRYFmSA%26fbclid%3DPAZXh0bgNhZW0CMTEAAadKNAfXM3uIpLfLaMrGa-oU5_O5eC1X-0TTxZFQLX7bfLRAcOEEMWLsuYOK4w_aem_MGtCy8ebwp6IpDjoGRQ5FA&%24fallback_url=https%3A%2F%2Fopen.spotify.com%2Fuser%2F31hcittlk3d46bettzdjzrrt4r3e%3Fsi%3D3ABwUrqQQi-z-iOzRYFmSA%26fbclid%3DPAZXh0bgNhZW0CMTEAAadKNAfXM3uIpLfLaMrGa-oU5_O5eC1X-0TTxZFQLX7bfLRAcOEEMWLsuYOK4w_aem_MGtCy8ebwp6IpDjoGRQ5FA%26nd%3D1&%24android_redirect_timeout=3000&feature=organic&fbclid=PARlRTSANsY7lleHRuA2FlbQIxMQABp0o0B9cze4ikt8toysZr6hTn87l4LVf7RNPFkVAtftt8tEBw4QQxYuy5g4rj_aem_MGtCy8ebwp6IpDjoGRQ5FA",
    icon: SiSpotify,
    description: "Listen to my Spotify playlists",
    color: "#1DB954",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const Social = () => {
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
            Let's Connect
          </h1>
          <p className="text-lg text-muted-foreground">
            Find me on these platforms and let's collaborate!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-6"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ x: 10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="rounded-xl p-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${social.color}20` }}
                >
                  <social.icon className="w-6 h-6" style={{ color: social.color }} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{social.platform}</h3>
                  <p className="text-primary font-medium mb-2">{social.handle}</p>
                  <p className="text-sm text-muted-foreground mb-4">{social.description}</p>
                  
                  <Button size="sm" variant="outline" className="gap-2">
                    Visit Profile
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      →
                    </motion.span>
                  </Button>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Social;
