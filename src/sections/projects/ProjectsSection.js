import Grid from "@/components/ui/Grid";
import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import PROJECTS from "@/data/projectsData";
import Section from "@/components/ui/Section";
import { PROJECTS_CONTENT } from "@/data/content";

const ProjectsSection = () => {
  return (
    <Section id="projects" className="text-white text-center gap-6">
      <Text title gradient>
        {PROJECTS_CONTENT.TITLE}
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
