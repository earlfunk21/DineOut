"use client";
import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMiniUserCircle } from "react-icons/hi2";

import { cn } from "@/lib/utils";
import useAuth from "@/components/hooks/useAuth";
import { Separator } from "@/components/ui/separator";

export default function ProfileMenu() {
	const { user, onLogout } = useAuth();
	const [open, setOpen] = React.useState(false);
	return (
		<Popover
			open={open}
			onOpenChange={setOpen}>
			<PopoverTrigger className="bg-red-500 hover:bg-red-400 cursor-pointer flex text-white rounded-md p-2">
				<HiMiniUserCircle className="text-4xl " />
				<IoMdArrowDropdown
					className={cn(
						"text-4xl transform duration-300",
						open && "rotate-180"
					)}
				/>
			</PopoverTrigger>
			<PopoverContent align="end">
				<div className="flex flex-col select-none ">
					<h3 className="p-3">
						Welcome,
						<span className="text-red-950 font-bold"> {user.username}!</span>
					</h3>
					<Separator />
					<div
						className="flex hover:bg-cornsilk-400 transition-colors duration-300 p-3 cursor-pointer"
						onClick={onLogout}>
						Logout
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
