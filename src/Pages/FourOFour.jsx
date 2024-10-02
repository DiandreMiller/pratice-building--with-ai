import { Link } from 'react-router-dom';

const FourOFour = () => {
  return (
    <div className="four-o-four">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default FourOFour;
