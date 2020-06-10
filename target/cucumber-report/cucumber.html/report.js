$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("categories.feature");
formatter.feature({
  "line": 1,
  "name": "Categories Feature",
  "description": "\r\nAs a user I want to perform CRUD operation for Categories",
  "id": "categories-feature",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "Create new categories and verify if the categories is added",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I create new categories by providing a name \u0026 id and get status code 201",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify that the categories is created and get the status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CategoriesCrudSteps.iCreateNewCategoriesByProvidingANameIdAndGetStatusCode()"
});
formatter.result({
  "duration": 2791170000,
  "status": "passed"
});
formatter.match({
  "location": "CategoriesCrudSteps.iVerifyThatTheCategoriesIsCreatedAndGetTheStatusCode()"
});
formatter.result({
  "duration": 54848300,
  "error_message": "java.lang.IllegalArgumentException: Path parameters were not correctly defined. Redundant path parameters are: categoryID\u003dSoft Test1683. Undefined path parameters are: categoriesId.\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.RequestSpecificationImpl.assertCorrectNumberOfPathParams(RequestSpecificationImpl.groovy:1336)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:158)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1223)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1722)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1728)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:168)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.execute(RequestSpecificationDecorated.java:227)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.get(RequestSpecificationDecorated.java:48)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.get(RequestSpecificationDecorated.java:27)\r\n\tat com.bestbuy.steps.CategoriesSteps.getCategoriesById(CategoriesSteps.java:42)\r\n\tat com.bestbuy.steps.CategoriesSteps$$EnhancerByCGLIB$$bc257cbd.CGLIB$getCategoriesById$2(\u003cgenerated\u003e)\r\n\tat com.bestbuy.steps.CategoriesSteps$$EnhancerByCGLIB$$bc257cbd$$FastClassByCGLIB$$5183706d.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:395)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:380)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:355)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:132)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:61)\r\n\tat com.bestbuy.steps.CategoriesSteps$$EnhancerByCGLIB$$bc257cbd.getCategoriesById(\u003cgenerated\u003e)\r\n\tat com.bestbuy.cucumber.steps.CategoriesCrudSteps.iVerifyThatTheCategoriesIsCreatedAndGetTheStatusCode(CategoriesCrudSteps.java:32)\r\n\tat ✽.Then I verify that the categories is created and get the status code 200(categories.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "Update categories name and verify if the categories name is updated",
  "description": "",
  "id": "categories-feature;update-categories-name-and-verify-if-the-categories-name-is-updated",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I update a existing categories using categoriesID and get status code 200",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify that the categories name is updated and get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CategoriesCrudSteps.iUpdateAExistingCategoriesUsingCategoriesIDAndGetStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CategoriesCrudSteps.iVerifyThatTheCategoriesNameIsUpdatedAndGetStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "Create new categories and verify if the categories is added",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I create new categories by providing a name \u0026 id and get status code 201",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify that the categories is created and get the status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CategoriesCrudSteps.iCreateNewCategoriesByProvidingANameIdAndGetStatusCode()"
});
formatter.result({
  "duration": 52366500,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e but was \u003c400\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:471)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:636)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:122)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:130)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat com.bestbuy.cucumber.steps.CategoriesCrudSteps.iCreateNewCategoriesByProvidingANameIdAndGetStatusCode(CategoriesCrudSteps.java:27)\r\n\tat ✽.When I create new categories by providing a name \u0026 id and get status code 201(categories.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CategoriesCrudSteps.iVerifyThatTheCategoriesIsCreatedAndGetTheStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Delete categories and verify if the categories is deleted",
  "description": "",
  "id": "categories-feature;delete-categories-and-verify-if-the-categories-is-deleted",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I delete categories using categoriesID and get status code 200",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify that the categories with categoriesID is deleted and get status code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "CategoriesCrudSteps.iDeleteCategoriesUsingCategoriesIDAndGetStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CategoriesCrudSteps.iVerifyThatTheCategoriesWithCategoriesIDIsDeletedAndGetStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("products.feature");
formatter.feature({
  "line": 1,
  "name": "Products Feature",
  "description": "\r\nAs a user I want to perform CRUD operation for Products",
  "id": "products-feature",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "Create new products and verify if the products is added",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I create new products by providing a name, type, upc, price, description and model get status code 201",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify that the products is created and get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsCrudSteps.iCreateNewProductsByProvidingANameTypeUpcPriceDescriptionAndModelGetStatusCode()"
});
formatter.result({
  "duration": 341840900,
  "status": "passed"
});
formatter.match({
  "location": "ProductsCrudSteps.iVerifyThatTheProductsIsCreatedAndGetStatusCode()"
});
formatter.result({
  "duration": 45569600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Update products price and verify if the products price is updated",
  "description": "",
  "id": "products-feature;update-products-price-and-verify-if-the-products-price-is-updated",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I update a existing products using productsID and get status code 200",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify that the products price is updated and get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsCrudSteps.iUpdateAExistingProductsUsingProductsIDAndGetStatusCode()"
});
formatter.result({
  "duration": 30888100,
  "status": "passed"
});
formatter.match({
  "location": "ProductsCrudSteps.iVerifyThatTheProductsPriceIsUpdatedAndGetStatusCode()"
});
formatter.result({
  "duration": 28877300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Create new products and verify if the products is added",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I create new products by providing a name, type, upc, price, description and model get status code 201",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify that the products is created and get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsCrudSteps.iCreateNewProductsByProvidingANameTypeUpcPriceDescriptionAndModelGetStatusCode()"
});
formatter.result({
  "duration": 43835100,
  "status": "passed"
});
formatter.match({
  "location": "ProductsCrudSteps.iVerifyThatTheProductsIsCreatedAndGetStatusCode()"
});
formatter.result({
  "duration": 28670700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Delete products and verify if the products is deleted",
  "description": "",
  "id": "products-feature;delete-products-and-verify-if-the-products-is-deleted",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I delete products using productsID and get status code 200",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify that the products with productsID is deleted and get status code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsCrudSteps.iDeleteProductsUsingProductsIDAndGetStatusCode()"
});
formatter.result({
  "duration": 21104800,
  "status": "passed"
});
formatter.match({
  "location": "ProductsCrudSteps.iVerifyThatTheProductsWithProductsIDIsDeletedAndGetStatusCode()"
});
formatter.result({
  "duration": 15190500,
  "status": "passed"
});
formatter.uri("services.feature");
formatter.feature({
  "line": 1,
  "name": "Services Feature",
  "description": "\r\nAs a user I want to perform CRUD operation for Services",
  "id": "services-feature",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "Create new services and verify if the services is added",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I create new services by providing a name and get status code 201",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify that the services is created and get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ServicesCrudSteps.iCreateNewServicesByProvidingAName()"
});
formatter.result({
  "duration": 62443000,
  "status": "passed"
});
formatter.match({
  "location": "ServicesCrudSteps.iVerifyThatTheServicesWithNameIsCreated()"
});
formatter.result({
  "duration": 18818000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Update services name and verify if the services name is updated",
  "description": "",
  "id": "services-feature;update-services-name-and-verify-if-the-services-name-is-updated",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I update a existing services using servicesID and get status code 200",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify that the services name is updated and get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ServicesCrudSteps.iUpdateAExistingServicesUsingServicesID()"
});
formatter.result({
  "duration": 27039900,
  "status": "passed"
});
formatter.match({
  "location": "ServicesCrudSteps.iVerifyThatTheServicesNameIsUpdated()"
});
formatter.result({
  "duration": 28121900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Create new services and verify if the services is added",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I create new services by providing a name and get status code 201",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify that the services is created and get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ServicesCrudSteps.iCreateNewServicesByProvidingAName()"
});
formatter.result({
  "duration": 52392800,
  "status": "passed"
});
formatter.match({
  "location": "ServicesCrudSteps.iVerifyThatTheServicesWithNameIsCreated()"
});
formatter.result({
  "duration": 28543800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Delete services and verify if the services is deleted",
  "description": "",
  "id": "services-feature;delete-services-and-verify-if-the-services-is-deleted",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I delete services using servicesID and get status code 200",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify that the services with servicesID is deleted and get status code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "ServicesCrudSteps.iDeleteServicesUsingServicesIDAndGetStatusCode()"
});
formatter.result({
  "duration": 22761800,
  "status": "passed"
});
formatter.match({
  "location": "ServicesCrudSteps.iVerifyThatTheServicesWithServicesIDIsDeletedAndGetStatusCode()"
});
formatter.result({
  "duration": 20011700,
  "status": "passed"
});
formatter.uri("stores.feature");
formatter.feature({
  "line": 1,
  "name": "Stores Feature",
  "description": "\r\nAs a user I want to perform CRUD operation for Stores",
  "id": "stores-feature",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "Create new stores and verify if the stores is added",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I create new stores by providing a name, type, address, address2, city, state, zip, lat, lng and hours get status code 201",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify that the stores is created and get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StoresCrudSteps.iCreateNewStoresByProvidingANameTypeAddressAddressCityStateZipLatLngAndHoursGetStatusCode()"
});
formatter.result({
  "duration": 63758100,
  "status": "passed"
});
formatter.match({
  "location": "StoresCrudSteps.iVerifyThatTheStoresIsCreatedAndGetStatusCode()"
});
formatter.result({
  "duration": 37591700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Update stores name and verify if the stores name is updated",
  "description": "",
  "id": "stores-feature;update-stores-name-and-verify-if-the-stores-name-is-updated",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I update a existing stores using storesID and get status code 200",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify that the stores name is updated and get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StoresCrudSteps.iUpdateAExistingStoresUsingStoresIDAndGetStatusCode()"
});
formatter.result({
  "duration": 31348300,
  "status": "passed"
});
formatter.match({
  "location": "StoresCrudSteps.iVerifyThatTheStoresNameIsUpdatedAndGetStatusCode()"
});
formatter.result({
  "duration": 24642700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Create new stores and verify if the stores is added",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I create new stores by providing a name, type, address, address2, city, state, zip, lat, lng and hours get status code 201",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify that the stores is created and get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StoresCrudSteps.iCreateNewStoresByProvidingANameTypeAddressAddressCityStateZipLatLngAndHoursGetStatusCode()"
});
formatter.result({
  "duration": 49927900,
  "status": "passed"
});
formatter.match({
  "location": "StoresCrudSteps.iVerifyThatTheStoresIsCreatedAndGetStatusCode()"
});
formatter.result({
  "duration": 38215300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Delete stores and verify if the stores is deleted",
  "description": "",
  "id": "stores-feature;delete-stores-and-verify-if-the-stores-is-deleted",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I delete stores using storesID and get status code 200",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify that the stores with storesID is deleted and get status code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "StoresCrudSteps.iDeleteStoresUsingStoresIDAndGetStatusCode()"
});
formatter.result({
  "duration": 18981800,
  "status": "passed"
});
formatter.match({
  "location": "StoresCrudSteps.iVerifyThatTheStoresWithStoresIDIsDeletedAndGetStatusCode()"
});
formatter.result({
  "duration": 11884800,
  "status": "passed"
});
});