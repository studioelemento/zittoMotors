import { useEffect } from "react";
import { createPortal } from "react-dom";
import { MailPlus, X } from "lucide-react";

export default function InterestModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative         bg-[linear-gradient(170deg,#000_0%,#000_38%,#D4373D_39%,#D4373D_100%)]
 flex min-h-screen items-center justify-center p-4 lg:p-8"
      >
        <button
          onClick={onClose}
          className="fixed right-4 top-4 lg:right-8 lg:top-8 z-50 rounded-full bg-[#D4373D] p-2 text-black"
        >
          <X size={24} />
        </button>

        <div
          className="
        w-full
        max-w-7xl
        overflow-hidden
        rounded-lg
      "
        >
          <div className="px-6 py-8 lg:px-12 lg:py-12">
            <h2 className="saira text-center text-3xl lg:text-5xl font-bold text-white/80">
              I AM INTERESTED
            </h2>

            <p className="mx-auto mt-6 max-w-9xl text-left text-xs  text-white">
              Hold your horses! We’re not hitting the pre-booking pedal just
              yet. You can make a booking after we let you know exactly what our
              machines can do, when it is hitting the streets, and how much it
              will cost you. Right now, just rev up the interest by registering
              for free, and we will keep you in the loop with all the juicy
              details as they unfold!
            </p>

            <div className="mt-10 max-w-5xl  mx-auto grid gap-8 lg:grid-cols-[1fr_auto_1fr]">
              {/* LEFT */}
              <div className="grid grid-cols-2 h-max my-auto gap-4">
                <div
                  className="rounded relative text-white saira font-semibold text-center   bg-black  aspect-[13/9] "
                  style={{
                    backgroundImage: `url('/ZCR Page/ZCR Section 5 Image 1.png')`,
                    backgroundSize: "contain",
                  }}
                >
                  {/* <img src="/ZCR Page/ZCR Section 5 Image 1.png" alt="" className=""/> */}
                  <p className="absolute bottom-2 w-full"> ZITTO CRUISER</p>
                </div>
                <div
                  className="rounded saira font-semibold relative text-center text-white bg-black  aspect-[13/9] "
                  style={{
                    backgroundImage: `url('/ZCR Page/ZCR Section 5 Image 2.png')`,
                    backgroundSize: "contain",
                  }}
                >
                  {/* <img src="/ZCR Page/ZCR Section 5 Image 1.png" alt="" className=""/> */}
                  <p className="absolute bottom-2 w-full"> ZITTO CRUISER</p>
                </div>
                <div
                  className="rounrounded saira font-semibold relative text-center text-white bg-black aspect-[13/9] "
                  style={{
                    backgroundImage: `url('/ZCR Page/ZCR Section 5 Image 3.png')`,
                    backgroundSize: "contain",
                  }}
                >
                  {/* <img src="/ZCR Page/ZCR Section 5 Image 1.png" alt="" className=""/> */}
                  <p className="absolute  bottom-2 w-full"> ZITTO CRUISER</p>
                </div>
                <div
                  className="rounded saira font-semibold relative text-center text-white bg-black aspect-[13/9] "
                  style={{
                    backgroundImage: `url('/ZCR Page/ZCR Section 5 Image 4.png')`,
                    backgroundSize: "contain",
                  }}
                >
                  {/* <img src="/ZCR Page/ZCR Section 5 Image 1.png" alt="" className=""/> */}
                  <p className="absolute bottom-2 w-full"> ZITTO CRUISER</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-[2px] bg-white" />

              {/* RIGHT */}
              <form className="space-y-4 gap-2 flex flex-col">
                <input
                  className="w-full text-xs leading-0 m-0 bg-white rounded p-3 text-black"
                  placeholder="Name"
                />
                <input
                  className="w-full text-xs leading-0 m-0 bg-white rounded p-3 text-black"
                  placeholder="Email ID"
                />
                <input
                  className="w-full text-xs leading-0 m-0 bg-white rounded p-3 text-black"
                  placeholder="Phone Number"
                />
                <div className="m-0 leading-0">
                  <p className="text-xs">Choose your products</p>
                  <select
                    className="w-full appearance-auto outline-0 text-xs bg-white rounded p-3 text-black"
                    placeholder="Email ID"
                  >
                    <option value=""></option>
                    <option value="">Zitto Cruiser</option>
                  </select>
                </div>
                <div className="m-0 leading-0">
                  <p className="text-xs">Select Country</p>
                  <select
                    className="w-full appearance-auto outline-0 m-0 leading-0 text-xs bg-white rounded p-3 text-black"
                    placeholder="Email ID"
                  >
                    <option value=""></option>
                    <option value="">Zitto Cruiser</option>
                  </select>
                </div>
                <div className="m-0 leading-0">
                  <p className="text-xs">States</p>
                  <select
                    className="w-full appearance-auto outline-0 m-0 leading-0 text-xs bg-white rounded p-3 text-black"
                    placeholder="Email ID"
                  >
                    <option value=""></option>
                    <option value="">Zitto Cruiser</option>
                  </select>
                </div>
                <div className="text-xs">
                  <input type="checkbox" /> By checking this box, you're
                  agreeing to receive updates from Zitto via email /
                  WhatsApp.You can opt out at any time by sending us a message
                </div>

                <button
                  type="submit"
                  className="ms-auto rounded flex w-max gap-10 px-5 py-2 text-white bg-[#202C32] text-xl font-semibold"
                >
                  Register Interest <MailPlus />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>,

    document.body,
  );
}
