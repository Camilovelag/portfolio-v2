import {PhoneCall, Globe, Mail} from "lucide-react";
import Image from "next/image";

import {jobs, skills, socialMedia, studies} from "../data/data";

import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="text-white">
      <main className="w-full">
        <section className="bg-[#004581] w-full flex flex-col items-center">
          <div className="w-3/4 max-w-screen-md pt-16 pb-5">
            <div className="w-full flex">
              <div className="w-full flex flex-col">
                <h1 className="text-4xl font-bold">
                  {`Hi, I'm `}
                  <strong className="text-[#facc15]">Camilo</strong>
                  <br />
                  {" a Frontend Developer"}
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
                className="profile--photo h-full w-full self-center aspect-[292/343]"
                height={100}
                src="/images/profile-picture.png"
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
                <Image
                  alt="linkedin-icon"
                  height={24}
                  src="/icons/linkedin-app-white-icon.svg"
                  width={24}
                />
                <a href={socialMedia.linkedin.link} rel="noreferrer" target="_blank">
                  <span className="inline-flex items-center text-sm">
                    {socialMedia.linkedin.content}
                  </span>
                </a>
              </li>

              <li className="flex gap-2">
                <Image alt="github-icon" height={24} src="/icons/icons8-github.svg" width={24} />
                <a href={socialMedia.github.link} rel="noreferrer" target="_blank">
                  <span className="inline-flex items-center text-sm">
                    {socialMedia.github.content}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="projects--container w-full flex justify-center relative isolate">
          <Image
            unoptimized
            alt="dane-icon"
            className="w-full h-full absolute opacity-50"
            height={50}
            src="/images/howls-castle.gif"
            width={100}
          />

          <div className="flex flex-col justify-center items-center w-full max-w-screen-xl py-10 gap-5 z-10">
            <h2 className="text-4xl font-bold text-gray-700">The best of my work</h2>
            <Projects />
            {/* <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Watch more projects...
            </button> */}
          </div>
        </section>

        <section className="w-full flex">
          <div className="w-1/2 bg-[#018abd] py-10 pl-20 pr-10">
            <h2 className="text-4xl font-bold self-start mb-5">My background</h2>
            <ul className="flex gap-3 flex-col">
              {jobs.map((job, index) => (
                <li key={index}>
                  <div className="flex gap-5">
                    <Image alt="dane-icon" height={60} src={job.companyLogo} width={80} />

                    <div>
                      <h4 className="font-bold text-xl">{job.position}</h4>
                      <h4 className="italic">
                        {job.company}
                        <br />({job.type})
                      </h4>
                      <p className="text-sm">
                        {job.startDate} - {job.endDate} ({job.duration})<br />
                        {job.location}
                      </p>
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
                    <Image alt="dane-icon" height={60} src={study.institutionLogo} width={80} />

                    <div>
                      <h4 className="font-bold text-xl">{study.institution}</h4>
                      <h4 className="">{study.degreeTitle}</h4>
                      <p className="text-gray-800 text-sm">
                        {study.dates}
                        <br />
                        {study.location}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#dde8f0] text-gray-800 w-full flex flex-col items-center">
          <div className="w-3/4 max-w-screen-md pt-16 pb-5">
            <h2 className="text-4xl font-bold text-center">Did you love what you saw???</h2>
            <p className="text-center text-xl">I have a last message for you.</p>
            <div className="flex pt-5 pb-16">
              <iframe
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-2/3"
                frameBorder="0"
                height="315"
                referrerPolicy="strict-origin-when-cross-origin"
                src="https://www.youtube.com/embed/1_O_T6Aq85E?si=RLrs1mMrvmJonQBS"
                title="YouTube video player"
                width="560"
              />
              <ul className="flex justify-center gap-3 px-5 w-1/3 items-start py-10 flex-col">
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
                  <Image
                    alt="linkedin-icon"
                    height={24}
                    src="/icons/linkedin-app-white-icon.svg"
                    width={24}
                  />
                  <a href={socialMedia.linkedin.link} rel="noreferrer" target="_blank">
                    <span className="inline-flex items-center text-sm">
                      {socialMedia.linkedin.content}
                    </span>
                  </a>
                </li>

                <li className="flex gap-2">
                  <Image alt="github-icon" height={24} src="/icons/icons8-github.svg" width={24} />
                  <a href={socialMedia.github.link} rel="noreferrer" target="_blank">
                    <span className="inline-flex items-center text-sm">
                      {socialMedia.github.content}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p className="bg-blue-600">Here comes the footer</p>
      </footer>
    </div>
  );
}
