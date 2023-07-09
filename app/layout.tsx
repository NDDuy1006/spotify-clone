import './globals.css';
import { Figtree } from 'next/font/google';

import Sidebar from '@/components/Sidebar';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToasterProvider from '@/providers/ToasterProvider';
import getSongsByUserId from '@/actions/getSongsByUserId';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: "Spotify Clone",
  description: "Mesmerizing melody is here!",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const userSongs = await getSongsByUserId();
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <div className="flex h-full gap-4">
              <Sidebar songs={userSongs} />
              <main className="h-full flex-1 overflow-y-auto py-4 pr-4">
                {children}
              </main>
            </div>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
};