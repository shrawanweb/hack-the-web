import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-7xl m-auto px-5 py-7">
        <div className="text-center md:w-200 m-auto  space-y-5 ">
          <h1 className="text-3xl md:text-4xl lg:text-4xl">Projects</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit
            obcaecati laboriosam non aliquid, minus omnis. Facilis velit sequi
            quaerat reiciendis possimus ullam, voluptas quisquam veniam hic
            dolores unde! A, dolorum quas?
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-4xl text-center md:mb-10">Technical members</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 lg:grid-cols-4 sm:space-y-10">
            <div className="w-60 border rounded-2xl p-5">
              <Image
                src={"/tech_member_1.avif"}
                height={100}
                width={100}
                alt="team member"
                className="w-full rounded mb-4"
              />
              <p>Akshay Kumar</p>
              <p>Frontend Developer</p>
            </div>
            <div className="w-60 border rounded-2xl p-5">
             <Image
                src={"/tech_member_1.avif"}
                height={100}
                width={100}
                alt="team member"
                className="w-full rounded mb-4"
              />
              <p>Akshay Kumar</p>
              <p>full-satck Developer</p>
            </div>
            <div className="w-60 border rounded-2xl p-5">
              <Image
                src={"/tech_member_1.avif"}
                height={100}
                width={100}
                alt="team member"
                className="w-full rounded mb-4"
              />
              <p>Akshay Kumar</p>
              <p>Backend Developer</p>
            </div>
            <div className="w-60 border rounded-2xl p-5">
             <Image
                src={"/tech_member_1.avif"}
                height={100}
                width={100}
                alt="team member"
                className="w-full rounded mb-4"
              />
              <p>Akshay Kumar</p>
              <p>DevOps engineer</p>
            </div>
          </div>
        </div>

        <h1 className="text-center text-4xl mt-5 mb-5">Projects by Students</h1>
        <div className="grid md:grid-cols-4">
          <div className="w-60 border rounded-2xl p-5">
             <Image
                src={"/AMS.avif"}
                height={100}
                width={100}
                alt="tech-project"
                className="w-full rounded mb-4"
              />
            <h2>Smart-attendence-system</h2>
            <a href="">
              githib:<span>http://Smart-attendence-system</span>
            </a>
          </div>
          <div className="w-60 border rounded-2xl p-5">
            <img src="" alt="ssss" />
            <h2>Smart-attendence-system</h2>
            <a href="">
              githib:<span>http://Smart-attendence-system</span>
            </a>
          </div>{" "}
          <div className="w-60 border rounded-2xl p-5">
            <img src="" alt="ssss" />
            <h2>Smart-attendence-system</h2>
            <a href="">
              githib:<span>http://Smart-attendence-system</span>
            </a>
          </div>{" "}
          <div className="w-60 border rounded-2xl p-5">
            <img src="" alt="ssss" />
            <h2>Smart-attendence-system</h2>
            <a href="">
              githib:<span>http://Smart-attendence-system</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
