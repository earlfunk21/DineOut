"use server";

export async function getRestaurants(query: RestaurantQuery) {
	const params = new URLSearchParams();

	if (Array.isArray(query.tags)) {
		query.tags.forEach(tag => params.append("tags", tag));
	} else if (query.tags) {
		params.append("tags", query.tags);
	}
	if (query.ratings) {
		params.set("ratings", query.ratings);
	}
	if (query.cuisine) {
		params.set("cuisine", query.cuisine);
	}
	if (query.type) {
		params.set("type", query.type);
	}
	if (query.page) {
		params.set("page", query.page);
	}

	const response = await fetch(
		`http://localhost:8080/api/restaurants?${params.toString()}`,
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

export async function getRestaurant(id: number): Promise<Restaurant> {
	const response = await fetch(`http://localhost:8080/api/restaurants/${id}`, {
		method: "GET",
		cache: "no-cache",
	});
	return response.json();
}
