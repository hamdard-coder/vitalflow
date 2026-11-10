
import { motion } from "motion/react";

const Button = ({ title }) => {
  return (
    <motion.a
      href="#"
      whileHover="hover"
      className="inline-block bg-[#4586ff] text-white px-5 py-3 rounded-full font-semibold overflow-hidden"
    >
      <span className="relative block overflow-hidden">
        {/* Original text */}
        <motion.span
          className="block"
          variants={{
            hover: { y: "-100%" },
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          {title}
        </motion.span>

        {/* Rolling text */}
        <motion.span
          className="absolute inset-0 block"
          initial={{ y: "100%" }}
          variants={{
            hover: { y: "0%" },
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          {title}
        </motion.span>
      </span>
    </motion.a>
  );
};

export default Button;
