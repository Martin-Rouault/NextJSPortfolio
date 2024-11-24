import Header from "@/components/component/lab/header";
import labData from "@/app/locales/lab.json";
import { LabCard } from "../ui/block/labCard";

export default function Page() {
  const labs = labData;

  return (
    <>
      <div className="animate-fade-in-down">
        <Header />
        <LabCard labs={labs} />
      </div>
    </>
  );
}
