package com.loginmodule.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.codehaus.jettison.json.JSONObject;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;

public class questionsController {
	@Path("/quiz")
	@GET
	@Produces("application/json")
	public String Questions(
			@QueryParam("Question") String Question,
			@QueryParam("Options") String Options, @QueryParam("CorrectAnswer") String CorrectAnswer) throws Exception{
			
			MongoClient mongoClient = new MongoClient("localhost", 27017);
			DB mongoDB = mongoClient.getDB("questions");
			//Let's store the standard data in regular collection
			DBCollection collection = mongoDB.getCollection("Questionpapers");
		    JSONObject jsonObject = new JSONObject();
			String response="";
			
			BasicDBObject query = new BasicDBObject();
			DBCursor cursor = collection.find(query);
			if (cursor.hasNext()) {
			DBObject dbo = cursor.next();	
			
			String question = (String) dbo.get("Question");
			String option= (String) dbo.get("Options");
			String correctanswer=(String) dbo.get("CorrectAnswer");
			System.out.println(question);
			System.out.println(option);
			System.out.println(correctanswer);
			jsonObject.put("Status", "Success");
		    response = jsonObject.toString();
			System.out.println(response);
			return response;
				
			}
			else{

				jsonObject.put("Status","Failure");			
				response = jsonObject.toString();
				System.out.println(response);
				return response;
				
			}
			
			}
}
