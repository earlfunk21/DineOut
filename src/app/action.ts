"use server";

import { UserDetails } from "@/components/hooks/useAuth";
import { revalidatePath, revalidateTag } from "next/cache";

export async function getRestaurants(query: RestaurantQuery) {
	const page = Number(query.page) || 0;
	const params = new URLSearchParams({
		tags: Array.isArray(query.tags) ? query.tags.join(",") : query.tags || "",
		ratings: query.ratings || "",
		cuisine: query.cuisine || "",
		type: query.type || "",
		page: String(page - 1) || "",
	});

	const url = `http://localhost:8080/api/restaurants?${params.toString()}`;

	const response = await fetch(url, {
		method: "GET",
		cache: "no-cache",
	});

	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}

	return response.json();
}

export async function getRestaurant(id: number): Promise<Restaurant> {
	const response = await fetch(`http://localhost:8080/api/restaurants/${id}`, {
		method: "GET",
		cache: "no-cache",
	});
	return response.json();
}

export type Review = {
	id: number;
	rating: number;
	comment: string;
	date: string;
	restaurant: Restaurant;
	user: UserDetails;
};

export async function getReviewsByRestaurantId(id: number) {
	const response = await fetch(
		`http://localhost:8080/api/restaurants/${id}/reviews`,
		{
			method: "GET",
		}
	);
	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}
	return response.json();
}

export type AddReviewProps = {
	rating?: number;
	comment?: string;
	userId?: number;
};

export async function addReviews(id: number, props: AddReviewProps) {
	const response = await fetch(
		`http://localhost:8080/api/restaurants/${id}/reviews`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...props,
			}),
		}
	);
	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}
	revalidatePath("/restaurant/[]", "page");
	return response.json();
}

export type ReservationProps = {
	restaurantId: number;
	userId?: number;
	reservationDate: Date | undefined;
	note: string;
	reservationTime: string;
	countPeople: number;
};

export async function addReservations(props: ReservationProps) {
	const response = await fetch(`http://localhost:8080/api/reservations`, {
		method: "POST",
		cache: "no-cache",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...props,
		}),
	});
	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}
	return response.json();
}

export async function getReviewsByUserId(id: number | undefined, page: number) {
	const response = await fetch(
		`http://localhost:8080/api/users/${id}/reviews?page=${page}`,
		{
			method: "GET",
			cache: "no-cache",
		}
	);
	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}
	return response.json();
}

export async function getRandomRestaurant() {
	const response = await fetch("http://localhost:8080/api/restaurants/random", {
		method: "GET",
		cache: "no-cache",
	});
	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}
	return await response.json();
}

export async function revalidateRandomRestaurant() {
	revalidateTag("randomRestaurant");
}
