import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/projects-list";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import { ProjectsPageData } from "../types/page-info";

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
  query ProjectsQuery {
    projects {
      shortDescription
      slug
      title
      thumbnail {
        url
      }
      technologies {
        name
      }
    }
  }
  `;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 24 hours
  );
};

export default async function Projects() {
  const { projects } = await getPageData();

  return (
    <div>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </div>
  );
}
