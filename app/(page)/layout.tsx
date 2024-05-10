import { Header } from '@/components/ui/header/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        className=" flex max-h-screen items-center"
        size="medium"
        textColor="primary"
      ></Header>
      {children}
    </>
  );
}
