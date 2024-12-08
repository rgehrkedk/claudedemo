export const metadata = {
  title: 'Aether Theme Switcher',
  description: 'Modern theme switcher with accessibility options',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
