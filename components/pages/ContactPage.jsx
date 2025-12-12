"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
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

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x0s7zjm",
        "template_zmt0y99",
        form.current,
        "fywTgAqre9B77O2Ae"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-accent-solid text-4xl">
                Let&apos;s work together
              </h3>
              <p className="text-white/60">
                I&apos;m interested in collaborating on your next project.
                Please fill out the form below and I&apos;ll get back to you as
                soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                />
              </div>

              <input type="hidden" name="service" id="selected-service" />

              <Select
                onValueChange={(value) => {
                  document.getElementById("selected-service").value = value;
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Frontend Development">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="Mobile Development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="UX Research">UX Research</SelectItem>
                    <SelectItem value="UX Engineering">UX Engineering</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Your message here"
                required
              />

              <Button type="submit" size="md" className="max-w-48">
                Send message
              </Button>
            </form>
          </div>

          <div className="flex-1 items-center flex xl:justify-end order-1 xl:order-none mb-8 xl:mb-3">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-solid rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.desc}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
