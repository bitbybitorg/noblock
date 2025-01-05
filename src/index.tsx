import React, { ReactNode, useEffect, useState } from "react";
import { DetectProps } from "./types";

export const useDetect = () => {
  const [isAdBlockerDetected, setIsAdBlockerDetected] =
    useState<boolean>(false);

  useEffect(() => {
    const detectAdBlocker = async () => {
      // Fallback 1: Using a common blocked className name
      const detectWithclassNameName = () => {
        const bait = document.createElement("div");
        bait.className = "adsbox";
        bait.style.display = "none";
        document.body.appendChild(bait);

        const isBlocked = window.getComputedStyle(bait).display === "none";
        document.body.removeChild(bait);
        return isBlocked;
      };

      // Fallback 2: Checking blocked network requests
      const detectWithRequest = async () => {
        try {
          await fetch("/ads.js", { method: "HEAD" }); // An endpoint name commonly blocked
          return false; // Request succeeded, no ad blocker
        } catch (error) {
          return true; // Request blocked, ad blocker detected
        }
      };

      // Fallback 3: Using script injection detection
      const detectWithScriptInjection = () => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/ads.js"; // Script path likely to be blocked
        script.onerror = () => setIsAdBlockerDetected(true); // If script fails to load, ad blocker detected
        document.body.appendChild(script);

        setTimeout(() => {
          document.body.removeChild(script);
        }, 1000);

        return false; // Default assumption is no ad blocker unless error occurs
      };

      // Execute fallbacks in sequence
      if (detectWithclassNameName()) {
        setIsAdBlockerDetected(true);
        return;
      }

      if (await detectWithRequest()) {
        setIsAdBlockerDetected(true);
        return;
      }

      detectWithScriptInjection();
    };

    detectAdBlocker();
  }, []);

  return isAdBlockerDetected;
};

const BlockContainer = ({
  children,
  noStyle = false,
  colorTheme,
  customContainer,
  rootClassName,
  headingIcon,
  headingText,
  headingClassName,
  messageText,
  messageClassName,
  refreshButtonText,
  refreshButtonClassName,
  reportButtonText,
  reportButtonClassName,
  reportMail,
}: DetectProps) => {
  const isAdBlockerDetected = useDetect();

  if (isAdBlockerDetected) {
    return !customContainer ? (
      <div className="h-screen w-screen flex justify-center items-center z-[9999999] overflow-hidden">
        <div
          className={
            !noStyle
              ? !rootClassName
                ? `px-6 py-8 ${
                    colorTheme == "light"
                      ? "text-[#141414] bg-[#e9e9e9]"
                      : "bg-[#141414] text-[#e9e9e9]"
                  } rounded-xl flex flex-col gap-2.5 items-center max-w-[25%]`
                : rootClassName
              : ""
          }
        >
          <div className="flex gap-2 items-center">
            {headingIcon ? (
              headingIcon
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 256"
                height="36px"
                width="36px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"></path>
              </svg>
            )}
            <h3
              className={
                !noStyle
                  ? !headingClassName
                    ? "font-bold text-2xl"
                    : headingClassName
                  : ""
              }
            >
              {headingText || "AD Blocker Detected!"}
            </h3>
          </div>
          <p
            className={
              !noStyle
                ? !messageClassName
                  ? "text-center"
                  : messageClassName
                : ""
            }
          >
            {messageText ||
              "It looks like you are using AD Blocking softwares to block ads displayed in our website, please disable such software or extensions to continue."}
          </p>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => window.location.reload()}
              className={
                !noStyle
                  ? !refreshButtonClassName
                    ? `px-8 py-1.5 rounded-lg ${
                        colorTheme == "light"
                          ? "bg-black/85 text-white hover:bg-black"
                          : "bg-white/85 text-black hover:bg-white"
                      }  transition-all`
                    : refreshButtonClassName
                  : ""
              }
            >
              {refreshButtonText || "I've Disabled it"}
            </button>
            <a
              href={`mailto:${reportMail || "report@bitbybit.in"}`}
              target="_blank"
              rel="noreferrer"
              className={
                !noStyle
                  ? !reportButtonClassName
                    ? "px-8 py-1.5 rounded-lg border border-red-400 text-red-400 hover:border-red-500 hover:text-red-500 transition-all"
                    : reportButtonClassName
                  : ""
              }
            >
              {reportButtonText || "Report error"}
            </a>
          </div>
        </div>
      </div>
    ) : (
      customContainer
    );
  }

  return <>{children}</>;
};

export default BlockContainer;
