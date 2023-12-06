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
				<RestaurantsTable restaurants={restaurants} />
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
