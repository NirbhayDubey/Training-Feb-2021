********************************************************************
                            routes
********************************************************************

---------------------------departments------------------------------

//GET http://localhost:3000/departments
//GET http://localhost:3000/departments/:id
//POST http://localhost:3000/departments
//PUT http://localhost:3000/departments/:id
//DELETE http://localhost:3000/departments/:id
//POST http://localhost:3000/departments/:id/permissions

---------------------------technologies------------------------------

-------tech-groups-------

//GET http://localhost:3000techgroups
//GET http://localhost:3000techgroups/:id
//POST http://localhost:3000techgroups
//PUT http://localhost:3000techgroups/:id
//DELETE http://localhost:3000techgroups/:id

-------techs-------

//GET http://localhost:3000/technologies
//GET http://localhost:3000/technologies/:id
//POST http://localhost:3000/technologies
//PUT http://localhost:3000/technologies/:id
//DELETE http://localhost:3000/technologies/:id


-------modules-------

//GET http://localhost:3000/modules
//GET http://localhost:3000/modules/:id
//POST http://localhost:3000/modules
//PUT http://localhost:3000/modules/:id
//DELETE http://localhost:3000/modules/:id

-------topics-------

//GET http://localhost:3000/modules/:moduleId/topics
//GET http://localhost:3000/modules/:moduleId/topics/:id
//POST http://localhost:3000/modules/:moduleId/topics
//POST http://localhost:3000/modules/:moduleId/topics/multiple
//PUT http://localhost:3000/modules/:moduleId/topics/:id
//DELETE http://localhost:3000/modules/:moduleId/topics/:id

-------contents-------

//GET http://localhost:3000/modules/:moduleId/topics/:topicId/contents
//GET http://localhost:3000/modules/:moduleId/topics/:topicId/contents/:id
//POST http://localhost:3000/modules/:moduleId/topics/:topicId/contents
//PUT http://localhost:3000/modules/:moduleId/topics/:topicId/contents/:id
//DELETE http://localhost:3000/modules/:moduleId/topics/:topicId/contents/:id


---------------------------plans------------------------------

-------plans-------

//GET http://localhost:3000/plans
//GET http://localhost:3000/plans/:id
//POST http://localhost:3000/plans
//PUT http://localhost:3000/plans/:id
//DELETE http://localhost:3000/plans/:id

-------days-------

//GET http://localhost:3000/plans/:planId/days
//GET http://localhost:3000/plans/:planId/days/:id
//POST http://localhost:3000/plans/:planId/days
//POST http://localhost:3000/plans/:planId/days/multiple
//PUT http://localhost:3000/plans/:planId/days/:id
//DELETE http://localhost:3000/plans/:planId/days/:id


-------contexts-------

//GET http://localhost:3000/plans/:planId/days/:dayId/contexts
//GET http://localhost:3000/plans/:planId/days/:dayId/contexts/:id
//POST http://localhost:3000/plans/:planId/days/:dayId/contexts
//PUT http://localhost:3000/plans/:planId/days/:dayId/contexts/:id
//DELETE http://localhost:3000/plans/:planId/days/:dayId/contexts/:id

---------------------------users------------------------------

//GET http://localhost:3000/users
//GET http://localhost:3000/users/me
//POST http://localhost:3000/users/:id/permissions
//POST http://localhost:3000/users
//POST http://localhost:3000/users/multiple
//PUT http://localhost:3000/users/:id
//DELETE http://localhost:3000/users/:id