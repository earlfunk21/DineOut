"use client"
import { deleteRestaurant } from "@/app/action";
import { Button } from "@/components/ui/button";
import React from "react";

export default function RestaurantsTable({
	restaurant,
}: {
	restaurant: Restaurant;
}) {

  
	const handleDeleteRestaurant = async (restaurantId: number) => {
		await deleteRestaurant(restaurantId);
	};

	return (
		<tr
			className="border-b-4 border-orange-500"
			key={restaurant.id}>
			<td className="text-center border-r-4 border-orange-500">
				{restaurant.id}
			</td>
			<td className="text-center border-r-4 border-orange-500">
				{restaurant.name}
			</td>
			<td className="text-center border-r-4 border-orange-500">
				{restaurant.serviceHours}
			</td>

			<td className="border-r-4 border-orange-500">
				<div className="h-full w-full flex flex-col items-center gap-y-2 px-2 py-4">
					{restaurant.tags.map(tag => (
						<Button
							variant="primary"
							size="sm"
							className="rounded-full px-5"
							key={tag.id}>
							{tag.name}
						</Button>
					))}
				</div>
			</td>
			<td className="text-center border-r-4 border-orange-500">
				{restaurant.address}
			</td>
			<td className="text-center border-r-4 border-orange-500">
				{restaurant.ratings}
			</td>
			<td>
				<div className="h-full w-full flex flex-col items-center gap-y-2 px-2 py-4">
					<Button
						size="sm"
						className="rounded-full px-5 bg-indigo-500">
						Link
					</Button>
					<Button
						size="sm"
						className="rounded-full px-5 bg-[#55adf7]">
						Update
					</Button>
					<Button
						size="sm"
						className="rounded-full px-5 bg-[#e25932]"
						>
						Delete
					</Button>
				</div>
			</td>
		</tr>
	);
}
