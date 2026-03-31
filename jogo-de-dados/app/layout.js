import "./globals.css";

export const metadata = {
  title: "Jogo de Dados",
  description: "Jogo de dados em Next.js com HTML, CSS e JavaScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
