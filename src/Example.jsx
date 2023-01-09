import PropTypes from "prop-types";

const Example = ({ firstName }) => {
  const handle = () => {};

  return (
    <div>
      <p>{firstName}</p>
    </div>
  );
};

Example.propTypes = {
  firstName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  data: PropTypes.shape({
    theme: PropTypes.string.isRequired,
  }),
  movies: PropTypes.array.isRequired,
  datas: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Example;
