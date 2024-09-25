import PropTypes from 'prop-types';

import { GoMoveToEnd } from "react-icons/go";
function Button({title}) {
  return (
    <div className="w-44 px-3 py-1 rounded-full bg-zinc-100 text-black flex justify-between items-center">
      <span className="capitalize text-lg font-semibold">{title}</span>
      <GoMoveToEnd/>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired, 
};


export default Button;
