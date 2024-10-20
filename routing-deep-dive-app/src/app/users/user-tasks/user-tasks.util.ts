import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanMatchFn, RedirectCommand, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { UsersService } from "../users.service";


// ResolveFn takes two parameter- ActivatedRouteSnapshot, RouteStateSnapshot
// ActivatedRouteSnapshot give the route snapshot everytime when that route is active
export const resolveUserName: ResolveFn<string> = (
    activatedRoute: ActivatedRouteSnapshot, 
    routeState: RouterStateSnapshot
) => {
    const usersService = inject(UsersService);
    const userName = usersService.users.find(u => u.id == activatedRoute.paramMap.get('userId'))?.name || '';
    return userName;
}


export const resolveRouteTitle: ResolveFn<string> = (
    activatedRoute: ActivatedRouteSnapshot, 
    routeState: RouterStateSnapshot
) => {
    return resolveUserName(activatedRoute, routeState) + '\'s Tasks';
}

export const canMatchGuardFun: CanMatchFn = (route, segments) => {
    // write logic for route access
    const router = inject(Router);
    const res = Math.random();
    if(res>0.5){
        return true;
    }
    return window.confirm("canMatchGuardFun found res<=0.5. Do you forcefully want to access /users/:userId/* route?");
    //return new RedirectCommand(router.parseUrl('/unauthorized'));
}