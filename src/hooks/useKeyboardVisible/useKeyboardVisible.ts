import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export const useKeyboardVisible = (visibleDefault = false): boolean => {
  const [keyboardVisible, setKeyboardVisible] = useState(visibleDefault);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return keyboardVisible;
};
