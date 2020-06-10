package com.bestbuy.crudtest;

/* By Jitendra Patel */

import com.bestbuy.steps.ServicesSteps;
import com.bestbuy.testbase.TestBase;
import io.restassured.response.ValidatableResponse;
import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Steps;
import net.thucydides.core.annotations.Title;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;


@RunWith(SerenityRunner.class)
public class ServicesCRUDTest extends TestBase {

    static String name = "Prime Testing";
    static int serviceId ;

    @Steps
    ServicesSteps servicesSteps;

    @Title("This test will create a new services")
    @Test
    public void test001(){

        ValidatableResponse response = servicesSteps.createNewServices(name).statusCode(201);
        serviceId = response.extract().path("id");
    }

    @Title("Update the services name nd verify the updated information")
    @Test
    public void Test002(){
        name = name + " API";
        servicesSteps.updateService(serviceId, name).statusCode(200);
        ValidatableResponse response = servicesSteps.getServiceById(serviceId);
        assertThat(response.extract().path("name"),equalTo(name));

    }
    @Title("Delete the services name and verify the updated information")
    @Test
    public void Test003(){
        servicesSteps.deleteService(serviceId).statusCode(200);
        servicesSteps.deleteService(serviceId).statusCode(404);
    }


}