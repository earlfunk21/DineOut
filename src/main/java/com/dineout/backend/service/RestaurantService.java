package com.dineout.backend.service;


import com.dineout.backend.dto.response.RestaurantResponse;
import com.dineout.backend.entity.Cuisine;
import com.dineout.backend.entity.Restaurant;
import com.dineout.backend.entity.Review;
import com.dineout.backend.entity.Type;
import com.dineout.backend.repository.RestaurantRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import jakarta.persistence.criteria.Subquery;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;

    public Restaurant saveRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public Restaurant getRestaurantById(Long restaurantId) {
        return restaurantRepository.findById(restaurantId)
                .orElseThrow(() -> new EntityNotFoundException("Restaurant not found"));
    }

    public Page<RestaurantResponse> getRestaurants(List<String> tagNames, String cuisineName, String typeName,
                                                   Double rating, String searchQuery,
                                                   Pageable pageable) {
        Specification<Restaurant> spec = withFilters(tagNames, cuisineName, typeName, rating, searchQuery);
        Page<Restaurant> restaurantPage = restaurantRepository.findAll(spec, pageable);
        return restaurantPage.map(RestaurantResponse::new);
    }

    public void deleteRestaurantById(Long restaurantId) {
        Restaurant restaurant = getRestaurantById(restaurantId);
        restaurantRepository.delete(restaurant);
    }

    public List<Restaurant> getRestaurantsByTagId(Long tagId) {
        return restaurantRepository.findRestaurantsByTagsId(tagId);
    }

    public Specification<Restaurant> withFilters(List<String> tagNames, String cuisineName, String typeName,
                                                 Double minAvgRating, String searchQuery) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (!tagNames.isEmpty()) {
                predicates.add(root.join("tags").get("name").in(tagNames));
            }

            if (cuisineName != null && !cuisineName.isEmpty()) {
                Join<Restaurant, Cuisine> cuisineJoin = root.join("cuisine");
                predicates.add(criteriaBuilder.equal(cuisineJoin.get("name"), cuisineName));
            }

            if (typeName != null && !typeName.isEmpty()) {
                Join<Restaurant, Type> typeJoin = root.join("type");
                predicates.add(criteriaBuilder.equal(typeJoin.get("name"), typeName));
            }

            if (minAvgRating != null) {
                Subquery<Double> subquery = query.subquery(Double.class);
                Root<Review> subRoot = subquery.from(Review.class);
                subquery.select(criteriaBuilder.avg(subRoot.get("rating")))
                        .where(criteriaBuilder.equal(subRoot.get("restaurant"), root));

                predicates.add(criteriaBuilder.greaterThanOrEqualTo(subquery, minAvgRating));
            }

            // Search by name or location
            if (searchQuery != null && !searchQuery.isEmpty()) {
                predicates.add(criteriaBuilder.or(
                        criteriaBuilder.like(root.get("name"), "%" + searchQuery + "%"),
                        criteriaBuilder.like(root.get("location"), "%" + searchQuery + "%")
                ));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public RestaurantResponse getRandomEntity() {
        long count = restaurantRepository.count();
        Random random = new Random();
        int randomIndex = random.nextInt((int) count);
        List<Restaurant> restaurants = restaurantRepository.findAll(PageRequest.of(randomIndex, 1)).getContent();
        return restaurants.isEmpty() ? null : new RestaurantResponse(restaurants.get(0));
    }
}
