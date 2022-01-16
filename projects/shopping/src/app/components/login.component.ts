import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
    <div class="container">
    <div id="login">
    <h2><span class="bi bi-person"></span>{{title}}</h2>
    <dl>
        <dt>User Name</dt>
        <dd><input type="text" class="form-control"></dd>
        <dt>Password</dt>
        <dd><input type="password" class="form-control"></dd>
    </dl>
    <button class="btn btn-primary w-100">Login</button>
    
</div>
</div>   
    `,
    styles: ['button{background-color:red; color:white}', '.container{display:flex; justify-content:center; align-items:center; height:400px}','#login{border:2px solid red; padding:10px}']
})
export class LoginComponent {
    title: string = 'Admin Login';
}