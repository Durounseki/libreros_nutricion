import { useWindowSize } from "../hooks/useWindowSize";
import DesktopHeader from "../components/DesktopHeader";
import MobileHeader from "../components/MobileHeader";

const MOBILE_BREAKPOINT = 600;

function Header() {
  const { width } = useWindowSize();
  return (
    <>{width < MOBILE_BREAKPOINT ? <MobileHeader /> : <DesktopHeader />}</>
  );
}

export default Header;
