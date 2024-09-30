import UserButon from "@/components/auth/server/user-button";
import Logo from "@/components/common/logo";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-14 max-w-8xl mx-auto items-center px-4">
        <Logo />
        <div className="ml-auto">
          <UserButon />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
