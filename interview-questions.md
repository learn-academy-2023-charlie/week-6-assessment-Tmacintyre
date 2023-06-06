# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: You would have to go back into the terminal use the migrate command to add another column into the table. The foreign key would be student_id and would be apart of the Student model. Once you correct the addition in the migration file you would then db migrate and should be good to go.

Researched answer: To fix this we need to add the foreign key to the Student model. Since the Cohort model has_many students, the key in the Student model would be cohort_id.
To do so we can generate a migration to add the columb to the students table. Once we add the column we can then db:migrate to update the students table with cohort_id as a column/ foreign key. Lastly we would have to update the association in the models to reflect the new foreign key. has_many :students/ belongs_to :cohort.

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, create, edit, update, destroy. These always must be past params because when working with the above because you would be working with specific instances rather than the larger view. You need to be able to work with a specific instance and that instance alone. 

Researched answer: Put, patch, delete, get, and post. These routes require params to ensure that the correct instance is targeted for the specific action. The params help identify and differentiate between different instances in the system.

3. Name three rails generator commands. What is created by each?

Your answer: generate model, generate resource, generate controller. the g model creates a new model, the generate controller creates your controller and tables, generate resource does all of the above for you including routes. 

Researched answer: g model creates a new model file, a migration file which is going to define our schema to create the proper table for the model. g controller creates a new controller file, as well as the proper view files. The g resource command does all of the above but also includes createing our routes.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - This would be index and would provide a list of ALL instances

action: "POST" location: /students - This would be create and would send a new instance to the db

action: "GET" location: /students/new - This would be new and creates a form to add a new instance

action: "GET" location: /students/2 - This would be show and would show the instance that is saved to the id: 2.

action: "GET" location: /students/2/edit - this would be edit and would show a form to modify the id:2.

action: "PATCH" location: /students/2 - This would be update and would save the modifications of the instance at id:2

action: "DELETE" location: /students/2 This would be destroy and would delete the instance stored at id:2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

As a user i want to be able to create a new task.

As a user I want to be able to view a list of all tasks.

As a user I want to be able to mark a task complete.

As a user i want to be able to edit the tasks.

As a user I want to be able to delete a task.

As a user I want to be able to give tasks a priority level.

As a user I want to be able to filter tasks based on priority level.

As a user I want to be able to sort tasks based on completion.

As a user I want to be able to set due dates.

As a user I want to be able to show only one instance of a task and the details.
