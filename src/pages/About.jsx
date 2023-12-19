export default function About() {
    return (
        <>
        {/* Start of About Me Sektion */}
        <div className="flex items-center justify-between px-7 pt-7">
        <div className="font-medium text-lg flex items-center gap-x-3">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          About Me
        </div>
        </div>
        <p className="text-pretty px-7 pt-4">
          I'm 18 years old and currently in an apprenticeship at WIKA Group to become an Application Developer. 
          Currently, i mainly work with C#, PHP Laravel, and Livewire, encompassing both frontend and backend development in the area of web realm. 
          I'm slated to complete my apprenticeship in 2024 with my final project, highligting an important milestone in my journey.
        </p>
        {/* End of About Me Sektion */}
        {/* Start of Timeline Sektion */}
        <div className="flex items-center justify-between px-7 pt-7">
        <div className="font-medium text-lg flex items-center gap-x-3">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          My Timeline
        </div>
        </div>

        <div className="px-7 py-4">
          <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
          <li class="ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-medium"><strong>Corporate Apprentice</strong></h3><h3>WIKA Group</h3>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - Present</time>
            {/* <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3> */}
          </li>
          </ol>
        </div>
        {/* End Of Timeline Sektion */}
        {/* Start of Skill Sektion */}
        <div className="flex items-center justify-between px-7 pt-7">
        <div className="font-medium text-lg flex items-center gap-x-3">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          Skills
        </div>
        </div>

        <div className="px-7 pt-4">
          {/* PHP Skills */}
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium">PHP (Laravel & Livewire)</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
            <div class="bg-gray-700 h-2.5 rounded-full" style={{ width: "70%" }}></div>
          </div>
          {/*C# Skill*/}
          <div class="flex justify-between mb-1 pt-5">
            <span class="text-base font-medium">C#</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
            <div class="bg-gray-700 h-2.5 rounded-full" style={{ width: "80%" }}></div>
          </div>
          {/*HTML Skill*/}
          <div class="flex justify-between mb-1 pt-5">
            <span class="text-base font-medium">HTML</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
            <div class="bg-gray-700 h-2.5 rounded-full" style={{ width: "75%" }}></div>
          </div>
          {/* CSS Skill */}
          <div class="flex justify-between mb-1 pt-5">
            <span class="text-base font-medium">CSS (with diffrent Framworks)</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
            <div class="bg-gray-700 h-2.5 rounded-full" style={{ width: "80%" }}></div>
          </div>
          {/* React Skill */}
          <div class="flex justify-between mb-1 pt-5">
            <span class="text-base font-medium">React & React Native</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
            <div class="bg-gray-700 h-2.5 rounded-full" style={{ width: "65%" }}></div>
          </div>
          <div className="pt-5">
            <p>
              In order to be up to date with the latest functions for the various frameworks, I am constantly trying to improve all my skills.
            </p>
          </div>
        </div>
        
        </>
    )
}