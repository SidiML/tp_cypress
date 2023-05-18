import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage();

class LoginStep {
  setLogin(username, password) {
    loginPage.setUsername(username);
    loginPage.setPassword(password);
    loginPage.signIn();
  }
  checkMessage(message) {
    loginPage.checkConnection(message);
  }
  
  CheckFailMessage(message){
    loginPage.checkErrorMessage(message)

  }

}

export default LoginStep;
