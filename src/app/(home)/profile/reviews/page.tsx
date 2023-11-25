import ReviewsMade from "@/components/ReviewsMade";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default async function Page() {
	return (
		<ScrollArea className="col-span-8 bg-cornsilk-500 rounded-3xl row-span-3 relative px-10 py-4">
			<h1 className="text-center p-5 text-4xl font-bold">Reviews Made</h1>
			<Separator className="bg-orange-500 h-1 mb-4" />
			<ReviewsMade />
		</ScrollArea>
	);
}
