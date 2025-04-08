import { Link } from 'wouter';

const MobileHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50 md:hidden">
      <div className="flex justify-center items-center px-4 py-3">
        <Link href="/">
          <div className="flex items-center">
            <img
              src="/Logo-13.png"
              alt="House of Digital Business"
              className="h-12 w-auto"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default MobileHeader;