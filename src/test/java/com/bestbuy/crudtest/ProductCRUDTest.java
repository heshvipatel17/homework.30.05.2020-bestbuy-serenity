package com.bestbuy.crudtest;

/* By Jitendra Patel */

import com.bestbuy.steps.ProductsSteps;
import com.bestbuy.testbase.TestBase;
import io.restassured.response.ValidatableResponse;
import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Steps;
import net.thucydides.core.annotations.Title;
import net.thucydides.core.annotations.WithTag;
import org.junit.Test;
import org.junit.runner.RunWith;

import static com.bestbuy.utils.TestUtils.getRandomValue;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

@RunWith(SerenityRunner.class)
    public class ProductCRUDTest extends TestBase {

        static String name = "McVities Biscuits" + getRandomValue();
        static String type = "Crackers";
        static String upc = "1234" + getRandomValue();
        static double price = 2.49;
        static String description = "This request is for creating a new product";
        static String model = "abc" + getRandomValue();
        static int productId;

        @Steps
        ProductsSteps productSteps;

        @WithTag("ProductCrudTest")
        @Title("This test will create a new product")
        @Test
        public void test001() {
            ValidatableResponse response = productSteps.createProduct(name, type, upc, price, description, model);
            response.statusCode(201);
            productId = response.extract().path("id");
        }

        @WithTag("ProductCrudTest")
        @Title("Update the price of product and verify the updated information")
        @Test
        public void test002() {
            price = price + 7;

            productSteps.updateProduct(productId, null, null, null,
                    price, null, null).statusCode(200);

            ValidatableResponse response1 = productSteps.getProductById(productId);
            assertThat(response1.extract().path("price"), equalTo((float)price));
        }

        @WithTag("ProductCrudTest")
        @Title("Delete the product and verify if the product is deleted")
        @Test
        public void test003() {
            productSteps.deleteProduct(productId).statusCode(200);
            productSteps.deleteProduct(productId).statusCode(404);
        }
}