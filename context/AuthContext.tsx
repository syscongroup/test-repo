'use client'
import React, { createContext, useEffect, useMemo, useState } from "react"

interface AuthContextType {
	user: {
		phoneNumber: string;
		email?: string;
		displayName?: string
	} | null;
	setUser: React.Dispatch<React.SetStateAction<AuthContextType["user"]>>;
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [user, setUser] = useState<AuthContextType["user"]>(null)
	useEffect(() => {
		if (typeof localStorage === "object") {
			setUser(JSON.parse(localStorage.getItem('user')!))
		}
	}, [])
	const value = useMemo(() => ({ user, setUser }), [user])
	return (
		<AuthContext.Provider value={value}> {children}</AuthContext.Provider>
	)
}