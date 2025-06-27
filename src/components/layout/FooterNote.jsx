const { default: Text } = require("../ui/Text");

const FooterNote = () => {
  return (
    <div className="lg:flex justify-center items-center align-middle mt-5 lg:mt-1">
      <Text classNames="!mt-0">
        <span>©2025 – All Rights Reserved</span>
      </Text>
      <span className="hidden lg:block text-5xl align-middle mx-2">·</span>
      <Text classNames="!mt-0">
        <span>Available For Freelance Work</span>
      </Text>
    </div>
  );
};

export default FooterNote;
