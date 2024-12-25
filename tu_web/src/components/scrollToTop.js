//import React from "react";
//import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return children;
};

export default ScrollToTop;


// class ScrollToTop extends React.Component {
// 	componentDidUpdate(prevProps) {
// 		if (this.props.location !== prevProps.location) {
// 			window.scrollTo(0, 0);
// 		}
// 	}

// 	render() {
// 		return this.props.children;
// 	}
// }


// export default ScrollToTop;


// ScrollToTop.propTypes = {
// 	location: PropTypes.object,
// 	children: PropTypes.any
// };
