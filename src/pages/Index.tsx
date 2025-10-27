import { PageTransition } from "@/components/PageTransition";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Education } from "@/components/Education";
import { WorkExperience } from "@/components/WorkExperience";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <About />
        <TechStack />
        <div className="grid md:grid-cols-2 gap-12">
          <Education />
          <WorkExperience />
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
