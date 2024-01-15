import React, { createContext } from 'react';

export const KYCContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | []
>([]);
