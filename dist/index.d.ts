import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default from 'react';

interface DetectProps {
    children: React__default.ReactNode;
    noStyle?: boolean;
    colorTheme: "light" | "dark";
    customContainer?: React__default.ReactNode;
    rootClassName?: string;
    headingIcon?: React__default.ReactNode;
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

declare const useDetect: () => boolean;
declare const BlockContainer: ({ children, noStyle, colorTheme, customContainer, rootClassName, headingIcon, headingText, headingClassName, messageText, messageClassName, refreshButtonText, refreshButtonClassName, reportButtonText, reportButtonClassName, reportMail, }: DetectProps) => string | number | boolean | Iterable<React.ReactNode> | react_jsx_runtime.JSX.Element | null | undefined;

export { BlockContainer, useDetect };
