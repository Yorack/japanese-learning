import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";

const LessonDisclosure = ({ lesson, content }) => {
  return (
    <Disclosure className="rounded-md">
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full text-left focus:outline-none rounded-md">
            <h1 className={`${open ? "rounded-t-md" : "rounded-md"} flex p-4 `}>
              <span className="flex-grow">{lesson.title}</span>
              <ChevronRightIcon
                className={`${open ? "transform rotate-90" : ""} w-8`}
              />
            </h1>
          </Disclosure.Button>

          <Disclosure.Panel
            open={open}
            className="rounded-b-lg border border-purple-100 border-t-0"
          >
            {content}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default LessonDisclosure;
