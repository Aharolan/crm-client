import SafeRouting from "../../../components/safeRouting";
import InterviewsList from "@/components/graduates/InterviewsList";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <SafeRouting>
      <InterviewsList id={params.id} />
    </SafeRouting>
  );
}
