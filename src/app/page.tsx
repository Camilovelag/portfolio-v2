import { PhoneCall, Globe } from 'lucide-react';
import Image from "next/image";
import profileImage from "../../public/images/1.jpg";
import {skills, socialMedia} from "../../data/data";

export default function Home() {

  console.log(skills);

  return (
    <div className="bg-black text-white flex flex-col items-center">

      <main className="w-3/4 max-w-screen-md py-20">
        <section>
          <div className="w-full flex relative">
            <div className="w-2/3 flex flex-col z-1">
              <h1 className="text-4xl font-bold">Hi, I'm <text className='text-[#facc15]'>Camilo</text><br />a Frontend Developer</h1>
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
                    <li>
                      <span className="inline-flex items-center rounded-full bg-gray-700 px-3 py-1 text-xs font-bold text-white ring-1 ring-inset ring-blue-700/10">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            <Image src={profileImage} alt="foto-perfil" width={300} height={100} className="profile--photo h-full object-contain absolute right-0" />

          </div>
          <ul className="flex justify-around px-5 w-full items-center py-10">
                  { socialMedia.map((item, index) => (
                    <li className='flex gap-2'>
                      {/* <span className="inline-flex items-center bg-gray-900 rounded-full px-5 py-3 text-xs font-bold text-white ring-1 ring-inset ring-gray-500">
                        {item.content}
                      </span> */}
                      <PhoneCall />
                      <span className="inline-flex items-center text-sm">
                        {item.content}
                      </span>
                    </li>
                  ))}
                </ul>
        </section>
      </main>

      <footer>
        <p>Here comes the footer</p>
      </footer>

    </div>
  );
}
