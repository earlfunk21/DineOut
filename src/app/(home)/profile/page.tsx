import UserDetails from "@/app/(home)/profile/UserDetails";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function Profile() {
	return (
		<div className="w-full px-10">
			<h1 className="text-center p-5 text-4xl font-bold">Profile</h1>
			<Separator className="bg-orange-500 h-1" />
			<UserDetails />
		</div>
	);
}
