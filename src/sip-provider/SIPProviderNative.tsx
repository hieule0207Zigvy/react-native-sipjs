import { ReactNode, useCallback, useRef, useState } from "react";
import React from "react";
import { Session } from "sip.js/lib/api/session";
import { SessionManager } from "sip.js/lib/platform/web";
import { ErrorMessageLevel1, ErrorMessageLevel2 } from "../enums/error";
import { ProviderContext, TestContext } from "./SIPProviderContext";
import {
  RegisterStatus,
  SIPAccount,
  SIPProviderOptions,
  CONNECT_STATUS,
  SessionTimer,
} from "../type";

export const SIPProviderNative = (props: {
  options: SIPProviderOptions;
  children: ReactNode | JSX.Element;
}): JSX.Element => {
  const { children } = props;
  return (
    <>
      <TestContext.Provider
        value={{
          test: true,
        }}
      >
        {children}
      </TestContext.Provider>
    </>
  );
};
