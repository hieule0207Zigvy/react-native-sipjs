import { ReactNode, useCallback, useRef, useState } from "react";
import React from "react";
import { Session } from "sip.js/lib/api/session";
import { SessionManager } from "sip.js/lib/platform/web";
import { ErrorMessageLevel1, ErrorMessageLevel2 } from "../enums/error";
import { ProviderContext } from "./SIPProviderContext";
import {
  RegisterStatus,
  SIPAccount,
  SIPProviderOptions,
  CONNECT_STATUS,
  SessionTimer,
} from "../type";

export const SIPProvider = (props: {
  options: SIPProviderOptions;
  children: ReactNode | JSX.Element;
}): JSX.Element => {
  return (
    <>
      <ProviderContext.Provider
        value={{
          test: true,
        }}
      >
        {children}
      </ProviderContext.Provider>
    </>
  );
};