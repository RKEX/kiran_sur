import FeedBackComp from "@/components/FeedBackComp/FeedBackComp";
import SeoComp from "@/components/SeoComp/SeoComp";
import ServiceComp from "@/components/ServiceComp/ServiceComp";

const page = () => {
  return (
    <>
      <div className=" grid place-items-center">
        <SeoComp />
        <ServiceComp />
        {/*
        <FeedBackComp />
        <ConsultationComp />
        <CoursesComp />
        <TextOnlyComp />

        <FooterComp />
         */}
      </div>
    </>
  );
};

export default page;
