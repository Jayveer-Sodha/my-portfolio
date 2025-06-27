const Grid = ({ children, className = "" }) => {
  return (
    <div
      className={`grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default Grid;
