Feature: As a professor
         I want to register students
         So that I can manage their learning goals

Scenario: Deleting student with registered CPF
Given I am at the students page
Given I can see "Mari" with CPF "683" in the students list
When I try to delete the student "Mari" with CPF "683"
Then I cannot see a student with CPF "683" in the students list