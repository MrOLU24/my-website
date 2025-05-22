"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "+2348026709004",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "abdulafeezoluwashola2@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    desc: "Lagos, Nigeria",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-accent-solid text-4xl">
                Let's work together
              </h3>
              <p className="text-white/60">
                I'm interested in collaborating on your next project. Please
                fill out the form below and I'll get back to you as soon as
                possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstName" placeholder="First Name" />
                <Input type="lastName" placeholder="Last Name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
                <Input type="message" placeholder="Message" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Digital Marketing</SelectItem>
                    <SelectItem value="mst">Video Editor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </form>
          </div>
          <div className="flex-1 items-center flex xl:justify-end order-1 xl:order-none mb-8 xl:mb-3">
            info
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
