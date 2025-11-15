import ProjectDetailClient from "@/components/ProjectDetailClient";
import { projects } from "@/lib/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="bg-[#182449] min-h-screen flex items-center justify-center text-white text-xl">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="bg-[#182449]">
      <ProjectDetailClient project={project} />
    </div>
  );
}
