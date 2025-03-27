import ClerkProviderWrapper from "@/components/ClerkProviderWrapper";
import DashboardNav from "@/components/DashboardNav";

export default function RootLayout({ children }) {
  return (
    <body className={`antialiased`}>
      <ClerkProviderWrapper>
        
        <DashboardNav />
        {children}</ClerkProviderWrapper>
    </body>
  );
}
