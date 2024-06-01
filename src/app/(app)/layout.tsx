import { checkAuth } from "@/lib/auth/utils";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import NextAuthProvider from "@/lib/auth/Provider";
import TrpcProvider from "@/lib/trpc/Provider";
import { cookies } from "next/headers";
import Header from "@/components/header";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();
  return (<main>
    <NextAuthProvider>
      <TrpcProvider cookies={cookies().toString()}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex min-h-screen w-full flex-col bg-muted/40">
            {/* <Navbar /> */}
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
              <Header />
              {children}
            </div>

          </main>
        </div>
      </TrpcProvider>
    </NextAuthProvider>

    <Toaster richColors position="top-right" />
  </main>)
}