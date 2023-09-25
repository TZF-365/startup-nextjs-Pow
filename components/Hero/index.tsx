import Link from "next/link";
import React from "react";
import VideoBackground from "../Video/VideoBackground";

const Hero: React.FC = () => {
  return (
    <>
 {/* Place the VideoBackground component here */}
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Incubating the “ideal You” through Education and Collaboration.
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  We envision a world where financial power is decentralized,
                  where individuals have control over their assets and financial
                  decisions. Our commitment is to guide you on this journey
                  towards financial sovereignty.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Join Us
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    VAULT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          {/* Your SVG goes here */}
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          {/* Your SVG goes here */}
        </div>
      </section>
    </>
  );
};

export default Hero;
