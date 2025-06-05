import ConsultationComp from "@/components/ConsultationComp/ConsultationComp";
import TextOnlyComp from "@/components/TextOnlyComp/TextOnlyComp";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <ConsultationComp />
        <TextOnlyComp />
      </div>
    </>
  );
};

export default page;
