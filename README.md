---------------------------------------------------------------------------

# Author
#### Oleh Finiak (Finik) FEP-22
#### finako243@gmail.com
#### https://t.me/Fiiniikk

---------------------------------------------------------------------------

# Getting started
#### Project name: #49 Tresor (Twitter clone)
#### To start project locally - write in Terminal from backend and frontend folders 'npm run dev'
#### Install: 


---------------------------------------------------------------------------

# Project documentation & guides
#### [Google OAuth](https://www.npmjs.com/package/@react-oauth/google)
#### [Google cloud](https://console.cloud.google.com/apis/credentials?project=tresor-416113)
#### [Microsoft Azure](https://portal.azure.com/?Microsoft_Azure_Education_correlationId=ed80e44a-2105-4e8f-9174-a2d9e6dfd987&Microsoft_Azure_Education_newA4E=true&Microsoft_Azure_Education_asoSubGuid=0a5c4641-bca3-4ce0-bfd3-955fa3c11d52#home)
#### [Azure DevOps](https://dev.azure.com/olehfiniak/_usersSettings/tokens)

---------------------------------------------------------------------------

# Project architecture and infrastructure
### Development environment:
- Microsoft Visual Studio Code
- Microsoft Azure
- SSMS 20
- React (frontend) + NodeJS (backend)

### Program structure
- Log in/Registration page (Feature: User Registration with Google OAuth 2.0.)
- Home page (Feature: Tweeting functionality)
- Profile page (1. Feature: Profile Management, 2. Feature: Timeline display, 3. Feature: Retweeting and Liking, 4. Feature: Replying to tweets)
- Notifications page (Feature: Notifications)
- Trends page (1. Feature: Hashtags and Trends 2. Feature: Search Functionality)
- Direct page (Feature: Direct Messaging)
- Bookmarks page (Feature: Bookmarking)
- Settings page (Feature: Settings and Preferences)
- About page (Name and Surname of the student, Name of the Project, Link to Telegram, Email of the student, Link to github, where source code is stored)

---------------------------------------------------------------------------
# Project Requirements
### Technical:
1. Implementation of Swagger UI or alternative suite of API tools, which must be accessible as a web page.
2. Authorization with Google account or Azure Active Directory (OAuth 2.0).
3. Integration with any SQL database, which must be hosted in the cloud (like MSSQL on Azure).
4. Usage of Object Relational Mapper, like Entity Framework. 
5. The application must adhere to the clean code principles and best practices, defined by the framework developer (for .NET - Microsoft).
6. 95% of code must use services approach and Dependency Injection.
7. Integration with an open API (like one from https://github.com/public-apis/public-apis).
8. Integration with any additional Azure service (like Storage Account or Service Bus).
9. After successful registration or first sign in with Google Account a user should get a welcome message on his email.
10. Integration with Azure Monitor to collect logs and monitor the application

### Development and deployment:
11. Project must be fully deployed and run in Azure.
12. All code must be stored in a publically open repository on Github (any other website is NOT allowed).
13. Code must be up to date in the repository (wrote it today, push it today).
14. The project must make use of Continuous Integration/Continuous delivery.

### Documentation (must be stored in Readme.md file on Github):
15. Getting started documentation (step by step guide on how to run the project locally).
16. Project documentation (architecture diagram, infrastructure diagram).
17. Live Project tasks decomposition (list of tasks for each week, should be updated every time you complete a task, completed tasks should be marked with ✔️).
18. Documentation must contain:
Name
Surname
Email of the student
Link to Telegram
Name of the Project
Project Description
Link to deployed project
19. Every project must contain About page with:
Name and Surname of the student
Name of the Project
Link to Telegram
Email of the student
Link to github, where source code is stored

### Testing:
20. Postman collection for testing the project (must contain all endpoints, which should be executable, auth must be configured).
21. Services must be covered with Unit Tests, test coverage should be at least 30%.
22. You need data in your project to develop, test and present, so you must write a script that would generate data for you. There must be at least 100 users with 20 content pieces each, or similar, depending on the project type and data structure. Your website must be full of data in order to present correctly and show that everything is working.
### Presentation:
- Module 1 project progress presentation
- Module 2 project progress presentation
- Final project presentation (Exam)

### How to present:
- make a PowerPoint presentation
- talk about the project, what are the key features
- show Github Readme.md
- show diagrams
- show task decomposition
- talk through chosen infrastructure on Azure
- provide a list of completed tasks
- show live demo of the project (must be deployed to Azure)
- show code, answer questions

### Project Technical Document Requirements:
- Name, Description of the project (minimum 3 sentences)
- List of 12 application features or user stories (this should be purely application features, not related to any technologies, practices, documentation, deployments or testing)
- 12 weeks worth of tasks, each week containing at least 5 tasks
- Every week a new feature from feature list must be implemented
- It is not recommended to include Artificial Intelligence, Augmented Reality, User Acceptance Testing, Performance Testing, Cross-Platform Support, Accessibility features, Payment System Integration or Multiple Authentication Methods in the project features or tasks
  
---------------------------------------------------------------------------
# Project Task Decomposition
### Week 1:
#### ✔️ Implement feature: User Registration with Google OAuth 2.0.
#### ✔️ Set up Azure deployment environment.
#### ✔️ Create initial project structure on Github repository.
#### ✔️ Write basic documentation for getting started locally.
#### ✔️ Set up Continuous Integration/Continuous Delivery pipeline.

### Week 2:
#### ✔️ Implement feature: Profile Management.
#### ✔️ Configure Azure services for project deployment.
#### ✔️ Begin documenting project architecture and infrastructure.
#### ❌ Conduct unit tests for user registration functionality.
#### ✔️ Refine CI/CD pipeline for automated deployments.

### Week 3:
#### ✔️ Implement feature: Tweeting functionality.
#### ❌ Optimize Azure deployment for performance and scalability.
#### ❌ Update documentation with architecture diagrams.
#### ❌ Expand unit test coverage for profile management features.
#### ✔️ Integrate Postman collection for endpoint testing.

### Week 4:
#### ✔️ Implement feature: Timeline display.
#### ❌ Fine-tune Azure deployment settings for reliability.
#### ❌ Enhance project documentation with detailed explanations.
#### ❌ Conduct unit tests for tweeting functionality.
#### ❌ Perform load testing on Azure deployment.

### Week 5:
#### ✔️❌ Implement feature: Retweeting and Liking.
#### ❌ Monitor Azure deployment for any performance issues.
#### ❌ Update README with detailed project tasks decomposition.
#### ❌ Conduct unit tests for timeline functionality.
#### ❌ Perform security testing on Azure deployment.

### Week 6:
#### ✔️ Implement feature: Commenting.
#### ❌ Perform Azure deployment backups and disaster recovery testing.
#### ❌ Review and update project documentation for clarity.
#### ❌ Conduct unit tests for retweeting and liking features.
#### ❌ Optimize Azure deployment for cost-effectiveness.

### Week 7:
#### ❌ Implement feature: Hashtags and Trends.
#### ❌ Conduct Azure deployment security audit.
#### ❌ Create comprehensive user guide documentation.
#### ❌ Conduct unit tests for reply functionality.
#### ❌ Monitor Azure deployment for compliance with best practices.

### Week 8:
#### ❌ Implement feature: Notifications.
#### ❌ Optimize Azure deployment for high availability.
#### ❌ Update README with detailed testing procedures.
#### ❌ Conduct unit tests for hashtag and trends functionality.
#### ❌ Perform automated regression testing on Azure deployment.

### Week 9:
#### ❌ Implement feature: Direct Messaging.
#### ❌ Perform Azure deployment performance tuning.
#### ❌ Conduct final review of project documentation.
#### ❌ Conduct unit tests for notifications functionality.
#### ❌ Monitor Azure deployment for any anomalies.

### Week 10:
#### ❌ Implement feature: Search Functionality.
#### ❌ Conduct Azure deployment cost analysis and optimization.
#### ❌ Update README with troubleshooting tips.
#### ❌ Conduct unit tests for direct messaging functionality.
#### ❌ Perform accessibility testing on Azure deployment.

### Week 11:
#### ❌ Implement feature: Bookmarking.
#### ❌ Perform Azure deployment scaling tests.
#### ❌ Update README with FAQ section.
#### ❌ Conduct unit tests for search functionality.
#### ❌ Perform browser compatibility testing on Azure deployment.

### Week 12:
#### ❌ Implement feature: Settings and Preferences.
#### ❌ Conduct final Azure deployment review.
#### ❌ Update README with project conclusion and acknowledgments.
#### ❌ Conduct unit tests for bookmarking functionality.
#### ❌ Perform final acceptance testing on Azure deployment.
