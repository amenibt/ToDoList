package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.html5.LocalStorage;
import org.openqa.selenium.html5.WebStorage;
import org.openqa.selenium.remote.Augmenter;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	private static WebDriver driver;

	@Given("^I launch the application$")
	public void i_launch_the_application() throws Throwable {
		String Path = "drivers//chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", Path);
		driver = new ChromeDriver();
		driver.get("http://localhost:3000/");
	}

	@When("^I enter the email$")
	public void i_enter_the_email() throws Throwable {
		WebElement email = driver.findElement(By.xpath("//*[@id=\'root\']/div/div/div/div[1]/input"));
		email.sendKeys("test@test.com");
	}

	@When("^I enter the password$")
	public void i_enter_the_password() throws Throwable {
		WebElement motpasse = driver.findElement(By.xpath("//*[@id=\'root\']/div/div/div/div[2]/input"));
		motpasse.sendKeys("test");
	}

	@When("^I click on send button$")
	public void i_click_on_send_button() throws Throwable {
		WebElement envoyerBtn = driver.findElement(By.xpath("//*[@id=\'root\']/div/div/div/div[3]/input"));
		envoyerBtn.click();
	}

	@Given("^the tasks page shows$")
	public void the_tasks_page_shows() throws Throwable {
		WebElement taskPageTitle = driver.findElement(By.xpath("//h2[normalize-space()='Liste des tâches']"));
		String actualRslt = taskPageTitle.getText();
		String expectedRslt = "Liste des tâches";
		Assert.assertEquals(expectedRslt, actualRslt);
	}

	@When("^I enter the task name$")
	public void i_enter_the_task_name() throws Throwable {
		WebElement nameTask = driver.findElement(By.xpath("//div[@class='row']//div[1]//input[1]"));
		nameTask.sendKeys("Task1");
	}

	@When("^I enter the description$")
	public void i_enter_the_description() throws Throwable {
		WebElement descriptionTask = driver.findElement(By.cssSelector("div.col:nth-child(2) > input"));
		descriptionTask.sendKeys("Description Task1");
	}

	@When("^I press add button$")
	public void i_press_add_button() throws Throwable {
		WebElement createTaskBtn = driver.findElement(By.xpath("//button[normalize-space()='Ajouter la tâche']"));
		createTaskBtn.click();
	}

	@Given("^the new task displayed$")
	public void the_new_task_displayed() throws Throwable {
		WebElement titleTask = driver
				.findElement(By.cssSelector("li[class='list-group-item d-flex justify-content-between'] span b"));
		String titleTaskCheck = titleTask.getText();
		System.out.println("test titre" + titleTaskCheck);
		String expectedRslt = "Task1";
		Assert.assertEquals(expectedRslt, titleTaskCheck);
	}

	@When("^I click on task status$")
	public void i_click_on_task_status() throws Throwable {
		WebElement statusTask = driver.findElement(By.xpath("//span[2]"));
		statusTask.click();
	}

	@Then("^data should be updated in localstorage$")
	public void data_should_be_updated_in_localstorage() throws Throwable {
		WebStorage webStorage = (WebStorage) new Augmenter().augment(driver);
		LocalStorage localStorage = webStorage.getLocalStorage();
		System.out.println(localStorage.getItem("tasks"));

	}

	@When("^I enter the  invalid email$")
	public void i_enter_the_invalid_email() throws Throwable {
		WebElement invalidEmail = driver.findElement(By.xpath("//*[@id=\'root\']/div/div/div/div[1]/input"));
		invalidEmail.sendKeys("test000@test.com");
	}

	@Then("^an error message shows$")
	public void an_error_message_shows() throws Throwable {
		WebElement errorMsgCredentials = driver.findElement(By.xpath("//div[@class='alert alert-danger']"));
		String errorMsgCheck = errorMsgCredentials.getText();
		System.out.println("test" + errorMsgCheck);
		String expectedMsgRslt = "Désolé, les identifiants sont incorrects.";
		Assert.assertEquals(expectedMsgRslt, errorMsgCheck);
	}

	@Given("^I click on logout btn$")
	public void i_click_on_logout_btn() throws Throwable {
		WebElement logoutBtn = driver.findElement(By.xpath("//a[normalize-space()='Déconnexion']"));
		logoutBtn.click();

	}

	@Then("^The Home page displayed$")
	public void the_Home_page_displayed() throws Throwable {
		System.out.println("testtextttt" + driver.getTitle());
		WebElement taskLink = driver.findElement(By.xpath("//a[normalize-space()='Tâches']"));
		taskLink.click();
		String currentLink = driver.getCurrentUrl();
		String expectedLink = "http://localhost:3000/";
		Assert.assertEquals(currentLink, expectedLink);
	}
}
