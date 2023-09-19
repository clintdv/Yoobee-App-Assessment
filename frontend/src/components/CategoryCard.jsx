//Anthea's Code

import { PropTypes } from "prop-types";
function CategoryCard({ backgroundimg, title, link }) {
  return (
    <div
    style={{backgroundImage: `url(/${backgroundimg})`}}
      className={` bg-cover bg-center h-[700px]  justify-end flex-col flex items-left pl-10`}
    >
      <h1 className="text-[38px] font-thin text-white uppercase">{title}</h1>
      <a className=" text-white  py-2 mt-4 uppercase w-max">{link}</a>
    </div>
  );
}

export default CategoryCard;

CategoryCard.propTypes = {
  backgroundimg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
