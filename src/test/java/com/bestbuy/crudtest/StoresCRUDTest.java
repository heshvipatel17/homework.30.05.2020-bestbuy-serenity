package com.bestbuy.crudtest;

/* By Jitendra Patel */

import com.bestbuy.steps.StoresSteps;
import com.bestbuy.testbase.TestBase;
import io.restassured.response.ValidatableResponse;
import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Steps;
import net.thucydides.core.annotations.Title;
import net.thucydides.core.annotations.WithTag;
import org.junit.Test;
import org.junit.runner.RunWith;

import static com.bestbuy.utils.TestUtils.getRandomValue;
import static com.bestbuy.utils.TestUtils.getRandomValueInt;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

@RunWith(SerenityRunner.class)
public class StoresCRUDTest extends TestBase {

    static String name = "Reliance" + getRandomValue();
    static String type = "Retail";
    static String address = "Petrol pump";
    static String address2 = "Varachha";
    static String city = "Surat";
    static String state = "Gujarat";
    static String zip = "395006";
    static String lat = "2.33" + getRandomValueInt();
    static String lng = "8.79" + getRandomValueInt();
    static String hours = "Mon: 8-9; Tue: 8-9; Wed: 8-9; Thurs: 8-9; Fri: 8-9; Sat: 10-9; Sun: 10-8";
    static int storeId;

    @Steps
    StoresSteps storesSteps;

    @WithTag("StoreCrudTest")
    @Title("This test will create a new store")
    @Test
    public void test001() {

        ValidatableResponse response = storesSteps.createStore(name, type, address, address2, city, state, zip, lat,
                lng, hours);
        storeId = response.extract().path("id");
    }

    @WithTag("StoreCrudTest")
    @Title("Update the product name and verify the updated information")
    @Test
    public void test002() {
        name = name + "_updated";

        storesSteps.updateStore(storeId, name, null, null, null,
                null, null, null, null, null, null).statusCode(200);

        ValidatableResponse response = storesSteps.getStoreById(storeId);
        assertThat(response.extract().path("name"), equalTo(name));
    }

    @WithTag("StoreCrudTest")
    @Title("Delete the product and verify if the product is deleted")
    @Test
    public void test003() {
        storesSteps.deleteStore(storeId).statusCode(200);
        storesSteps.deleteStore(storeId).statusCode(404);
    }
}