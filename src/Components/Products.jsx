import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const [position, setposition] = useState(0);
  const mover = (val) => {
    setposition(val * 23);
  };

  var productData = [
    {
      url: "https://i.pinimg.com/236x/3f/1c/b8/3f1cb84e35967d0265047c07a772fbae.jpg",
      title: "arqitel",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nonhic dolore. Voluptates incidunt ad reiciendis natus recusandae qu",
    },
    {
      url: "https://i.pinimg.com/236x/85/d4/13/85d4138f8ee087d83349ddcca4ee9830.jpg",
      title: "yir 2022",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nonhic dolore. Voluptates incidunt ad reiciendis natus recusandae qu",
    },
    {
      url: "https://i.pinimg.com/236x/38/c2/f3/38c2f3acd7071d3debfc176e6e167d70.jpg",
      title: "ttr",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nonhic dolore. Voluptates incidunt ad reiciendis natus recusandae qu",
    },
    {
      url: "https://i.pinimg.com/736x/d5/01/33/d50133cdbd65e8bba7e6887f2100fdfe.jpg",
      title: "yahoo",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nonhic dolore. Voluptates incidunt ad reiciendis natus recusandae qu",
    },
  ];
  return (
    <div className="relative">
      {productData.map((item, index) => (
        <Product key={index} count={index} val={item} mover={mover} />
      ))}
      <div className="w-full h-full absolute  top-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem`, x: "-50%" }}
          transition={{ease:[0.76,0,0.24,1],duration:.4}}
          className="absolute w-[25rem] h-[23rem] bg-sky-400 left-[45%] overflow-hidden rounded-md"
        >
          <img className="w-full h-full overflow-hidden" src="https://i.pinimg.com/236x/55/74/3a/55743a51830dfe468671fc86b151ee2e.jpg" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
