import PropTypes from 'prop-types';

function Strip({ val }) {
  return (
    <div className="w-72 px-4 py-6 border-zinc-700 border-t-2 border-r-2 border-b-2 flex items-center justify-between">
      <img src={val.url} alt=""/>
      <h4>{val.number}</h4>
    </div>
  );
}

Strip.propTypes = {
  val: PropTypes.shape({
    url: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
};

export default Strip;
