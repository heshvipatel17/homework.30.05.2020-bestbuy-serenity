package com.bestbuy.model;

/* By Jitendra Patel */

public class ServicesAPIRequest {

    public static ServicesPojo getAPIServiceRequest(String name) {

        ServicesPojo servicesPojo = new ServicesPojo();
        if (name != null) {
            servicesPojo.setName(name);
        }
        return servicesPojo;
    }
}