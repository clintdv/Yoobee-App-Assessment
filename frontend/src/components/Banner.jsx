// Anthea's Code

import PropTypes from 'prop-types'
function Banner({ title, backgroundimg }) {
  return (
    <div
      className="bg-cover bg-center h-[350px] w-full justify-center flex-col flex items-center"
      style={{ backgroundImage: `url(/${backgroundimg})` }}
    >
      <h1 className="text-5xl font-[400] text-white uppercase">{title}</h1>
    </div>
  );
}

export default Banner
//Props validation

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundimg: PropTypes.string.isRequired,
};