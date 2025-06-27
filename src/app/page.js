import Container from "@/components/ui/Container";
import HeroSection from "@/sections/hero/HeroSection";
import SkillsSections from "@/sections/skills/SkillsSections";
import ProjectsSections from "@/sections/projects/ProjectsSection";
import ContactSection from "@/sections/contact/ContactSection";

const App = () => {
  return (
    <Container className="relative text-white min-h-screen flex flex-col justify-center items-center pt-60 lg:pt-20">
      <HeroSection />
      <SkillsSections />
      <ProjectsSections />
      <ContactSection />
    </Container>
  );
};

export default App;
