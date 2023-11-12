import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Q&R|Home</title>
        <link rel="icon" href="/images/Q.png" />
      </head>
      <body
        className=" w-[100vw] min-h-screen md:px-5"
        style={{ backgroundColor: "#F4D839", overflowX: "hidden" }}
      >
        <div className=" md:px-20 w-full ">{children}</div>
      </body>
    </html>
  );
}
