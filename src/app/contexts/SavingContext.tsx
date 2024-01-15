import { ISavingTypes } from '@/types/ISavingsTypes';
import React, { createContext } from 'react';

export const SavingsContext = createContext<
  [ISavingTypes[], React.Dispatch<React.SetStateAction<ISavingTypes[]>>] | []
>([]);
