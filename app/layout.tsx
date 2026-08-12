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
    description: "Descubra onde sua vida cristã está travada e saia com um primeiro passo claro para os próximos 7 dias.",
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
    openGraph: {
      title: "O Raio-X da Fé",
      description: "Descubra onde sua vida cristã está travada.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: `${origin}/og.png`, width: 1680, height: 945, alt: "O Raio-X da Fé — Método 7E" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "O Raio-X da Fé",
      description: "Descubra onde sua vida cristã está travada.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

