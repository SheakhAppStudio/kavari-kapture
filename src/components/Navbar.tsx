import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-primary flex items-center justify-between p-4 relative">
      <Link href="/" className="flex items-center">
        <div className="relative h-28 w-80 -my-6 -ml-4">
          <Image 
            src="/images/kavari-kapture-logo.png" 
            alt="KAVARI Kapture" 
            fill 
            style={{objectFit: 'contain'}}
            priority
            className="object-left"
          />
        </div>
      </Link>
    </div>
  );
};

export default Navbar; 