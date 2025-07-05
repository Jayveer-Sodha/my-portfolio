export const HOVER_SCALE_ANIMATION_CLASSNAME =
  "block transform transition-transform duration-200 ease-in-out " +
  "hover:text-[#b49bff] hover:scale-115 " +
  "active:text-[#b49bff] active:scale-105 " +
  "focus:text-[#b49bff] focus:scale-105";

export const TEXT_GRADIENT_CLASSNAME =
  "bg-gradient-to-r from-[#5b68df] to-[#00ff2f]  bg-clip-text text-transparent";

export const SECTION_TITLE_CLASSNAME =
  "text-center lg:text-justify text-2xl font-medium lg:text-4xl mt-4";

export const SECTION_SUB_TITLE_CLASSNAME =
  "text-lg lg:text-4xl font-medium text-center lg:text-justify";

export const SECTION_PTAG_CLASSNAME =
  "text-lg text-gray-400 lg:text-2xl text-center mx-auto lg:text-xl text-center mt-4";

export const TOKEN_URL = "https://bitbucket.org/site/oauth2/access_token";

export const REDIRECT_URI = process.env.REDIRECT_URI;

export const BASIC_AUTH = `Basic ${Buffer.from(
  `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
).toString("base64")}`;
