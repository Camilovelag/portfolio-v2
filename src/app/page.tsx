import { PhoneCall, Globe, Mail } from 'lucide-react';
import Image from "next/image";
import profileImage from "../../public/images/1.jpg";
import linkedinIcon from "../../public/icons/linkedin-app-white-icon.svg"
import githubIcon from "../../public/icons/icons8-github.svg"
import {skills, socialMedia} from "../../data/data";

export default function Home() {

  console.log(skills);

  return (
    <div className="bg-[#1a1e36] text-white flex flex-col items-center">

      <main className="w-full flex flex-col items-center">
        <section className='w-3/4 max-w-screen-md py-20'>
          <div className="w-full flex relative">
            <div className="w-full flex flex-col">
              <h1 className="text-4xl font-bold">Hi, I&apos;m <text className='text-[#facc15]'>Camilo</text><br />a Frontend Developer</h1>
              <div className='my-2 flex gap-2 items-center'>
                <Globe />
                <p className="text-sm">Bogotá, Colombia</p>
              </div>

              <p className="my-10">[Here comes some text introducing yourself (brief)].Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! </p>
              <div>
                <h2 className="font-bold text-lg text-[#facc15]">Skillset</h2>
                <ul className="flex gap-1 flex-wrap w-full">
                  { skills.map((skill, index) => (
                    <li key={index}>
                      <span className="inline-flex items-center rounded-full bg-gray-700 px-3 py-1 text-xs font-bold text-white ring-1 ring-inset ring-blue-700/10">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            <Image src={profileImage} alt="foto-perfil" width={300} height={100} className="profile--photo h-full" />

          </div>

          <ul className="flex justify-around px-5 w-full items-center py-10">
              <li className='flex gap-2'>
                <Mail />
                <span className="inline-flex items-center text-sm">{socialMedia.email.content}</span>
              </li>

              <li className='flex gap-2'>
                <PhoneCall />
                <span className="inline-flex items-center text-sm">{socialMedia.phone.content}</span>
              </li>

              <li className='flex gap-2'>
                <Image src={linkedinIcon} alt="linkedin-icon" width={24} height={24} />
                <a href={socialMedia.linkedin.link} target='_blank'>
                  <span className="inline-flex items-center text-sm">{socialMedia.linkedin.content}</span>
                </a>
              </li>

              <li className='flex gap-2'>
                <Image src={githubIcon} alt="linkedin-icon" width={24} height={24} />
                <a href={socialMedia.github.link} target='_blank'>
                  <span className="inline-flex items-center text-sm">{socialMedia.github.content}</span>
                </a>
              </li>
          </ul>

        </section>

        <section className='projects--container w-full flex justify-center'>
          <div className='flex flex-col justify-center items-center w-3/4 max-w-screen-md py-10 bg-gray-600/50 gap-5'>
            <h2 className='text-4xl font-bold self-start'>The best of my work</h2>
            <div className='flex gap-x-5'>
              <div className='w-96 h-[200px] bg-black'></div>
              <div className='w-96 h-[200px] bg-black'></div>
              <div className='w-96 h-[200px] bg-black'></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Here comes the footer</p>
      </footer>

    </div>
  );
}
