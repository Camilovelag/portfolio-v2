import Image from "next/image";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const skills = ["JavaScript", "TypeScript", "Responsive Design", "NextJs", "Joomla"];

const Projects = () => {
  return (
    <div className="flex gap-10 flex-wrap justify-center items-center">
      {[1, 2, 3].map((item) => (
        <Card key={item} className="w-[400px] h-[500px] overflow-hidden relative">
          <Image
            alt="foto-perfil"
            className="w-full aspect-[10/7] object-cover h-full"
            height={100}
            src="/images/project-1.jpg"
            width={100}
          />
          <div className="absolute bottom-0 backdrop-blur-sm py-2 px-5 bg-gray-500/50 text-white rounded-sm">
            <CardHeader className="p-0 flex flex-row items-center justify-between gap-2 ">
              <CardTitle>Wayuu Information System: Landing Page</CardTitle>
              <CardDescription className="text-white">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Published
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-800">App for DANE</p>
              <ul className="flex gap-1 flex-wrap w-full">
                {skills.map((skill, index) => (
                  <li key={index}>
                    <span className="inline-flex items-center rounded-full bg-gray-600 px-3 py-1 text-xs font-bold text-white ring-1 ring-inset ring-blue-700/10">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
