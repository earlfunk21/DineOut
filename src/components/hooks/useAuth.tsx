"use client";
import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import Cookies from "js-cookie";

enum Role {
	USER,
	ADMIN,
}

type User = {
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

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const defaultUserValue = {
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
			const storedUser = Cookies.get("user");
			if (storedUser) {
				const parsedUser: User = JSON.parse(storedUser);
				setUser(parsedUser);
			}
			setIsLoading(false);
		};

		setTimeout(updateUser, 500);
	}, []);

	const onLogin = (username: string, token: string, role: Role) => {
		const newUser: User = { username, token, role, isAuthenticated: true };
		setUser(newUser);
		Cookies.set("user", JSON.stringify(newUser), { expires: 7 });
	};

	const onLogout = () => {
    setIsLoading(true);
		setTimeout(() => {
			setUser(defaultUserValue);
			Cookies.remove("user");
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
