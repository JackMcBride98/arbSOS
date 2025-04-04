import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TreeSvg from "../public/images/TreeSvg.svg";
import Crosshair from "../public/images/Crosshair.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import background from "../public/images/background.webp";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as ga from "../lib/ga";
import { Accordion } from "../components/accordion";

const Home: NextPage = () => {
  const [openDropwdown, setOpenDropdown] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const res = await fetch("/api/contactForm", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      setSubmitMessage("Message sent successfully");
      setTimeout(() => setSubmitMessage(""), 3500);
      return;
    }
    setSubmitMessage("Message failed to send");
    setTimeout(() => setSubmitMessage(""), 3500);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => setOpenDropdown(false));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center bg-dull w-full">
      <Head>
        <title className="font-blackOps">ARBSOS</title>
        <meta
          name="description"
          content="Help for Arboricultural Contractors. Arboricultural consultancy based in Stroud, UK. Paul McBride is a qualified arboricultural consultant with a wide range of experience in the arb industry."
        />
        <link rel="icon" href="/images/TreeSvg.svg" />
      </Head>

      <header className="w-full flex px-2 justify-between bg-green max-w-screen fixed z-50">
        <div className="flex">
          <h1 className="text-4xl p-2 py-0 font-semibold flex items-center font-blackOps">
            ARBS <Crosshair className="w-14 h-14 -mx-3" />S
          </h1>
        </div>
        <DropdownMenu.Root
          modal={false}
          open={openDropwdown}
          onOpenChange={() => setOpenDropdown(!openDropwdown)}
        >
          <DropdownMenu.Trigger aria-label="Dropdown Menu">
            <HamburgerMenuIcon className="w-8 h-8" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            align="start"
            className="border-2 border-darkGreen font-medium lg:text-xl w-20 lg:w-28 rounded-md bg-green"
          >
            <DropdownMenu.Arrow
              className="fill-green w-6 h-4 -mt-1"
              offset={10}
            ></DropdownMenu.Arrow>
            <DropdownMenu.Item
              className="p-2 lg:px-4 hover:cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="p-2 lg:px-4 border-t-2 border-darkGreen hover:cursor-pointer"
              onClick={() => {
                if (aboutRef.current) {
                  window.scrollTo({
                    top: aboutRef.current.offsetTop - 60,
                    behavior: "smooth",
                  });
                }
              }}
            >
              About
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="p-2 lg:px-4 border-t-2 border-darkGreen hover:cursor-pointer"
              onClick={() => {
                if (servicesRef.current) {
                  window.scrollTo({
                    top: servicesRef.current.offsetTop - 50,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Services
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="p-2 lg:px-4 border-t-2 border-darkGreen hover:cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: 999999, behavior: "smooth" })
              }
            >
              Contact
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </header>

      <main className="w-full flex flex-col items-center">
        <div
          className="bg-cover bg-no-repeat bg-fixed bg-center w-full min-h-screen flex flex-col items-center space-y-24 py-24 "
          style={{ backgroundImage: `url(${background.src})` }}
        >
          <section className="bg-black/30 w-[90%] p-4 lg:w-3/4 z-10 border-2 border-darkGreen rounded-lg">
            <div className="flex flex-col w-full text-center space-y-2">
              <div className="flex items-center w-full justify-center flex-col">
                <p className="text-green text-6xl md:text-9xl text-center flex items-center -mb-6 md:-mb-12 font-blackOps">
                  ARB
                </p>
                <p className="text-green text-6xl md:text-9xl text-center flex items-center font-blackOps">
                  S
                  <Crosshair className="w-24 h-24 md:w-44 md:h-44 fill-green -mx-6 md:-mx-9" />
                  S
                </p>
              </div>
              <p className="bg-dull/90 mx-auto p-2 rounded-md z-50 text-black border-2 md:text-xl border-darkGreen text-left font-medium">
                Help for Arboricultural Contractors.
                <br />
                Offering services in training, tree work, assesments and
                consultancy.
              </p>
              <div>
                <Image
                  src="/images/lantra-transparent.webp"
                  alt="Lantra"
                  width={200}
                  height={200}
                  layout="fixed"
                />
              </div>
            </div>
          </section>
          <section
            ref={aboutRef}
            className="z-10 bg-dull w-full p-4 md:px-16 md:w-[90%] lg:w-3/4 md:rounded-md md:border-2 border-darkGreen flex flex-col md:flex-row md:space-x-8 justify-center"
          >
            <div className="w-48 h-50 block">
              <Image
                src="/images/paulMcbride.webp"
                alt="Paul McBride"
                className="rounded-md"
                layout="responsive"
                width={255}
                height={338}
              />
            </div>
            <div className="flex flex-col md:w-3/5">
              <p className="text-2xl font-medium">Paul McBride</p>
              <p className="font-light">
                Hello I’m Paul McBride and I started out in the Arb industry in
                1994. I have worked for a local authority, been a self employed
                contractor and been an Arb Approved Contractor Manager.
                <br />
                <br />I was a technical officer at the Arboricultural
                Association where I became an assessor for the Approved
                Contractor Scheme, delivered Basic Tree Inspection courses, was
                involved in the production of the Technical Guides and presented
                talks at various events.
                <br />
                <br />
                I’d like to think I have learnt a few things over these decades
                that would be of use to those contractors who are just starting
                out, and those who have been doing it a while too.
              </p>
            </div>
          </section>

          <section
            ref={servicesRef}
            className="w-full flex flex-col p-4 z-10 space-y-4 items-center"
          >
            <div className="md:w-[90%] w-full  lg:w-3/4 bg-dull pt-4 md:py-4  md:px-4 rounded-lg space-y-2 md:space-y-4 md:border-2 border-darkGreen">
              <p className="text-4xl font-medium text-center bg-dull">
                Services
              </p>
              <Accordion title="Supervisor Development Course">
                <p>
                  A 2 day course developed by Martin Lennon that provides useful
                  techniques that supervisors and indeed managers can use to
                  influence behaviour and create a positive safety culture and
                  an encouraging workplace environment. I suggest that a minimum
                  of 6 delegates attend to get the best out of the course, to
                  find out when the next course is available please visit{" "}
                  <a
                    href="http://www.arb-forestry.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-linkGreen underline break-all"
                  >
                    http://www.arb-forestry.com/
                  </a>
                </p>
              </Accordion>
              <Accordion title="LOLER (lifting Operations & Lifting Equipment regulations)">
                <p>
                  Thorough examination of Arboricultural Equipment (LOLER)
                  reports, toolbox talks on equipment checks, quarantine
                  process, and regular inspection/maintenance record keeping.
                </p>
              </Accordion>
              <Accordion title="Site Audits">
                <p>
                  Site Safety Audits, benchmarking of all site activities
                  against your policy, procedure and relevant industry guidance
                  or assessment standards. Relevant sources of information or
                  Toolbox talks can be provided if opportunities for improvement
                  are identified.
                  <br /> <br />
                  Work Quality Audits, benchmarking of completed works against
                  tree work specification, BS3998, and tree care practice.
                  Relevant sources of information or Toolbox talks can be
                  provided if opportunities for improvement are identified.
                </p>
              </Accordion>
              <Accordion title="Lantra Training">
                <p className="mb-2">
                  Visit the Lantra website for more information{" "}
                  <a
                    href="https://www.lantra.co.uk/course/basic-tree-survey-and-inspection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-linkGreen underline break-all"
                  >
                    https://www.lantra.co.uk/course/basic-tree-survey-and-inspection
                  </a>
                </p>
                <div className="w-full flex justify-center">
                  <Image
                    src="/images/lantra.webp"
                    alt="Lantra"
                    width={200}
                    height={200}
                    layout="fixed"
                  />
                </div>
              </Accordion>
              <Accordion title="Approved Contractor Scheme">
                <a
                  href="https://trees.org.uk/Accreditation/Become-an-ARB-Approved-Contractor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-linkGreen underline break-all"
                >
                  https://trees.org.uk/Accreditation/Become-an-ARB-Approved-Contractor
                </a>
                <br />
                <p>
                  I would suggest that if you are considering becoming a scheme
                  member and have attended a pre workshop, read through the
                  standard and believe the supporting evidence is in place, then
                  being formally assessed is your best route. So book your
                  assessment visit direct through the AA. If you are still not
                  sure, I can support you through the process, it is an
                  achievable standard.
                </p>
              </Accordion>
            </div>
          </section>
        </div>

        <section className="flex flex-col w-full text-white bg-[#002916] space-y-8 items-center z-10">
          <div className="p-4 w-full flex flex-col md:flex-row md:space-x-6 justify-evenly">
            <TreeSvg className="w-24 h-24 fill-white hidden md:block" />
            <div className="flex md:block justify-between">
              <p>
                <b>Address</b> <br /> 18 The Hill <br />
                Merrywalks <br /> Stroud <br />
                GL5 4EP
              </p>
              <TreeSvg className="w-24 h-24 fill-white visible md:hidden " />
            </div>
            <p>
              <b>Email</b> <br /> paul@arbsos.co.uk
            </p>
          </div>
          <p className="text-2xl pt-4 border-t px-12 md:px-24 xl:px-36 3xl:px-72">
            Contact Form
          </p>
          <form
            className="flex flex-col space-y-4 pb-4 w-full px-8 lg:max-w-3xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col md:flex-row w-full md:space-x-4 space-y-2 md:space-y-0">
              <label htmlFor="name" className="">
                Name*:{" "}
                <input
                  type="text"
                  className="w-full text-black"
                  {...register("name", { required: "Name is required" })}
                ></input>
                {errors.name && (
                  <p className="text-red-500 font-light">
                    {errors.name.message?.toString()}
                  </p>
                )}
              </label>
              <label htmlFor="email" className="">
                Email*:{" "}
                <input
                  type="text"
                  className="w-full text-black"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                ></input>
                {errors.email && (
                  <p className="text-red-500 font-light">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </label>
              <label htmlFor="phone" className="">
                Phone:{" "}
                <input
                  inputMode="numeric"
                  type="text"
                  pattern="[0-9]*"
                  className="w-full text-black"
                  {...register("phone")}
                ></input>
              </label>
            </div>
            <label htmlFor="message" className="">
              Message*:{" "}
              <textarea
                className="w-full h-[25vh] text-black"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 font-light">
                  {errors.message.message?.toString()}
                </p>
              )}
            </label>
            {submitMessage && (
              <p className="italic font-medium text-center">{submitMessage}</p>
            )}
            <input
              type="submit"
              onClick={(e: any) => {
                ga.event({
                  action: "submit_form",
                  params: getValues(),
                });
                e.target?.blur();
              }}
              className="border-green border w-fit place-self-center p-2 bg-green text-white text-xl hover:scale-110 transition duration-300 focus:scale-90 rounded-md"
            />
          </form>
        </section>
      </main>
    </div>
  );
};

export default Home;
