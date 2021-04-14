import { Popover, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

const CopyButton = ({ text }) => {
  const [visiblePopover, setVisiblePopover] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    console.log("--- TEST");
    setVisiblePopover(true);
  };

  useEffect(() => {
    if (!visiblePopover) {
      return;
    }

    setTimeout(() => setVisiblePopover(false), 800);
  }, [visiblePopover]);

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <button
            onClick={handleClick}
            className="w-8 btn btn-green group flex items-center rounded-md cursor-pointer p-1 "
          >
            <DocumentDuplicateIcon className="text-white" />
          </button>

          <Transition
            show={visiblePopover}
            as={Fragment}
            enter="transition duration-100 ease-in"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel
              static
              className="absolute z-10 bg-gray-700 text-white rounded-lg text-center max-w-sm p-2 mt-3 transform right-1/4"
            >
              <div className="text-sm">Copied to clipboard</div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CopyButton;
