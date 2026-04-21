// @flow strict

import { personalData } from "@/utils/data/personal-data";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="grid grid-cols-1 gap-8 lg:gap-16">
        <div>
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;