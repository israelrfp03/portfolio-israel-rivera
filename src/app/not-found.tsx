import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 - Página no encontrada",
  description: "La página que buscas no existe o se ha movido.",
};

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-display text-8xl font-bold text-foreground">404</p>
      <p className="max-w-md text-muted-foreground">
        La página que buscas no existe o se ha movido.
      </p>
      <Link href="/">
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
