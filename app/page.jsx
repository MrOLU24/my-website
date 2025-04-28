// This is a Next.js 13+ app directory example
// Importing the necessary CSS file for global styles
import "./globals.css";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello <br />{" "}
              <span className="text-accent-solid">I'm Olatunji Oluwashola</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient to various programming languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div>socials</div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
