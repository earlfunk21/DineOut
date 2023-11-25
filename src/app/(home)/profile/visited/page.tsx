import { Separator } from "@/components/ui/separator";
import React from "react";

export default function RestaurantVisited() {
	return (
		<div className="col-span-8 bg-cornsilk-500 rounded-3xl row-span-2 relative">
			<div className="w-full px-10">
				<h1 className="text-center p-5 text-4xl font-bold">
					Restaurant Visited
				</h1>
				<Separator className="bg-orange-500 h-1" />
			</div>
		</div>
	);
}
