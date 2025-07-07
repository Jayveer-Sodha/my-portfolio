const { BLACKHOLE_ALLOWED_ROUTES } = require("@/lib/constants");
const { usePathname } = require("next/navigation");

const useBlackhole = () => {
  const pathname = usePathname();
  const isBlackHoleVisible = BLACKHOLE_ALLOWED_ROUTES.includes(pathname);
  return { isBlackHoleVisible };
};

export default useBlackhole;
