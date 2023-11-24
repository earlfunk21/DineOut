import Image from "next/image";
import React from "react";
import RestaurantImage from "@/assets/image/SampleRestaurant.png";
import { MdOutlineStar } from "react-icons/md";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
	id: number;
	image: string;
	name: string;
	location: string;
	ratings: number;
};

export default function RestaurantCard({
	id,
	image,
	name,
	location,
	ratings,
}: Props) {
	return (
		<Link href={`/restaurant/${id}`}>
			<div className="flex flex-col gap-y-2 hover:shadow-xl p-4 rounded-md cursor-pointer hover:scale-125 transition-transform duration-300 hover:backdrop-blur-sm">
				{
						<Image
							src={
								image
									? `http://localhost:8080/api/images/${image}`
									: RestaurantImage
							}
							alt="Restaurant Image"
							className="object-contain rounded-lg min-h-[160px] max-h-40"
							width={208}
							height={208}
						/>
				}
				<h6 className="text-xl font-bold truncate">{name}</h6>
				<h6 className="text-gray-500 text-sm">{location}</h6>
				<div className="flex">
					{Array.from({ length: 5 }).map((_, i) => (
						<MdOutlineStar
							key={i}
							className={cn(
								"w-5 h-5 text-red-500",
								i + 1 >= ratings && "text-gray-400"
							)}
						/>
					))}
				</div>
			</div>
		</Link>
	);
}
