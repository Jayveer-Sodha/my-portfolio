import {
  SECTION_PTAG_CLASSNAME,
  SECTION_SUB_TITLE_CLASSNAME,
  SECTION_TITLE_CLASSNAME,
  TEXT_GRADIENT_CLASSNAME,
} from "@/lib/constants";
import clsx from "clsx";

const Text = ({
  children,
  title = false,
  subTitle = false,
  classNames,
  gradient,
}) => {
  if (title) {
    return (
      <h1
        className={clsx(
          classNames,
          SECTION_TITLE_CLASSNAME,
          gradient && TEXT_GRADIENT_CLASSNAME
        )}
      >
        {children}
      </h1>
    );
  }
  if (subTitle) {
    return (
      <h2 className={clsx(classNames, SECTION_SUB_TITLE_CLASSNAME)}>
        {children}
      </h2>
    );
  }
  return <p className={clsx(classNames, SECTION_PTAG_CLASSNAME)}>{children}</p>;
};
export default Text;
