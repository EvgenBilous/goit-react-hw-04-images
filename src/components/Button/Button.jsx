const Button = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className="Button">
      Load More
    </button>
  );
};

export default Button;
