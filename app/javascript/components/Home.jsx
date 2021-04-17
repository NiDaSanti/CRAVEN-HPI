import React from "react";
import { render } from "react-dom";
// import { Link } from "react-router-dom";

class MainDashboard extends React.Component {
	// this.state = {
	// 	data: [],
	// }
	componentDidMount() {
	}
	getData = (url) => {
		const url = [];
		fetch(url, {
			headers: {/* may need key */}
		})
		.then(response => response.json())
		.then(responseData => {
			this.setState({data: })
		});
	}
	render() {
		return(
			null
		);
	}
}

// import React from "react";
// import { render } from "react-dom";
// import { Link } from "react-router-dom";


// class Home extends React.Component {
//     this.state(
//         data: []
//     );

//     getData = (url) => {
//         const url = "";
//         fetch(url, {
//             headers: {/* may need key */}
//         })
//         .then(response => response.json())
//         .then(responseData => {
//             this.setState({data: })
//         });
//     },
//     render() {
//         return (
//         )
//     }
// }
// export default () => (

//   <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
//     <div className="jumbotron jumbotron-fluid bg-transparent">
//       <div className="container secondary-color">
//         <h1 className="display-4">Food Recipes</h1>
//         <p className="lead">
//           A curated list of recipes for the best homemade meal and delicacies.
//         </p>
//         <hr className="my-4" />
//         <Link
//           to="/recipes"
//           className="btn btn-lg custom-button"
//           role="button"
//         >
//           View Recipes
//         </Link>
//       </div>
//     </div>
//   </div>
// );