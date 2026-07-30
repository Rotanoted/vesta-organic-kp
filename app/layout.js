import "./globals.css";

export const metadata = {
  title: "Коммерческое предложение — редизайн и перенос сайта VESTA ORGANIC",
  description:
    "Аудит текущего сайта vestaorganic.ru, разбор проблем и предложение по редизайну с переносом на MODX Revolution.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
