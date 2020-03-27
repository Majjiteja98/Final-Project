$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature folder/orangehrm.feature");
formatter.feature({
  "line": 2,
  "name": "OrangeHRM Website",
  "description": "",
  "id": "orangehrm-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@orangehrm"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Log in to OrangeHRM with valid Cradentials",
  "description": "",
  "id": "orangehrm-website;log-in-to-orangehrm-with-valid-cradentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "open the url in a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter the email id and password in the excel sheet to register click login and assert",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefinition.open_the_url_in_a_browser()"
});
formatter.result({
  "duration": 21763436987,
  "status": "passed"
});
formatter.match({
  "location": "Loginstepdefinition.enter_the_email_id_and_password_in_the_excel_sheet_to_register_click_login_and_assert()"
});
formatter.result({
  "duration": 28583028758,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "adding user details in admin page",
  "description": "",
  "id": "orangehrm-website;adding-user-details-in-admin-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@tc_02"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user launch the chrome browser2",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User open the orange hrm login page2",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "login with valid details1",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user is able to add the new user in the admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "adding_detailsSD.user_launch_the_chrome_browser2()"
});
formatter.result({
  "duration": 10578362878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "adding_detailsSD.user_open_the_orange_hrm_login_page(int)"
});
formatter.result({
  "duration": 7784628972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "adding_detailsSD.login_with_valid_details(int)"
});
formatter.result({
  "duration": 15640144739,
  "status": "passed"
});
formatter.match({
  "location": "adding_detailsSD.user_is_able_to_add_the_new_user_in_the_admin_page()"
});
formatter.result({
  "duration": 14362381672,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "delete user details in admin page",
  "description": "",
  "id": "orangehrm-website;delete-user-details-in-admin-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@tc_03"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user launch the chrome browser3",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user open the orange hrm login page3",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "login with required details2",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "click on the delete button",
  "keyword": "Then "
});
formatter.match({
  "location": "delete_detailsSD.user_launch_the_chrome_browser3()"
});
formatter.result({
  "duration": 9548096236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "delete_detailsSD.user_open_the_orange_hrm_login_page(int)"
});
formatter.result({
  "duration": 16063014532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "delete_detailsSD.login_with_required_details(int)"
});
formatter.result({
  "duration": 18942566358,
  "status": "passed"
});
formatter.match({
  "location": "delete_detailsSD.user_is_able_to_delet_the_admin_in_the_admin_page()"
});
formatter.result({
  "duration": 63812460036,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"ohrmList_chkSelectRecord_3\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027YSR9440236052\u0027, ip: \u0027192.168.43.224\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\YSC182~1.RED\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:54954}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bd3005a36665e95112fa86ffd2b69dd6\n*** Element info: {Using\u003dxpath, value\u003dohrmList_chkSelectRecord_3}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Pages.delete_details.delete_requirements(delete_details.java:60)\r\n\tat stepdefinition.delete_detailsSD.user_is_able_to_delet_the_admin_in_the_admin_page(delete_detailsSD.java:37)\r\n\tat ✽.Then click on the delete button(src/main/resources/feature folder/orangehrm.feature:24)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "about orange HRM",
  "description": "",
  "id": "orangehrm-website;about-orange-hrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@tc_04"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user launch the chrome browser4",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "login with valid details",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user is able to know about orange hrm application",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "take the screenshot of about page",
  "keyword": "Then "
});
formatter.match({
  "location": "aboutSD.launcing_the_application_via_chrome_browser()"
});
formatter.result({
  "duration": 27220012275,
  "status": "passed"
});
formatter.match({
  "location": "aboutSD.login_with_valid_details()"
});
formatter.result({
  "duration": 3599309048,
  "status": "passed"
});
formatter.match({
  "location": "aboutSD.user_is_able_to_know_about_orange_hrm_application()"
});
formatter.result({
  "duration": 252123817,
  "status": "passed"
});
formatter.match({
  "location": "aboutSD.take_the_screenshot_of_about_page()"
});
formatter.result({
  "duration": 9727231252,
  "status": "passed"
});
});