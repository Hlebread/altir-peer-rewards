import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  View,
  Text,
  ImageProps,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { THEME } from '../../constants';

export interface AvatarProps extends PropsWithChildren {
  src?: ImageProps['source'];
  alt?: string;
  variant?: 'circular' | 'rounded' | 'square';
  size?: number;
  color?: string;
  bgcolor?: string;
  imgProps?: ImageProps;
}

export type AvatarMode = 'image' | 'alt' | 'children' | 'default';

const getBorderRadius = ({
  variant,
  size,
}: Pick<AvatarProps, 'variant' | 'size'>) => {
  const avatarSize = size as number;

  switch (variant) {
    case 'circular':
      return avatarSize / 2;
    case 'rounded':
      return avatarSize / 10;
    default:
      return;
  }
};

const Avatar: FC<AvatarProps> = ({
  children,
  src,
  alt,
  variant = 'circular',
  size = 50,
  color = THEME.palette.primary.light,
  bgcolor = THEME.palette.secondary.light,
  imgProps,
}) => {
  const [imageLoadError, setImageLoadError] = useState(false);

  const chooseMode = useCallback((): AvatarMode => {
    if (src && !imageLoadError) {
      return 'image';
    }
    if (children) {
      return 'children';
    }
    if (alt) {
      return 'alt';
    }

    return 'default';
  }, [alt, children, imageLoadError, src]);

  const [mode, setMode] = useState<AvatarMode>(chooseMode);

  const calculatedContainerStyles: StyleProp<ViewStyle> = {
    backgroundColor: bgcolor,
    width: size,
    height: size,
    borderRadius: getBorderRadius({ variant, size }),
  };
  const calculatedTextStyle: StyleProp<TextStyle> = {
    color,
  };

  const onError = useCallback(() => {
    setImageLoadError(true);
  }, []);

  useEffect(() => {
    setMode(chooseMode());
  }, [chooseMode]);

  return (
    <View style={[styles.container, calculatedContainerStyles]}>
      {mode === 'image' && (
        <Image
          source={src}
          onError={onError}
          style={styles.image}
          {...imgProps}
        />
      )}
      {mode === 'children' && <View>{children}</View>}
      {mode === 'alt' && alt && (
        <View>
          <Text style={[styles.alt, calculatedTextStyle]}>{alt[0]}</Text>
        </View>
      )}
      {mode === 'default' && (
        <Image
          source={require('./avatar.png')}
          style={styles.image}
          {...imgProps}
        />
      )}
    </View>
  );
};

export default React.memo(Avatar);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  text: {},
  alt: {
    textTransform: 'uppercase',
    fontSize: 24,
  },
});
