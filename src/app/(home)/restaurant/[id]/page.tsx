import { getRestaurant } from "@/app/action";
import ImageContainer from "@/components/ImageContainer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { MdOutlineStar } from "react-icons/md";

export default async function Page({
	params: { id },
}: {
	params: { id: number };
}) {
	const restaurant = await getRestaurant(id);

	return (
		<div className="h-screen pt-[140px] flex justify-center items-center bg-orange-500">
			<div className="container h-full py-10">
				<div className="h-full grid grid-cols-12 gap-x-12">
					<div className="col-span-5">
						<ImageContainer />
					</div>
					<div className="col-span-4 flex flex-col justify-between">
						<div>
							<h1 className="text-white text-4xl font-bold mb-3">
								{restaurant.name}
							</h1>
							<div className="flex gap-x-3 mb-3">
								<h3 className="text-gray-500 text-2xl">Ratings</h3>
								<div className="flex items-center">
									{Array.from({ length: 5 }).map((_, i) => (
										<MdOutlineStar
											key={i}
											className="text-white text-2xl"
										/>
									))}
								</div>
							</div>
							<h3 className="text-gray-500 text-xl mb-3 font-semibold">
								{restaurant.serviceHours}
							</h3>
							<div className="flex gap-x-3 mb-3">
								<h3 className="text-2xl text-red-500">Tags:</h3>
								{restaurant.tags.map(tag => (
									<Button
										variant="outline"
										className="bg-transparent border-2 font-bold border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
										key={tag.id}>
										{tag.name}
									</Button>
								))}
							</div>
							<p className="font-bold text-lg  overflow-y-auto max-h-96 whitespace-pre-line">
								{restaurant.description}
							</p>
						</div>
						<div className="flex gap-x-12">
							<Button
								variant="primary"
								size="lg"
								className="w-full drop-shadow-md">
								Reserve
							</Button>
							<Button
								size="lg"
								className="w-full drop-shadow-md bg-orange-500 text-red-500 underline font-semibold underline-offset-2 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out">
								VIEWS REVIEWS
							</Button>
						</div>
					</div>
					<div className="col-span-3 bg-indigo-500">
            <h1 className="text-4xl font-bold text-white"> ON GOING </h1>
          </div>
				</div>
			</div>
		</div>
	);
}
