//importing hooks
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
//importing services
import { waitlist } from "../../services/waitlist";
//importing images
import WorkingAi from "../../assets/working_ai.png";
import WorkingAiMini from "../../assets/working_ai_mini.png";
//importing icons
import { AiOutlineCheck } from "react-icons/ai";
const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [hideForm, setHideForm] = useState(false);
  const [showError, setShowError] = useState({
    state: false,
    message: "error",
  });
  const { mutate, isLoading } = useMutation({
    mutationFn: () => waitlist({ email: email }),
    onSuccess: () => {
      setHideForm(true);
      setShowError({
        state: false,
        message: "",
      });
    },
    onError: (error) => {
      const errorCode = error.response.status;
      if (errorCode === 400) {
        setShowError({
          state: true,
          message: "Invalid email address 😎",
        });
        return;
      }
      setShowError({
        state: true,
        message: "Can't perform request",
      });
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div className="">
      <div className="p-4 mt-4 max-w-sm mx-auto flex flex-col md:max-w-md lg:max-w-xl xl:max-w-5xl xl:flex-row-reverse xl:mt-18 items-center 2xl:max-w-5xl xl:justify-center">
        <div className="">
          <img src={WorkingAi} alt="working ai" className="hidden xl:block" />
          <img src={WorkingAiMini} alt="working ai" className="xl:hidden" />
        </div>
        <div>
          <h1 className="text-metclan-yellow-100 font-bold text-3xl text-center mt-4 tracking-tight leading-8 sm:text-5xl xl:text-left whitespace-nowrap">
            We're cooking up! <br />
            <span className="text-black">Metclan</span>
          </h1>
          <p className="mt-5 text-gray-500 tracking-tight text-center xl:text-left mb-3">
            Metclan will launch soon. Join the waitlist to access the exclusive
            offers for early birds.
          </p>
          <p
            className="mb-2 text-sm text-red-500"
            style={{ visibility: showError.state ? "visible" : "hidden" }}
          >
            {showError.message}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 xl:flex-row"
            style={{ display: hideForm && "none" }}
          >
            <input
              type="text"
              className="bg-gray-200 px-4 py-3 outline-none rounded-lg text-sm text-gray-800 flex-1"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <button
              className="px-4 py-3 rounded-lg text-sm bg-metclan-yellow-100 text-white font-bold transition hover:bg-yellow-600"
              disabled={isLoading}
              style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
            >
              {isLoading ? "Sending..." : "Join Waitlist"}
            </button>
          </form>
          {hideForm && (
            <div className="flex gap-1 items-center text-gray-800">
              <AiOutlineCheck />
              Thanks for joining! We'd keep you posted.
            </div>
          )}
        </div>
      </div>
      <footer className="fixed bottom-0 py-4 px-4 w-full flex justify-center">
        <small className="text-gray-600">
          &#169;2023 Metclan. All rights reserved.
        </small>
      </footer>
    </div>
  );
};
export default Waitlist;
