'use client'
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
import { reportData } from "@/db";
import EmptyReport from '@/assets/images/empty-reports.svg'
import NoReportBg from '@/assets/images/no-reports-background.webp'
import { useRouter } from "next/navigation";
import { Timeline } from "react-daisyui";

const PatientProfile = () => {
  const router = useRouter()
  const authContext = useContext(AuthContext)
  useEffect(() => {
    !authContext?.user && router.push('/patient-login')
  }, [])
  const data = reportData.filter(report => (report.phone == authContext?.user?.phoneNumber))
  return (
    data.length ? <div className="py-8 px-6 sm:px-8">
      <div className="flex space-between my-12 mx-auto max-w-[1360px]">
        {/* <div className="bg-dawn-pink w-2/5 rounded-xl"></div> */}
        <div className="w-full">
          <h1 className="text-xl font-semibold pb-2 text-blue-900 text-end mr-2">
            Patient Profile
          </h1>
          <div className="w-full bg-gray-100 rounded-2xl border-[1px] shadow-md shadowgraye-100 p-5 grid grid-cols-4">
            <div className="flex gap-5">
              <Image
                width={1000}
                height={1000}
                src={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                className="w-[10rem] rounded-lg"
                alt="profile"
              />
              <div className="pt-2 text-slate-800">
                <h3 className="text-lg font-bold text-slate-600 mb-2">
                  {data[0].name}
                </h3>
                <div className="flex gap-1 items-center">
                  <FaPhone className="text-slate-700" />
                  <span>{data[0].phone}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <FaEnvelope className="text-slate-700" />
                  <span>{data[0].email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-[1360px] mx-auto justify-center lg:justify-start">
        <Timeline className="w-fit" vertical>
          {data[0].reports.map((report, idx) => (
            // logic for vertical timeline connecting line, keywords ['start', 'end', 'both']
            <Timeline.Item key={idx} connect={idx === 0 ? 'end' : (data[0].reports.length - 1) == idx ? 'start' : 'both'}>
              <Timeline.Start>{report.reportOn}</Timeline.Start>
              <Timeline.Middle />
              <Timeline.End>{report.testName}</Timeline.End>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>

    </div>
      : <div
        className="bg-[#000e] bg-cover bg-blend-darken bg-no-repeat"
        style={{ backgroundImage: `url('${NoReportBg.src}')` }}>
        <div className="max-w-[1360px] mx-auto text-center min-h-[calc(100vh-85px)] flex justify-center items-center gap-[5vw] flex-col lg:flex-row px-8">
          <Image alt="empty file" src={EmptyReport} className="w-1/3 lg:w-1/4 opacity-[.85]" />
          <p className="text-xl lg:text-2xl text-dawn-pink lg:w-1/2 font-medium">
            SORRY no reports associated with this phone number,
            try signing in with the Lab/hospital registered mobile number.
          </p>
        </div>
      </div>
  );
};

export default PatientProfile;
