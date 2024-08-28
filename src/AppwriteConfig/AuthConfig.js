/* eslint-disable no-useless-catch */

import conf from "@/Conf/Conf";

import { Client, Account, ID, OAuthProvider } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async OauthAccount() {
    try {
      // Start the OAuth flow (this will redirect the user)
      this.account.createOAuth2Session(
        OAuthProvider.Google,
        "http://localhost:5173/cart", // Redirect URL on success
        "http://localhost:5173/fail", // Redirect URL on failure
      );

      // Assuming the redirect brings the user back and the page is reloaded:
      const session = await this.account.getSession("current");
      return session;
    } catch (error) {
      console.log("Appwrite service :: OauthAccount :: error", error);
      throw error;
    }
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(), // userid
        email,
        password,
        name,
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
