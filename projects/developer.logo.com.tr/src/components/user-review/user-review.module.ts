import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserReviewRoutingModule } from './user-review-routing.module';
import { UserReviewComponent } from './user-review.component';

@NgModule({
  declarations: [UserReviewComponent],
  imports: [CommonModule, UserReviewRoutingModule],
  exports: [UserReviewComponent],
})
export class UserReviewModule {
}
