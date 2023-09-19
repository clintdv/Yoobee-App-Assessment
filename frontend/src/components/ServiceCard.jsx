// Anthea's Code

import { PropTypes } from "prop-types";

export default function ServiceCard({ img, title, text }) {
  return (
    <div className="flex flex-col justify-center items-center  md:mt-0 mt-5 ">
      <img src={img} alt="" className="h-12 w-12 " />
      <h1 className="font-light text-xl"> {title}</h1>
      <p className="font-light text-sm text-center">{text}</p>
    </div>
  );
}
ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
