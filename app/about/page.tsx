import InfoCard from "@/components/InfoCard";
import BgImage from "@/assets/images/about-bg.webp";

const AboutPage = () => {
  return (
    <div className="bg-dawn-pink">
      <div
        style={{ backgroundImage: `url('${BgImage.src}')` }}
        className="bg-center bg-[#000d] bg-blend-darken min-h-[65vh] flex justify-center items-center"
      >
        <div className="mx-auto text-center max-w-5xl px-8 py-12">
          <h1 className="text-2xl lg:text-[1.65rem] text-dawn-pink font-semibold mb-2">
            About Us
          </h1>
          <h4 className="text-[1.12rem] lg:text-2xl text-slate-300 py-5 lg:py-12 font-thin text-pretty">
            <span className="inline-block font-semibold text-dawn-pink">
              onlinelabreports.com &nbsp;
            </span>
            is a comprehensive platform designed to empower patients, doctors,
            and laboratories with efficient and secure access to vital health
            information. Developed by
            <span className="text-dawn-pink font-medium"> Syscon Infotech</span>
            , the creators of the innovative&nbsp;
            <span className="text-dawn-pink font-medium">SOLAR-LIMS </span>
            laboratory management system, this portal seamlessly integrates with
            existing workflows to provide an exceptional user experience
          </h4>
        </div>
      </div>
      <h2 className="text-[1.1rem] lg:text-2xl text-center w-4/5 lg:w-3/5 mx-auto font-medium mt-16">
        How a Patient, Doctor or Laboratory can benefit from
        onlinelabreports.com and its Services
      </h2>
      <div className="grid lg:grid-cols-3 mx-auto max-w-[82rem] sm:px-8 mt-6 sm:mt-12 px-4 gap-5 lg:gap-8 pb-12">
        <InfoCard
          bg={"bg-blue-900"}
          contentArr={[
            {
              title: "Securely access your lab reports online",
              sub: "View your latest and historical lab results anytime, anywhere, from any device",
            },
            {
              title: "Maintain your health data in one place",
              sub: "Easily track and manage your health information, including past results, medications, and allergies",
            },
            {
              title: "Visualize trends and insights",
              sub: "Gain valuable insights into your health by seeing trends and patterns in your lab data over time",
            },
            {
              title: "Share reports with your doctor",
              sub: "Easily share your lab reports with your healthcare providers, simplifying communication and collaboration",
            },
          ]}
          title={"For Patients"}
        />
        <InfoCard
          bg={"bg-gray-900"}
          contentArr={[
            {
              title: "Efficiently access and review patient lab reports",
              sub: "Quickly view patient lab results within the platform, eliminating the need for paper copies or faxing",
            },
            {
              title: "Improve communication and collaboration",
              sub: "Securely share patient reports with other healthcare providers involved in patient care",
            },
            {
              title: "Gain deeper insights into patient health",
              sub: "Analyze trends and patterns in patient lab data to make informed healthcare decisions",
            },
          ]}
          title={"For Doctors"}
        />
        <InfoCard
          bg={"bg-indigo-900"}
          contentArr={[
            {
              title: "Streamlined reporting process",
              sub: " Upload lab reports directly to the online portal, reducing administrative burden and paper usage",
            },
            {
              title: "Enhanced patient engagement",
              sub: "Offer patients convenient access to their lab results, fostering trust and collaboration",
            },
            {
              title: "Improved data accessibility and security",
              sub: "Securely store and manage patient data in the cloud, ensuring easy access and compliance with regulation",
            },
          ]}
          title={"For Laboratories"}
        />
      </div>
    </div>
  );
};

export default AboutPage;
