import { AuthProvider } from "@/components/hooks/useAuth";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
	return <AuthProvider>{children}</AuthProvider>;
}
