import { IAccountType } from '@/types/IAccountType';
import React, { createContext } from 'react';

export const AccountTypeContext = createContext<
  [number, React.Dispatch<React.SetStateAction<number>>] | []
>([]);

export const AccountDetailsContext = createContext<
  [IAccountType, React.Dispatch<React.SetStateAction<IAccountType>>] | []
>([]);
