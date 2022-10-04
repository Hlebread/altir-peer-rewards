import React, { FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import Animated, {
  measure,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

import { THEME } from '../../constants';

export interface RippleProps extends ViewProps {
  onTap?: () => void;
  color?: string;
  duration?: number;
  opacity?: number;
}

const Ripple: FC<RippleProps> = ({
  children,
  onTap,
  duration = 800,
  opacity = 0.5,
  color = THEME.palette.common.black,
  style,
  ...props
}) => {
  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);
  const width = useSharedValue(0);
  const height = useSharedValue(0);
  const scale = useSharedValue(0);
  const rippleOpacity = useSharedValue(opacity);

  const aRef = useAnimatedRef<View>();

  const tapGestureEvent =
    useAnimatedGestureHandler<LongPressGestureHandlerGestureEvent>({
      onStart: ({ x, y }) => {
        const layout = measure(aRef);
        width.value = layout.width;
        height.value = layout.height;

        centerX.value = x;
        centerY.value = y;

        rippleOpacity.value = opacity;
        scale.value = 0;
        scale.value = withTiming(1, { duration });
      },
      onFinish: ({ state }) => {
        if (onTap && state !== 3) {
          runOnJS(onTap)();
        }

        rippleOpacity.value = withTiming(0, { duration: duration / 2 });
      },
    });

  const rStyle = useAnimatedStyle(() => {
    const circleRadius = Math.sqrt(width.value ** 2 + height.value ** 2);
    const translateX = centerX.value - circleRadius;
    const translateY = centerY.value - circleRadius;

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius,
      backgroundColor: color,
      opacity: rippleOpacity.value,
      transform: [
        { translateX },
        { translateY },
        {
          scale: scale.value,
        },
      ],
    };
  });

  return (
    <View ref={aRef} style={style} collapsable={false} {...props}>
      <GestureHandlerRootView>
        <LongPressGestureHandler onGestureEvent={tapGestureEvent}>
          <Animated.View style={[style, styles.hidden]}>
            <Animated.View style={[rStyle, styles.ripple]} />
            <View>{children}</View>
          </Animated.View>
        </LongPressGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
};

export default React.memo(Ripple);

const styles = StyleSheet.create({
  ripple: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  hidden: {
    overflow: 'hidden',
  },
});
