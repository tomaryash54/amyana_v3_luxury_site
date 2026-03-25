import { motion, useReducedMotion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      when: "beforeChildren",
      staggerChildren: custom.stagger ? 0.08 : 0,
    },
  }),
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.65, 
      ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
    },
  },
}

export default function RevealOnScroll({ 
  children, 
  className = "", 
  stagger = false, 
  variants: customVariants,
  ...props 
}) {
  const prefersReducedMotion = useReducedMotion()
  const variants = customVariants || containerVariants

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.25 }}
      variants={variants}
      custom={{ stagger }}
      style={{ willChange: prefersReducedMotion ? "auto" : "opacity, transform" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
