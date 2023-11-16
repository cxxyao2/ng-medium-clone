import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { authActions } from '../../store/actions'
import { AuthStateInterface } from '../../types/authState.interface'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import {
  selectIsSubmitting,
  selectValidationErrors
} from '../../store/reducers'
import { AuthService } from '../../services/auth.service'
import { combineLatest } from 'rxjs'
import { BackendErrorMessages } from 'src/app/shared/components/backendErrorMessages/backendErrorMessages.component'
import { LoginRequestInterface } from '../../types/loginRequest.interface'

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, BackendErrorMessages]
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  })

  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: AuthStateInterface }>,
    private authService: AuthService
  ) {}

  onSubmit() {
    console.log(this.form.getRawValue())
    const request: LoginRequestInterface = {
      user: this.form.getRawValue()
    }
    this.store.dispatch(authActions.login({ request }))
  }
}
