import { SearchParams } from "@/app/(home)/discover/page";
import { getRestaurants } from "@/app/action";
import AddRestaurantButton from "@/components/AddRestaurantButton";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import RestaurantsTable from "@/components/RestaurantsTable";
import { Button } from "@/components/ui/button";
import React from "react";

export default async function DashboardPage({ searchParams }: SearchParams) {
	const paginated: ApiResponse = await getRestaurants(searchParams || {});
	const restaurants = paginated.content;

	return (
		<div className="min-h-screen pt-[140px] flex flex-col bg-orange-500">
			<div className="container flex flex-col h-full">
				<h1 className="text-white text-4xl text-center font-bold">
					Restaurant Dashboard
				</h1>
				<div className="flex justify-between">
					<AddRestaurantButton />
					<Button
						variant="outline"
						className="bg-transparent text-white">
						Export to PDF
					</Button>
				</div>
				<table className="my-4 bg-cornsilk-500 rounded-lg">
					<thead className="border-b-4 border-orange-500">
						<tr>
							<th className="border-r-4 border-orange-500 p-2 ">ID</th>
							<th className="border-r-4 border-orange-500 p-2">NAME</th>
							<th className="border-r-4 border-orange-500 p-2">HOURS</th>
							<th className="border-r-4 border-orange-500 p-2">Tags</th>
							<th className="border-r-4 border-orange-500 p-2">Location</th>
							<th className="border-r-4 border-orange-500 p-2">Rating</th>
							<th className="p-2">Action</th>
						</tr>
					</thead>
					<tbody>
						{restaurants.map(restaurant => (
							<RestaurantsTable restaurant={restaurant}/>
						))}
					</tbody>
				</table>
			</div>
			<div className="bg-orange-500">
				<Pagination
					totalPages={paginated.totalPages}
					page={Number(searchParams?.page) || 1}
				/>
			</div>
			<Footer />
		</div>
	);
}
