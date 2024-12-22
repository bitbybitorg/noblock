import React from "react";

export interface DetectProps {
  children: React.ReactNode;
  noStyle?: boolean;
  colorTheme: "light" | "dark";
  customContainer?: React.ReactNode;
  rootClassName?: string;
  headingIcon?: React.ReactNode;
  headingText?: string;
  headingClassName?: string;
  messageText?: string;
  messageClassName?: string;
  refreshButtonText?: string;
  refreshButtonClassName?: string;
  reportButtonText?: string;
  reportButtonClassName?: string;
  reportMail?: string;
}
