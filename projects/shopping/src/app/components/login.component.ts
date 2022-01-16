import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
    <div class="container">
    <div id="login">
    <h2>{{title}}</h2>
    <dl>
        <dt>User Name</dt>
        <dd><input type="text"></dd>
        <dt>Password</dt>
        <dd><input type="password"></dd>
    </dl>
    <button>Login</button>
    
</div>
</div>   
    `,
    styles: ['button{background-color:red; color:white}', '.container{display:flex; justify-content:center; align-items:center; height:400px}','#login{border:2px solid red; padding:10px}']
})
export class LoginComponent {
    title: string = 'Admin Login';
}