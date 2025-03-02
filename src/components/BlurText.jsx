import { useRef, useEffect, useState, forwardRef } from "react";
import { useSprings, animated } from "@react-spring/web";

const BlurText = forwardRef(
  (
    {
      text = "",
      delay = {},
      className = "",
      animateBy = "words", // 'words' or 'letters'
      direction = "top", // 'top' or 'bottom'
      threshold = 0.1,
      rootMargin = "0px",
      animationFrom,
      animationTo,
      easing = "easeOutCubic",
      onAnimationComplete,
      useExternalAnimation = false, // New prop to disable internal animations
    },
    ref
  ) => {
    const elements = animateBy === "words" ? text.split(" ") : text.split("");
    const [inView, setInView] = useState(false);
    const innerRef = useRef();
    const combinedRef = ref || innerRef; // Use the forwarded ref or our internal ref
    const animatedCount = useRef(0);

    const defaultFrom =
      direction === "top"
        ? {
            filter: "blur(10px)",
            opacity: 0,
            transform: "translate3d(0,-50px,0)",
          }
        : {
            filter: "blur(10px)",
            opacity: 0,
            transform: "translate3d(0,50px,0)",
          };

    const defaultTo = [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        transform:
          direction === "top"
            ? "translate3d(0,5px,0)"
            : "translate3d(0,-5px,0)",
      },
      { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
    ];

    useEffect(() => {
      // Only set up the IntersectionObserver if we're not using external animation
      if (useExternalAnimation) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(combinedRef.current);
          }
        },
        { threshold, rootMargin }
      );

      if (combinedRef.current) {
        observer.observe(combinedRef.current);
      }

      return () => observer.disconnect();
    }, [threshold, rootMargin, useExternalAnimation, combinedRef]);

    const springs = useSprings(
      elements.length,
      elements.map((_, i) => ({
        from: animationFrom || defaultFrom,
        to: useExternalAnimation
          ? animationFrom || defaultFrom // Stay in "from" state if externally animated
          : inView
          ? async (next) => {
              for (const step of animationTo || defaultTo) {
                await next(step);
              }
              animatedCount.current += 1;
              if (
                animatedCount.current === elements.length &&
                onAnimationComplete
              ) {
                onAnimationComplete();
              }
            }
          : animationFrom || defaultFrom,
        delay: useExternalAnimation ? 0 : i * delay,
        config: { easing },
      }))
    );

    return (
      <p ref={combinedRef} className={`blur-text ${className}`}>
        {springs.map((props, index) => (
          <animated.span
            key={index}
            style={{
              ...props,
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {elements[index] === " " ? "\u00A0" : elements[index]}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </animated.span>
        ))}
      </p>
    );
  }
);

export default BlurText;
