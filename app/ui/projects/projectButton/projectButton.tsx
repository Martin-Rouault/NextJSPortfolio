"use client";
import { useRouter } from "next/navigation";

export default function ProjectButton({ id, project_name }: { id: string, project_name: string}) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/projects/${id}`);
    };
  return <button className="no-underline hover:underline hover:underline-offset-2" onClick={handleClick}><p className="text-[17px] font-medium">{project_name}</p></button>;
}
