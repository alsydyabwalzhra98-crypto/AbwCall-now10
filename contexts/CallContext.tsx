import React, { createContext, ReactNode } from 'react';

export interface CallContextType {
  makeCall: (phoneNumber: string) => Promise<void>;
  endCall: () => void;
  currentCall: any | null;
  callStatus: 'idle' | 'connecting' | 'ringing' | 'connected' | 'ended';
  callHistory: any[];
  getCallHistory: () => Promise<void>;
  loading: boolean;
}

export const CallContext = createContext<CallContextType>({
  makeCall: async () => {},
  endCall: () => {},
  currentCall: null,
  callStatus: 'idle',
  callHistory: [],
  getCallHistory: async () => {},
  loading: false,
});

export const CallProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const value: CallContextType = {
    makeCall: async () => {},
    endCall: () => {},
    currentCall: null,
    callStatus: 'idle',
    callHistory: [],
    getCallHistory: async () => {},
    loading: false,
  };

  return <CallContext.Provider value={value}>{children}</CallContext.Provider>;
};
