const MyContainer = ({ children, className }) => {
  return (
    <div className={`container px-4  mx-auto ${className}`}>{children}</div>
  );
};

export default MyContainer;
