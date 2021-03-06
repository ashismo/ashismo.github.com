---
layout: post
category : android-User Interface
tags : [Android Tutorial]
weight: 100
---
{% include JB/setup %}

## Introduction

   Client Server communication is an important aspect in android programming. Ideally we retrieve data from server to display it on android screen (web based android application). This tutorial describes how to implement client server communication step by step. 

## How to retrieve Data from Server?    
>
#### Grand Permission to Access Network
Grant internet access in **AndroidManifest.xml** file with the following content


```xml
	<uses-permission android:name="android.permission.INTERNET"></uses-permission>
```

>
#### On button click URL will get hit

<pre class="prettyprint lang-java">
button.setOnClickListener(new OnClickListener() {
     public void onClick(View v) {
         // Create Object and call AsyncTask execute Method
         new WebServiceCall().execute();
          
     }
 });  
</pre>

>
#### Check if network is connected
Code to check if network is connected. Call the below method before calling the actual URL

<pre class="prettyprint lang-java">
private boolean isNetworkConnected() {
	
        ConnectivityManager cm = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo ni = cm.getActiveNetworkInfo();
        if (ni == null) {
            // There are no active networks.
            return false;
        } else {
            return true;
        }
}
</pre>  

>
#### Retrieve Data fro Server  
Below code will retrieve data from the server. Follow inline comments to understand the code

<pre class="prettyprint lang-java">
    public class WebServiceCall extends AsyncTask<Void, Void, String> {

        @Override
        protected void onPreExecute() { // At first This method will get called. Check the network connection here
            super.onPreExecute();
            if(!isNetworkConnected()) { // Check internet connectivity before hitting the actual URL
                Toast.makeText(getApplicationContext(),"NO INTERNET CONNECTION",Toast.LENGTH_LONG).show();
            }
        }
        @Override
		//Once the network is connected, this method will hit the URL to fetch data from server. This will be done at the background
        protected String doInBackground(Void... params) { 
            HttpClient httpClient = new DefaultHttpClient();
            HttpContext localContext = new BasicHttpContext();
            String url = "www.google.com"; // This URL will be hit from android client
            HttpGet httpGet = new HttpGet(url);
            String text = null;
            try {
                HttpResponse response = httpClient.execute(httpGet, localContext);
                HttpEntity entity = response.getEntity();
                text = getASCIIContentFromEntity(entity);
            } catch (Exception e) {
                return e.getLocalizedMessage();
            }
            return text;
        }

        @Override
		// This method will get called once doInBackground() method is completed. Here we can update the UI elements.
        protected void onPostExecute(String results) {
            if(results == null || results.length() < 100) {
                // Write your logic to process data

            }
        }

		// This method converts HttpEntity into ASCII content
        protected String getASCIIContentFromEntity(HttpEntity entity) throws IllegalStateException, IOException {
            InputStream in = entity.getContent();

            StringBuffer out = new StringBuffer();
            int n = 1;
            while (n>0) {
                byte[] b = new byte[4096];
                n =  in.read(b);
                if (n>0) out.append(new String(b, 0, n));
            }
            return out.toString();
        }   
    }
</pre>

>

### URL to check complete code

Click <a href="https://github.com/ashismo/LocalTrainInfo/blob/master/app/src/main/java/com/app/ashish/localtraininfo/activity/StationNamesSplashScreenActivity.java" target="_blank">
<img src="{{ ASSET_PATH }}/../../images/github.jpg" height="32" width="32">
</a> to see the complete code from my <a href="https://github.com/ashismo/LocalTrainInfo/" target="_blank">
<img src="{{ ASSET_PATH }}/../../images/localtrain.jpg" height="52" width="52" alt="IRCTC Local Train Live Status">
</a> android application
