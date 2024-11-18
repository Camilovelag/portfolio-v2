import Image from "next/image";

import DaneIcon from "../../public/icons/linkedin-app-white-icon.svg";

export interface job {
  position: "string";
  company: "string";
  type: "string";
  startDate: "string";
  endDate: "string";
  duration: "string";
  location: "string";
}

const Job = () => {
  // console.log(position);

  // let [position] = props.position;

  return (
    <li>
      <div className="flex gap-5">
        <Image alt="dane-icon" height={50} src={DaneIcon} width={50} />

        <div>
          {/* <h4 className="font-bold text-lg">{position}</h4>
          <h4 className="">
            {props.company} ({props.type})
          </h4>
          <p className="text-gray-500 text-sm">
            {props.startDate} - {props.endDate} ({props.duration})
          </p>
          <p className="text-gray-500 text-sm">{props.location}</p> */}
        </div>
      </div>
    </li>
  );
};

export default Job;
