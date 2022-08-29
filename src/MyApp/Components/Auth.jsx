import cookie from 'js-cookie'

class Auth {
  constructor() {
    try {
      if (typeof cookie.get("LTCSMSTICKET") === "undefined") {
        this.authenticated = false
      } else {
        this.authenticated = true
      }
    } catch (err) {
      this.authenticated = false;
    }
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    cookie.remove("LTCSMSTICKET")
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
