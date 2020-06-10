package com.bestbuy.model;

/* By Jitendra Patel */

public class CategoriesAPIRequest {

    public static CategoriesPojo getAPICategoriesRequest(String name, String id) {

        CategoriesPojo categoriesPojo = new CategoriesPojo();

        if (name != null) {
            categoriesPojo.setName(name);
        }
        if (id != null) {
            categoriesPojo.setId(id);
        }
        return categoriesPojo;
    }

}