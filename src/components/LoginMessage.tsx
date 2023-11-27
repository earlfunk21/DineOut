import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import React from "react";

export default function LoginMessage() {
	return toast({
		title: "Login Required",
		description: (
			<p>
				You have to login first! <br />
				Click the button to login
			</p>
		),
		variant: "destructive",
		action: (
			<Link href="/login">
				<Button
					variant="outline"
					className="bg-transparent">
					Login
				</Button>
			</Link>
		),
	});
}
