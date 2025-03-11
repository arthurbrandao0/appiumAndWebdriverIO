Appium and WebdriverIO Automation Project  

This repository contains a sample project demonstrating how to perform mobile automation testing using Appium and WebdriverIO. The project includes examples of end-to-end tests for Android applications.  

## Prerequisites  

Before setting up the project, ensure you have the following installed:  

- Node.js: Download and install Node.js (https://nodejs.org/)  
- Appium: Install globally using `npm install -g appium`  
- Android Studio: Download and install Android Studio (https://developer.android.com/studio)  
- Java Development Kit (JDK): Download and install JDK (https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)  

Ensure that the environment variables for Java and Android SDK are properly set.  

## Setup Instructions  

1. Clone the Repository:  

   ```bash  
   git clone https://github.com/arthurbrandao0/appiumAndWebdriverIO.git  
   cd appiumAndWebdriverIO  
   ```  

2. Install Dependencies:  

   ```bash  
   npm install  
   ```  

3. Configure WebdriverIO:  

   Modify the `wdio.conf.js` file to set the desired capabilities for your Android device or emulator. Ensure that the `deviceName`, `platformVersion`, and `app` path are correctly specified.  

4. Run Tests:  

   ```bash  
   npx wdio wdio.conf.js  
   ```  

## Project Structure  

- `test/specs/`: Contains the test specifications.  
- `wdio.conf.js`: Configuration file for WebdriverIO.  