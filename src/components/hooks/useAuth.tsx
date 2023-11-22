"use client";
import React, {
  ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { getUserCookie, removeUserCookie, setUserCookie } from "@/lib/cookies";

const AuthContext = createContext<AuthContextType | undefined>(undefined);


enum Role {
	USER,
	ADMIN,
}

export type User = {
	username?: string | null;
	isAuthenticated: boolean;
	token?: string | null;
	role?: Role;
};

type AuthProviderProps = {
	children: ReactNode;
};

type AuthContextType = {
	user: User;
	onLogin: (username: string, token: string, role: Role) => void;
	onLogout: () => void;
	isLoading: boolean;
};

export const defaultUserValue = {
	username: null,
	token: null,
	role: Role.USER,
	isAuthenticated: false,
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User>(defaultUserValue);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const updateUser = async () => {
			const cookiesUser = await getUserCookie();
			setUser(cookiesUser);
			setIsLoading(false);
		};

		updateUser();
	}, []);

	const onLogin = (username: string, token: string, role: Role) => {
		const newUser: User = { username, token, role, isAuthenticated: true };
		setUser(newUser);
    setUserCookie(newUser);
	};

	const onLogout = () => {
		setIsLoading(true);
		setTimeout(() => {
			setUser(defaultUserValue);
			removeUserCookie();
			setIsLoading(false);
		}, 500);
	};

	const value: AuthContextType = { user, onLogin, onLogout, isLoading };
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth(): AuthContextType {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
