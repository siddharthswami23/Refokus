import Button from "./Button";
import PropTypes from "prop-types";

function Product({val,mover,count}) {
  return (
    <div className="w-full py-20 h-[23rem]">
      <div onMouseMove={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl font-semibold capitalize">{val.title}</h1>
        <div className="w-1/3">
          <p className="mb-5">
            {val.description}
          </p>
          <div className="flex gap-10">
            <Button title={"get started"}/>
            <Button title={"case study"}/>
          </div>
        </div>
      </div>
    </div>
  );

}


Product.propTypes = {
    val: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    mover:PropTypes.func.isRequired,
    count:PropTypes.number.isRequired,
};

export default Product;
