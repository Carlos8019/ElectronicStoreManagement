# ElectronicStoreManagement

Application developped in React, WebAPI C#, Entity Framework, MySQL to manage information of an electronic store.
*Add Clients
*Add Products
*Add Services
*Add Events
*Add Users
*Calendar of events
*Notification to new Services

Installation
1. Install Entity Framework Core and MySQL Provider Packages
dotnet add package Microsoft.EntityFrameworkCore --version 8.0.1
dotnet add package Microsoft.EntityFrameworkCore.Design --version 8.0.1
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 8.0.0
dotnet add package Microsoft.Extensions.DependencyInjection --version 8.0.1

2. Generate a Migration
dotnet ef migrations add MigrationName --project dataAccess --startup-project webApiservices

3. Apply the Migration to Create the Database
dotnet ef database update --project dataAccess --startup-project webApiservices

4. Check Installed Packages (if needed)
dotnet list package --include-transitive

5. Clear NuGet Cache (if necessary)
dotnet nuget locals all --clear

6. Build the Project
dotnet build
npm run start

1. Install the Developer Certificate
dotnet dev-certs https --trust

2. Verify the Certificate Installation
dotnet dev-certs https --check

3. Restart the Application
dotnet run
npm run start