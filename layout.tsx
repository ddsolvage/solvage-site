export const metadata = {
  title: "Solvage™ — One partner. Unlimited digital solutions.",
  description: "Websites, SEO, branding, ads & automation. Fast, affordable, tailored."
};
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
