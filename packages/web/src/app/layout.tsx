import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { TopNavigation } from "@/layout/navigation/TopNavigation";
import { SideNavigation } from "@/layout/navigation/SideNavigation";
import { AIAssistantWrapper } from "@/layout/AIAssistantWrapper";
import { AIAssistantProvider } from "@/context/AIAssistantContext";
import { AuthProvider } from "@/context/AuthProvider";

// 使用本地字体，避免Google Fonts加载问题
const inter = {
  className: 'font-sans',
};

export const metadata: Metadata = {
  title: "AutoDev Workbench",
  description: "AI-Powered AutoDevelopment Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <AuthProvider>
          <AIAssistantProvider>
            <div className="min-h-screen bg-white flex flex-col">
              <TopNavigation />
              <div className="flex flex-1">
                <SideNavigation />
                <main className="flex-1 overflow-auto">
                  {children}
                </main>
              </div>
              <AIAssistantWrapper />
            </div>
            <Toaster position="top-right" />
          </AIAssistantProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
