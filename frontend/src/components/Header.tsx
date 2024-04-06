import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <div className="bg-gray-950 py-6 overflow-x-clip">
  <div className="px-5 md:container mx-auto flex justify-between items-center">
    <Link to="/" className="flex items-center">
      <img src="https://t4.ftcdn.net/jpg/03/33/10/15/360_F_333101512_WwHCJ5KYgAIezclCKjCTFwT7lWauNxbk.jpg" alt="Logo" className="h-100 md:h-20 mr-2 object-cover" />
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">UniMarker</p>
    </Link>
    <nav className="text-white flex items-center">
      <Link to="/about" className="mr-4 hover:text-gray-300">About</Link>
      <Link to="/features" className="mr-4 hover:text-gray-300">Features</Link>
      <Link to="/contact" className="mr-4 hover:text-gray-300">Contact</Link>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </nav>
  </div>
</div>
  );
};

export default Header;
