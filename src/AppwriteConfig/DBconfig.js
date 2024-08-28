import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../Conf/Conf";

export class DbService {
  client = new Client();
  databases;
  bucket;
  unsubscribeFn = null; // to store the subscribe function

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({
    productName = "N/A",
    userId = null,
    price = "N/A",
    category = "jacket",
    collection = "summer",
    description = "No description",
    imageUrl = "No image",
  }) {
    try {
      const product = {
        Name: productName,
        Price: price,
        Category: category,
        Collection: collection,
        description: description,
        imageUrl: imageUrl,
        userId: userId,
      };
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        product,
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }
  async updatePost({ product, newMessage }) {
    try {
      // Extract only the fields that are part of the product schema
      const updatableFields = {
        Name: newMessage.Name,
        Price: newMessage.Price,
        description: newMessage.description,
      };

      // Perform the update operation
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        product.$id, // Document ID
        updatableFields, // Only pass the fields that need to be updated
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost:: error", error);
      throw error;
    }
  }

  async getPosts({
    category,
    collection,
    orderBy = "$createdAt",
    order = "desc",
    search = "",
  } = {}) {
    // default empty object to prevent undefined value
    try {
      const queries = [];
      if (category) queries.push(Query.equal("Category", category));
      if (collection) queries.push(Query.equal("Collection", collection));
      if (search) {
        queries.push(
          Query.or([
            Query.equal("Name", [
              search,
              search.trim(),
              search.toLowerCase(),
              search.toUpperCase(),
            ]),
            Query.equal("Category", [
              search,
              search.trim(),
              search.toLowerCase(),
              search.toUpperCase(),
            ]),
            Query.equal("Collection", [
              search,
              search.trim(),
              search.toLowerCase(),
              search.toUpperCase(),
            ]),
          ]),
        );
      }

      order === "desc"
        ? queries.push(Query.orderDesc(orderBy))
        : queries.push(Query.orderAsc(orderBy));
      console.log(queries);

      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      );
      //   console.log(response); // to check for error
      return response;
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }
  async deletePost(productId) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        productId,
      );
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }
  realTime(callback) {
    // console.log("Subscribing to real-time updates");
    this.unsubscribeFn = this.client.subscribe(
      `databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteCollectionId}.documents`,
      (response) => {
        if (response.error) {
          console.error("Realtime error:", response.error);
        } else {
          callback(response);
        }
      },
    );
  }
  unsubscribe() {
    if (this.unsubscribeFn) {
      //  console.log("Unsubscribing from real-time updates");
      this.unsubscribeFn(); // this.unsubscribeFn() calls the unsubscribe function, and then it clears the reference.
    }
  }
  async uploadFile(file) {
    if (!file || file === null || file === undefined) return;
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(), //fileId
        file,
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: deletefile :: error", error);
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}
const dbservice = new DbService();
export default dbservice;
