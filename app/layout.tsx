import AlertBanner from '@/components/sanity/alert-banner';
import type { Metadata } from 'next';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';
import './globals.css';

export const metadata: Metadata = {
  title: "MTONARCHI | Marion Deleersnyder - Architecte de l'Espace et du Service",
  description:
    "Découvrez l'univers créatif de Marion Deleersnyder, architecte passionnée chez MTONARCHI. Explorez son expertise en design d'espace et de service à travers une collection inspirante. Contactez-nous pour insuffler une créativité exceptionnelle à vos projets."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={
          ' max-w-screen relative flex min-h-screen flex-col gap-large overflow-x-hidden bg-primary1 py-small tablet:gap-medium tablet:py-medium laptop:py-sub-large'
        }
      >
        {draftMode().isEnabled && <AlertBanner />}
        {children}
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
