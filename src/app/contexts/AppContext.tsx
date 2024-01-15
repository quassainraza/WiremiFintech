import React, { createContext } from 'react';

export const QRContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | []
>([]);

export const ThemeContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | []
>([]);

// App Action Contexts

export const SendContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | []
>([]);
export const DepositContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | []
>([]);
export const SwapContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | []
>([]);

export const EscrowContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | []
>([]);
