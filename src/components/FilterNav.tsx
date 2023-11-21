"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MdOutlineStar } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { GrRestaurant } from "react-icons/gr";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { RiRestaurantLine } from "react-icons/ri";

export default function FilterNav() {
	return (
		<ScrollArea className="h-full w-full bg-cornsilk-500">
			<div className="p-4 py-14 flex flex-col mb-40">
				<h1 className="font-semibold text-xl mb-5">Quick Filters</h1>
				<div className="flex space-x-2 items-center my-5">
					<MdOutlineStar className="text-xl" />
					<h3 className="font-semibold">Rating</h3>
				</div>
				<Ratings />
				<div className="flex gap-2 mb-5 mt-10 items-center">
					<MdOutlineTableRestaurant className="text-xl" />
					<h3 className="font-semibold">Type</h3>
				</div>
				<Types />
				<div className="flex gap-2 mb-5 mt-10 items-center">
					<GrRestaurant className="text-xl" />
					<h3 className="font-semibold">Tags</h3>
				</div>
				<Tags />
				<div className="flex space-x-2 items-center my-5">
					<RiRestaurantLine className="text-xl" />
					<h3 className="font-semibold">Cuisine</h3>
				</div>
				<Cuisines />
			</div>
		</ScrollArea>
	);
}

const tagItems = [
	{ id: 1, name: "Buffet" },
	{ id: 2, name: "Fancy" },
	{ id: 3, name: "Vegetarian" },
	{ id: 4, name: "Fast Food" },
	{ id: 5, name: "Seafood" },
];

function Tags() {
	const searchParams = useSearchParams();
	const [checkedValues, setCheckedValues] = React.useState<string[]>([]);
	const { replace } = useRouter();
	const pathname = usePathname();

	React.useEffect(() => {
		const params = new URLSearchParams(searchParams);
		params.set("tags", checkedValues.toString());
		if (checkedValues.length === 0) {
			params.delete("tags");
		}
		replace(`${pathname}?${params.toString()}`);
	}, [checkedValues]);

	const handleCheckboxChange = (isChecked: CheckedState, value: string) => {
		if (isChecked) {
			setCheckedValues(prevValues => [...prevValues, value]);
		} else {
			setCheckedValues(prevValues => prevValues.filter(val => val !== value));
		}
	};

	return (
		<div className="gap-y-3 mb-10 flex flex-col">
			{tagItems.map(item => (
				<div
					className="flex items-center space-x-2"
					key={item.id}>
					<Checkbox
						name="tags"
						value={item.name}
						id={item.name}
						onCheckedChange={isChecked =>
							handleCheckboxChange(isChecked, item.name)
						}
						className="data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
					/>
					<Label
						htmlFor={item.name}
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
						{item.name}
					</Label>
				</div>
			))}
		</div>
	);
}

function Types() {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();
	const params = new URLSearchParams(searchParams);

	const handleType = (value: string) => {
		if (value === "All") {
			params.delete("type");
		} else {
			params.set("type", value);
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<RadioGroup
			defaultValue={params.get("type") || "All"}
			onValueChange={handleType}
			className="gap-y-3 mb-4">
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="All"
					id="All"
				/>
				<Label
					htmlFor="All"
					className="cursor-pointer">
					All
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="Cafe"
					id="Cafe"
				/>
				<Label
					htmlFor="Cafe"
					className="cursor-pointer">
					Cafe
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="Bar"
					id="Bar"
				/>
				<Label
					htmlFor="Bar"
					className="cursor-pointer">
					Bar
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="Bakery"
					id="Bakery"
				/>
				<Label
					htmlFor="Bakery"
					className="cursor-pointer">
					Bakery
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="Pizzeria"
					id="Pizzeria"
				/>
				<Label
					htmlFor="Pizzeria"
					className="cursor-pointer">
					Pizzeria
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="Outdoor"
					id="Outdoor"
				/>
				<Label
					htmlFor="Outdoor"
					className="cursor-pointer">
					Outdoor
				</Label>
			</div>
		</RadioGroup>
	);
}

function Ratings() {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();
	const params = new URLSearchParams(searchParams);

	const handleRatings = (value: string) => {
		if (value === "All") {
			params.delete("ratings");
		} else {
			params.set("ratings", value);
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<RadioGroup
			defaultValue={params.get("ratings") || "All"}
			onValueChange={handleRatings}
			className="gap-y-3 mb-4">
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="All"
					id="All"
				/>
				<Label
					htmlFor="All"
					className="cursor-pointer">
					All
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="5"
					id="5"
				/>
				<Label
					htmlFor="5"
					className="cursor-pointer">
					5 star
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="4"
					id="4"
				/>
				<Label
					htmlFor="4"
					className="cursor-pointer">
					4 star
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="3"
					id="3"
				/>
				<Label
					htmlFor="3"
					className="cursor-pointer">
					3 star
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="2"
					id="2"
				/>
				<Label
					htmlFor="2"
					className="cursor-pointer">
					2 star
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="1"
					id="1"
				/>
				<Label
					htmlFor="1"
					className="cursor-pointer">
					1 star
				</Label>
			</div>
		</RadioGroup>
	);
}

function Cuisines() {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();
	const params = new URLSearchParams(searchParams);

	const handleRatings = (value: string) => {
		if (value === "All") {
			params.delete("cuisine");
		} else {
			params.set("cuisine", value);
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<RadioGroup
			defaultValue={params.get("type") || "All"}
			onValueChange={handleRatings}
			className="gap-y-3 mb-4">
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="All"
					id="All"
				/>
				<Label
					htmlFor="All"
					className="cursor-pointer">
					All
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="Filipino"
					id="Filipino"
				/>
				<Label
					htmlFor="Filipino"
					className="cursor-pointer">
					Filipino
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="Indian"
					id="Indian"
				/>
				<Label
					htmlFor="Indian"
					className="cursor-pointer">
					Indian
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="Japanese"
					id="Japanese"
				/>
				<Label
					htmlFor="Japanese"
					className="cursor-pointer">
					Japanese
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="Chinese"
					id="Chinese"
				/>
				<Label
					htmlFor="Chinese"
					className="cursor-pointer">
					Chinese
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="Korean"
					id="Korean"
				/>
				<Label
					htmlFor="Korean"
					className="cursor-pointer">
					Korean
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="Italian"
					id="Italian"
				/>
				<Label
					htmlFor="Italian"
					className="cursor-pointer">
					Italian
				</Label>
			</div>
		</RadioGroup>
	);
}
