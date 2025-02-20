import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        //window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // Reiniciar el scroll inmediatamente
        const scrollContainer = document.body.scrollTop > 0 ? document.body : document.documentElement;

        scrollContainer.scrollTo({top: 0, behavior: "instant",});
    }, [pathname]);

    return null;
};

export default scrollToTop;




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
