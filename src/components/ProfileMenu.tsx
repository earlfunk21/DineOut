"use client";
import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMiniUserCircle } from "react-icons/hi2";

import { cn } from "@/lib/utils";
import useAuth from "@/components/hooks/useAuth";
import Link from "next/link";

export default function ProfileMenu() {
	const { user, onLogout } = useAuth();
	const [open, setOpen] = React.useState(false);

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}>
			<PopoverTrigger className="bg-red-500 hover:bg-red-400 cursor-pointer flex text-white rounded-md p-2 drop-shadow-md">
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
						<span className="text-red-950 font-bold">
							{" "}
							@{user.userDetails?.username}
						</span>
					</h3>
					<Link
						href="/profile"
						className="flex hover:bg-red-100 transition-colors duration-300 p-3 cursor-pointer rounded-md">
						Profile
					</Link>
					<Link
						href="/login"
						className="flex hover:bg-red-100 transition-colors duration-300 p-3 cursor-pointer rounded-md"
						onClick={onLogout}>
						Logout
					</Link>
				</div>
			</PopoverContent>
		</Popover>
	);
}
