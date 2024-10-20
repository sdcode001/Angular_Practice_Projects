import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { canMatchGuardFun, resolveRouteTitle, resolveUserName } from "./users/user-tasks/user-tasks.util";
import { canDeactivateGuardFun } from "./tasks/new-task/new-task.util";


export const routes: Routes = [
    {
       path: '',
       component: NoTaskComponent,
       // using route title we can set title of browser tab for that route. Its value can be static or dynamic
       title: 'No Task Selected'
    },
    {
        path: 'users/:userId', // <your-domain>/users/<userId>
        component: UserTasksComponent,
        canMatch: [canMatchGuardFun],
        children: [
            {
                path: '', 
                redirectTo: 'tasks',
                pathMatch: 'prefix'
            },
            {
                path: 'tasks',
                component: TasksComponent
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent,
                canDeactivate: [canDeactivateGuardFun]
            }
        ],
        // This way we can avail static data from route to target component.
        data: {
            message: 'Hi Souvik',
        },
        // routes can also have dynamic data, using resolve function(type- ResolveFn) we can achieve that.
        // we can declere resolve function anywhere.
        resolve: {
            userName: resolveUserName
        },

        title: resolveRouteTitle,
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];