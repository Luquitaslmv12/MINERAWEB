import { motion, useReducedMotion } from "framer-motion";

const OFFSETS = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

/**
 * Envoltorio de animación de entrada al hacer scroll.
 * Reemplaza a AOS usando un único sistema de animación (framer-motion)
 * y respeta `prefers-reduced-motion`.
 */
export default function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = 0.25,
  once = true,
  className = "",
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;
  const offset = shouldReduceMotion ? OFFSETS.none : OFFSETS[direction] ?? OFFSETS.up;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: shouldReduceMotion ? 0.001 : duration, delay: shouldReduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
