const MyContainer = ({ children, className }) => {
  return (
    <div className={`container px-6 md:px-12 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default MyContainer;
