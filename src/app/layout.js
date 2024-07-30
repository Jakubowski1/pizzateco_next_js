// app/layout.js
import "../../public/globals.css";
export const metadata = {
  title: "PizzaTeco",
  description: "A recipe app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
