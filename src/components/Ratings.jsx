const Ratings = ({ rating }) => {
  const stars = Array(5).fill(0);

  return (
    <div className="flex items-center">
      {stars.map((_, index) => (
        <span
          key={index}
          className={`${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Ratings;
