import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="VendSavvy LLC" width={32} height={32} className="rounded-full" />
              <span className="font-bold text-lg">VendSavvy LLC</span>
            </div>
            <p className="text-sm text-foreground/60 max-w-xs">
              The all-in-one platform for vending machine operators to track sales, manage inventory, and grow their business.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="/features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/signup" className="hover:text-foreground transition-colors">Start Free Trial</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li>
  <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
    Privacy Policy
  </Link>
</li>

             <li>
  <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
    Terms of Service
  </Link>
</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
          <p>© 2025 VendSavvy LLC. All rights reserved.</p>
          <p>Built for vending operators who mean business.</p>
        </div>
      </div>
    </footer>
  );
}
