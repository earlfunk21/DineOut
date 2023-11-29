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
import useFilterParams from "@/components/hooks/useFilterParams";
import { getTags, getCuisines, getTypes } from "@/app/action";

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

function FilterGroup({
	items,
	paramName,
}: {
	items: { id: number; name: string }[];
	paramName: string;
}) {
	const { defaultValue, handleFilterChange } = useFilterParams(paramName);

	return (
		<RadioGroup
			defaultValue={defaultValue}
			onValueChange={handleFilterChange}
			className="gap-y-3 mb-4">
        <div
					className="flex items-center space-x-2"
					key="All">
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
			{items.map(item => (
				<div
					className="flex items-center space-x-2"
					key={item.id}>
					<RadioGroupItem
						value={item.name}
						id={item.name}
					/>
					<Label
						htmlFor={item.name}
						className="cursor-pointer">
						{item.name}
					</Label>
				</div>
			))}
		</RadioGroup>
	);
}

type FilterType = {
	id: number;
	name: string;
};

function Tags() {
	const searchParams = useSearchParams();
	const [checkedValues, setCheckedValues] = React.useState<string[]>([]);
	const { replace } = useRouter();
	const pathname = usePathname();
	const [items, setItems] = React.useState<FilterType[]>([]);

	React.useEffect(() => {
		const params = new URLSearchParams(searchParams);
		params.set("tags", checkedValues.toString());
		if (checkedValues.length === 0) {
			params.delete("tags");
		}
		replace(`${pathname}?${params.toString()}`);
	}, [checkedValues]);

  
	React.useEffect(() => {
		const tagsParam = searchParams.get("tags");
		if (tagsParam) {
			const tags = tagsParam.split(",");
			setCheckedValues(tags);
		}
		const fetchItems = async () => {
			await getTags().then(data => setItems(data));
		};
		fetchItems();
	}, []);

	const handleCheckboxChange = (isChecked: CheckedState, value: string) => {
		if (isChecked) {
			setCheckedValues(prevValues => [...prevValues, value]);
		} else {
			setCheckedValues(prevValues => prevValues.filter(val => val !== value));
		}
	};

	return (
		<div className="gap-y-3 mb-10 flex flex-col">
			{items.map(item => (
				<div
					className="flex items-center space-x-2"
					key={item.id}>
					<Checkbox
						name="tags"
						value={item.name}
						id={item.name}
						checked={checkedValues.includes(item.name)}
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

function Ratings() {
	return (
		<FilterGroup
			items={[
				{ id: 2, name: "5" },
				{ id: 3, name: "4" },
				{ id: 4, name: "3" },
				{ id: 5, name: "2" },
				{ id: 6, name: "1" },
			]}
			paramName="ratings"
		/>
	);
}

function Types() {
	const [items, setItems] = React.useState<FilterType[]>([]);

	React.useEffect(() => {
		const fetchItems = async () => {
			await getTypes().then(data => setItems(data));
		};

		fetchItems();
	}, []);

	return (
		<FilterGroup
			items={items}
			paramName="type"
		/>
	);
}

function Cuisines() {
	const [items, setItems] = React.useState<FilterType[]>([]);

	React.useEffect(() => {
		const fetchItems = async () => {
			await getCuisines().then(data => setItems(data));
		};

		fetchItems();
	}, []);

	return (
		<FilterGroup
			items={items}
			paramName="cuisine"
		/>
	);
}
