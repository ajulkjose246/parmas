from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from time import sleep
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import Select


# set up the driver
driver = webdriver.Edge()

# navigate to the login page
driver.get("http://localhost/parmas/users/login.php")

# enter the username
username_input = driver.find_element(By.ID, "email")
username_input.send_keys("ajulkjose2025@mca.ajce.in")

# enter the password
password_input = driver.find_element(By.ID, "pwd")
password_input.send_keys("Ajul@2022")


driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
sleep(2)
# submit the form
submit_button = driver.find_element(By.ID, "signin")
submit_button.click()


sleep(1)
driver.get("http://localhost/parmas/users/user/profile.php")

driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
sleep(2)
submit_button = driver.find_element(By.ID, "upld_profile")
submit_button.click()

fname = driver.find_element(By.ID, "fname")
fname.clear()
fname.send_keys("Amal")

sname = driver.find_element(By.ID, "sname")
sname.clear()
sname.send_keys("K Jose")

phone = driver.find_element(By.ID, "phone")
phone.clear()
phone.send_keys("8078515324")


hname = driver.find_element(By.ID, "hname")
hname.clear()
hname.send_keys("Jallara")

bap_name = driver.find_element(By.ID, "bap_name")
bap_name.clear()
bap_name.send_keys("Philip")

dropdown = Select(driver.find_element(By.ID, "usr_ward"))
dropdown.select_by_index(2)

sleep(2)
submit_button = driver.find_element(By.ID, "Update")
submit_button.click()
sleep(20)

# close the browser window
driver.quit()