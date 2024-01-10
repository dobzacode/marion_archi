import { Header } from '@/components/ui/header/header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Marion Deleersnyder | Architecte en Design d'Espace et de Service",
  description:
    "Découvrez le portfolio exceptionnel de Marion Deleersnyder, architecte passionnée, experte en design d'espace et de service. Explorez ses réalisations inspirantes et son parcours professionnel diversifié dans le domaine de l'architecture contemporaine et du design. Contactez-nous pour donner vie à vos espaces avec une créativité exceptionnelle."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={
          ' max-w-screen relative flex  flex-col gap-large overflow-x-hidden bg-primary1 py-small tablet:gap-medium tablet:py-medium'
        }
      >
        <Header className=" flex items-center" size="medium" textColor="primary"></Header>
        {children}
      </body>
    </html>
  );
}
