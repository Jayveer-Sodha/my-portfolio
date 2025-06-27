const Section = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`scroll-mt-24 w-full mx-auto p-2 lg:p-0 my-5 lg:h-[86vh] flex flex-col justify-center items-center ${className}`}
    >
      {children}
    </section>
  );
};
export default Section;
