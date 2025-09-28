import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-px mx-auto max-w-7xl py-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" width={120} height={28} alt="Inara Foundation" />
          </div>
          <p className="text-sm text-neutral-600 max-w-sm">A Section 8 non-profit fostering social welfare, animal care, and environmental stewardship.</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Explore</p>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><Link href="/about" className="hover:text-neutral-900">About</Link></li>
            <li><Link href="/programs" className="hover:text-neutral-900">Programs</Link></li>
            <li><Link href="/impact" className="hover:text-neutral-900">Impact</Link></li>
            <li><Link href="/contact" className="hover:text-neutral-900">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Contact</p>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>Email: <a className="link-brand" href="mailto:inarabysweta@gmail.com">inarabysweta@gmail.com</a></li>
            <li>Phone: <a className="link-brand" href="tel:+917077046262">+91 7077 046 262</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Follow</p>
          <div className="flex gap-4 text-neutral-700">
            <Link className="hover:text-neutral-900" href="#">Facebook</Link>
            <Link className="hover:text-neutral-900" href="#">Instagram</Link>
            <Link className="hover:text-neutral-900" href="#">LinkedIn</Link>
            <Link className="hover:text-neutral-900" href="#">Twitter</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Inara Foundation. All rights reserved.</div>
    </footer>
  );
}


