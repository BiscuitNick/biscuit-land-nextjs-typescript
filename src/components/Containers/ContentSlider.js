import { useSpring, animated } from "react-spring";

export const ContentSlider = (props) => {
  const { show, animatefrom, animateto, children, style } = props;
  const slideprops = useSpring(
    show ? { ...animateto, ...style } : { ...animatefrom, ...style }
  );

  return (
    <animated.div
      style={slideprops} //
    >
      {children}
    </animated.div>
  );
};
