import {PhoneCall, Globe, Mail} from "lucide-react";
import Image from "next/image";

import profileImage from "../../public/images/profile-picture.png";
import linkedinIcon from "../../public/icons/linkedin-app-white-icon.svg";
import githubIcon from "../../public/icons/icons8-github.svg";
import {jobs, skills, socialMedia, studies} from "../data/data";
import DaneIcon from "../../public/icons/dane-icon.svg";
import UnalIcon from "../../public/icons/Logotipo_de_la_Universidad_Nacional_de_Colombia.svg";

export default function Home() {
  return (
    <div className="text-white">
      <main className="w-full">
        <section className="bg-[#004581] w-full flex flex-col items-center">
          <div className="w-3/4 max-w-screen-md pt-20 pb-5">
            <div className="w-full flex">
              <div className="w-full flex flex-col">
                <h1 className="text-4xl font-bold">
                  Hi, I&apos;m <p className="text-[#facc15]">Camilo</p>
                  <br />a Frontend Developer
                </h1>
                <div className="my-2 flex gap-2 items-center">
                  <Globe />
                  <p className="text-sm">Bogotá, Colombia</p>
                </div>

                <p className="my-10">
                  [Here comes some text introducing yourself (brief)].Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
                  repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
                  sed odit fugiat iusto fuga praesentium optio, eaque rerum!{" "}
                </p>
                <div>
                  <h2 className="font-bold text-lg text-[#facc15]">Skillset</h2>
                  <ul className="flex gap-1 flex-wrap w-full">
                    {skills.map((skill, index) => (
                      <li key={index}>
                        <span className="inline-flex items-center rounded-full bg-gray-600 px-3 py-1 text-xs font-bold text-white ring-1 ring-inset ring-blue-700/10">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Image
                alt="foto-perfil"
                className="profile--photo h-full w-full self-center"
                height={100}
                src={profileImage}
                width={300}
              />
            </div>

            <ul className="flex justify-around px-5 w-full items-center py-10">
              <li className="flex gap-2">
                <Mail />
                <span className="inline-flex items-center text-sm">
                  {socialMedia.email.content}
                </span>
              </li>

              <li className="flex gap-2">
                <PhoneCall />
                <span className="inline-flex items-center text-sm">
                  {socialMedia.phone.content}
                </span>
              </li>

              <li className="flex gap-2">
                <Image alt="linkedin-icon" height={24} src={linkedinIcon} width={24} />
                <a href={socialMedia.linkedin.link} rel="noreferrer" target="_blank">
                  <span className="inline-flex items-center text-sm">
                    {socialMedia.linkedin.content}
                  </span>
                </a>
              </li>

              <li className="flex gap-2">
                <Image alt="linkedin-icon" height={24} src={githubIcon} width={24} />
                <a href={socialMedia.github.link} rel="noreferrer" target="_blank">
                  <span className="inline-flex items-center text-sm">
                    {socialMedia.github.content}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="projects--container w-full flex justify-center">
          <div className="flex flex-col justify-center items-center w-3/4 max-w-screen-lg py-10 gap-5">
            <h2 className="text-4xl font-bold text-gray-700 bg-gray-300/50 backdrop-blur-sm py-1 px-3 rounded-md">
              The best of my work
            </h2>
            <div className="flex gap-5 flex-wrap justify-center items-center">
              <div className="w-[300px] h-[400px] bg-black" />
              <div className="w-[300px] h-[400px] bg-black" />
              <div className="w-[300px] h-[400px] bg-black" />
            </div>
          </div>
        </section>

        <section className="w-full flex">
          <div className="w-1/2 bg-[#dde8f0] py-10 pl-20 pr-10 text-gray-700">
            <h2 className="text-4xl font-bold self-start mb-5">My background</h2>
            <ul className="flex gap-3 flex-col">
              {jobs.map((job, index) => (
                <li key={index}>
                  <div className="flex gap-5">
                    <Image alt="dane-icon" height={50} src={DaneIcon} width={100} />

                    <div>
                      <h4 className="font-bold text-xl">{job.position}</h4>
                      <h4 className="">
                        {job.company}
                        <br />({job.type})
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {job.startDate} - {job.endDate} ({job.duration})<br />
                        {job.location}
                      </p>
                      <ul className="flex gap-1 flex-wrap w-full">
                        {job.skills.map((skill, index) => (
                          <li key={index}>
                            <span className="inline-flex items-center rounded-full bg-gray-600 px-3 py-1 text-xs font-bold text-white ring-1 ring-inset ring-blue-700/10">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-1/2 bg-[#97cbdc] py-10 pr-20 pl-10 text-gray-700">
            <h2 className="text-4xl font-bold self-start mb-5">Studies</h2>
            <ul className="flex gap-3 flex-col">
              {studies.map((study, index) => (
                <li key={index}>
                  <div className="flex gap-5">
                    <Image alt="dane-icon" height={50} src={UnalIcon} width={100} />

                    <div>
                      <h4 className="font-bold text-xl">{study.institution}</h4>
                      <h4 className="">{study.degreeTitle}</h4>
                      <p className="text-gray-500 text-sm">
                        {study.dates}
                        <br />
                        {study.location}
                      </p>
                      {/* <ul className="flex gap-1 flex-wrap w-full">
                        { study.skills.map((skill, index) => (
                          <li key={index}>
                            <span className="inline-flex items-center rounded-full bg-gray-600 px-3 py-1 text-xs font-bold text-white ring-1 ring-inset ring-blue-700/10">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="w-full h-[400px] bg-[#018abd]">
          <h2 className="text-4xl font-bold self-start">Reach me out</h2>
        </section>
      </main>

      <footer>
        <p className="bg-blue-600">Here comes the footer</p>
      </footer>
    </div>
  );
}
