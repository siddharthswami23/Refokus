import { motion } from "framer-motion";
import PropTypes from "prop-types"
function Marquee({ imageurls,direction }) {
  return (
    <motion.div initial={{x:direction === "left" ? "0%":"-100%"}} animate={{x: direction === "left" ? "-100%":"0%"}} transition={{ease:"linear",duration:10,repeat:Infinity}} className="flex w-full py-10 gap-20 whitespace-nowrap">
      {imageurls.map((item, index) => (
        <img key={index} src={item} alt="" className="w-52 flex-shrink-0"/>
      ))}
    </motion.div>
    
  );
}

Marquee.propTypes = {
  imageurls: PropTypes.arrayOf(PropTypes.string).isRequired,
  direction:PropTypes.string.isRequired
};


export default Marquee;
