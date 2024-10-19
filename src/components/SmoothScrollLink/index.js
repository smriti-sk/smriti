import { Link as ScrollLink } from "react-scroll";

const SmoothScrollLink = ({ to, children, className, onClick }) => {
  return (
    <ScrollLink 
      to={to} 
    //   smooth={true} 
    //   duration={500} 
      className={className}
      onClick={onClick}
    >
      {children}
    </ScrollLink>
  );
};

export default SmoothScrollLink;
