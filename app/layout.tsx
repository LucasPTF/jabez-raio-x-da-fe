import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  return {
    title: "O Raio-X da Fé | Jabez de Castro",
    description: "Use 21 perguntas para organizar 7 áreas da vida cristã e definir uma prioridade para a semana.",
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
    openGraph: {
      title: "O Raio-X da Fé",
      description: "21 perguntas, 7 áreas e uma prioridade prática para a semana.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: `${origin}/og.png`, width: 1680, height: 945, alt: "O Raio-X da Fé, Método 7E" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "O Raio-X da Fé",
      description: "21 perguntas, 7 áreas e uma prioridade prática para a semana.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
