import { getRestaurants } from "@/app/action";
import FilterNav from "@/components/FilterNav";
import RestaurantCard from "@/components/RestaurantCard";
import React from "react";

export type SearchParams = {
	searchParams?: RestaurantQuery;
};

export default async function page({ searchParams }: SearchParams) {
	const response: ApiResponse = await getRestaurants(searchParams || {});
	const resptaurants = response.content;
	return (
		<div className="h-screen pt-[140px]">
			<div className="container">
				<aside className="fixed h-full top-[140px] w-[250px] max-w-[250px]">
					<FilterNav />
				</aside>
				<div className="ms-[250px] p-14 h-3/4">
					<h1 className="text-2xl font-bold mb-3">Top Restaurants Near Me</h1>
					<div className="grid grid-cols-4 gap-5">
						{resptaurants.map(resptaurant => (
							<RestaurantCard
                key={resptaurant.id}
                id={resptaurant.id}
								image={resptaurant.images[0]}
								name={resptaurant.name}
								location="Cebu City"
								ratings={5}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
