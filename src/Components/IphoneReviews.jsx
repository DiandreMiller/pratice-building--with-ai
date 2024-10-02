import  { useState, useEffect } from 'react';
import '../Styles/IphoneReviews.css';

const initialReviews = [
  {
    id: 1,
    user: "Emma Watson",
    rating: 5,
    text: "The holographic display on the iPhone 16 is mind-blowing. It's like having a 3D screen in your hand!"
  },
  {
    id: 2,
    user: "Liam Chen",
    rating: 4,
    text: "The AI-powered personal assistant is incredibly intuitive. It's like having a mind-reader in your pocket."
  },
  {
    id: 3,
    user: "Sophia Patel",
    rating: 5,
    text: "The quantum-dot camera captures colors I didn't even know existed. My photos look more vibrant than real life!"
  },
  {
    id: 4,
    user: "Noah Kim",
    rating: 4,
    text: "The week-long battery life is a game-changer. I only need to charge once a week!"
  },
  {
    id: 5,
    user: "Ava Rodriguez",
    rating: 5,
    text: "The built-in projector feature is perfect for impromptu movie nights or presentations on the go."
  },
  {
    id: 6,
    user: "Ethan Nguyen",
    rating: 4,
    text: "The environmental sensor suite is impressive. It's great to know the air quality and UV index wherever I go."
  },
  {
    id: 7,
    user: "Mia Johnson",
    rating: 5,
    text: "The neural link feature for hands-free control is straight out of sci-fi. It takes some getting used to, but it's amazing!"
  },
  {
    id: 8,
    user: "Jackson Smith",
    rating: 3,
    text: "While the features are impressive, the learning curve is steep. It might be overwhelming for less tech-savvy users."
  },
  {
    id: 9,
    user: "Olivia Brown",
    rating: 5,
    text: "The quantum encryption makes me feel super secure. I no longer worry about my data being compromised."
  },
  {
    id: 10,
    user: "Lucas Taylor",
    rating: 4,
    text: "The augmented reality integration is seamless. It's changed how I navigate and interact with the world around me."
  }
];

const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => (
        <span 
          key={index} 
          className={index < rating ? 'star filled' : 'star'}
          onClick={() => onRatingChange && onRatingChange(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

function IphoneReviews() {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const [allReviews, setAllReviews] = useState(() => {
    const savedReviews = localStorage.getItem('iphone16Reviews');
    return savedReviews ? JSON.parse(savedReviews) : initialReviews;
  });
  const [newReview, setNewReview] = useState({ user: '', rating: 0, text: '' });

  useEffect(() => {
    localStorage.setItem('iphone16Reviews', JSON.stringify(allReviews));
  }, [allReviews]);

  const showMoreReviews = () => {
    setVisibleReviews(prevVisible => Math.min(prevVisible + 6, allReviews.length));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.user && newReview.rating && newReview.text) {
      const reviewToAdd = {
        id: Date.now(), // Use timestamp as a unique id
        ...newReview
      };
      setAllReviews(prev => [reviewToAdd, ...prev]);
      setNewReview({ user: '', rating: 0, text: '' });
    }
  };

  return (
    <div className="reviews-container">
      <h2>iPhone 16 Reviews</h2>
      
      <div className="review-form-container">
        <h3>Add a Review</h3>
        <form className="review-form" onSubmit={handleSubmitReview}>
          <input
            type="text"
            name="user"
            value={newReview.user}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <StarRating rating={newReview.rating} onRatingChange={handleRatingChange} />
          <textarea
            name="text"
            value={newReview.text}
            onChange={handleInputChange}
            placeholder="Your Review"
            required
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>

      <h3>User Reviews</h3>
      <div className="reviews-list">
        {allReviews.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="review-item">
            <p className="user-name">{review.user}</p>
            <StarRating rating={review.rating} />
            <p className="review-text">"{review.text}"</p>
          </div>
        ))}
      </div>
      {visibleReviews < allReviews.length && (
        <button className="show-more-button" onClick={showMoreReviews}>
          Show More Reviews
        </button>
      )}
    </div>
  );
}

export default IphoneReviews;
