import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      when: "beforeChildren",
      staggerChildren: custom.stagger ? 0.25 : 0,
    },
  }),
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1.2, 
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
  const variants = customVariants || containerVariants

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      custom={{ stagger }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
