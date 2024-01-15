import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
} from '@gluestack-ui/themed';
import { BG_DARK } from '@/constants/Colors';
import useTheme from '@/hooks/useTheme';

const BottomSheet = (props: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
  extras: any;
  noAdaptiveTheme?: boolean;
}) => {
  const theme = useTheme();
  return (
    <Actionsheet
      isOpen={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      {...props.extras}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ActionsheetBackdrop />
        <ActionsheetContent
          style={{
            padding: 0,
            backgroundColor: props.noAdaptiveTheme
              ? 'white'
              : theme === 'light'
              ? 'white'
              : BG_DARK,
          }}>
          {props.children}
        </ActionsheetContent>
      </KeyboardAvoidingView>
    </Actionsheet>
  );
};

export default BottomSheet;
