package Pages;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import com.excelutility.ExcelRead;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
//Method to launch the multiple browsers
public class LoginFromExcelPage 
{
	WebDriver driver;
	public void LaunchUrl1(String browser) 
	{
		if(browser.equalsIgnoreCase("Chrome")) {
		System.setProperty("webdriver.chrome.driver","driver\\chromedriver.exe");
		driver = new ChromeDriver();
		}
		else if(browser.equalsIgnoreCase("Explorer")) {
		System.setProperty("webdriver.IE.driver","driver\\IEDriverServer.exe");
		driver = new InternetExplorerDriver();
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.get("https://opensource-demo.orangehrmlive.com/");
		System.out.println(driver.getTitle());
	}
	//Method to retrieve the data from Excel sheet 
	public void loginCredentials(int i) throws Exception
	{
		ExcelRead da = new ExcelRead();
		driver.findElement(By.id("txtUsername")).sendKeys(da.excel_username(i));
		driver.findElement(By.id("txtPassword")).sendKeys(da.excel_password(i));
	}
	//method to click the login button 
	public void clickLogin() throws Exception
	{
		driver.findElement(By.id("btnLogin")).click();
		Thread.sleep(300);
	}
	//Method written for confirming navigation of dashboard page
	public void Assert() throws Exception 
	{
		String a = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div[1]/h1")).getText();
		Assert.assertEquals("Dashboard",a);
		Thread.sleep(300);
		System.out.println("Logged Successfully");
	}
	//to take the screenshot after entering the first set of data in Excel sheet
	public void Screenshot1() throws Exception 
	{
		TakesScreenshot ts= (TakesScreenshot)driver;
		File source=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(source,new File("screenshot\\shot1.png"));
	}
	//to take the screenshot after entering the second set of data in Excel sheet
	
	/*
	 * //to take the screenshot after entering the third set of data in Excel sheet
	 * public void Screenshot3() throws Exception { TakesScreenshot ts=
	 * (TakesScreenshot)driver; File source=ts.getScreenshotAs(OutputType.FILE);
	 * FileUtils.copyFile(source,new File("screenshot\\shot3.png")); }
	 */
}
