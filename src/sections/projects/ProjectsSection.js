import Grid from "@/components/ui/Grid";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import PROJECTS from "@/configs/projectsData";
import Text from "@/components/ui/Text";

const ProjectsSection = () => {
  return (
    <Section id="projects" className="text-white text-center gap-6">
      <Text title gradient>
        Things I’ve Built
      </Text>
      <Grid>
        {PROJECTS.map((project, idx) => (
          <Card key={idx} {...project} />
        ))}
      </Grid>
    </Section>
  );
};

export default ProjectsSection;
