import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdAngularFormsModule } from '@rd/forms';

import { BrowserMobilePreviewModule } from '../../shared/index';
import { NewComponent } from './new.component';
import { LeadsComponent } from './recipients/leads/leads.component';
import { ResidentsComponent } from './recipients/residents/residents.component';
import { ReviewComponent } from './review/review.component';
import { MessageComponent } from './message/message.component';
import { RecipientsComponent } from './recipients/recipients.component';
import { ContainerComponent } from './shared/container/container.component';
import { CheckboxGroupDirective, CheckboxGroupOptionDirective } from './shared/recipient-filters/shared/checkbox-group.directive';
import { RecipientsFilteredListComponent } from './recipients/shared/recipients-filtered-list/recipients-filtered-list.component';
import { RecipientsPickListComponent } from './recipients/shared/recipients-pick-list/recipients-pick-list.component';
import { BulkEmailBuilderService } from './shared/bulk-email-builder.service';
import { DateRangeFilterComponent } from './shared/recipient-filters/shared/date-range-filter/date-range-filter.component';
import { StaticFilterComponent } from './shared/recipient-filters/shared/static-filter/static-filter.component';
import { FilterGroupDirective } from './shared/recipient-filters/filter-group.directive';
import { FilterDirective } from './shared/recipient-filters/shared/filter.directive';
import { FilterCompilerDirective } from './shared/recipient-filters/shared/filter-compiler.directive';
import { FilterComponent as ResidentFilterComponent } from './recipients/residents/filter/filter.component';
import { ListComponent as ResidentListComponent } from './recipients/residents/list/list.component';
import { CommunitySelectorComponent } from './shared/recipient-filters/shared/community-selector/community-selector.component';
import { LogoSelectComponent } from './message/logo-select/logo-select.component';
import { PhotoSelectComponent } from './message/photo-select/photo-select.component';
import { ButtonSelectorComponent } from './message/button-selector/button-selector.component';
import { ButtonOptionComponent } from './message/shared/button-option/button-option.component';
import { FooterSelectComponent } from './message/footer-select/footer-select.component';
import { MessageChangeFieldDirective } from './message/shared/message-change-field.directive';
import { FileRelationTypeSelectComponent } from './message/file-relation-type-select/file-relation-type-select.component';
import { ContactRangeFilterComponent } from './shared/recipient-filters/shared/contact-range-filter/contact-range-filter.component';
import { CallToActionSelectComponent } from './message/call-to-action-select/call-to-action-select.component';
import { CallToActionService } from './message/call-to-action-select/shared/call-to-action.service';
import { CallToActionSelectDropdownComponent } from './message/call-to-action-select/dropdown';
import { EmailFormModule } from '../../shared/email-form/email-form.module';
import { WizardModule } from '../../../wizard';
import { SessionModule } from '../../shared/session/session.module';
import { PickListModule } from '../../shared/pickList/pick-list.module';
import { PhotosModule } from '../../../photos/photos.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { ImgixModule } from '../../../imgix/imgix.module';


@NgModule({
    imports: [
        CommonModule,
        BrowserMobilePreviewModule,
        EmailFormModule,
        CommonModule,
        RdAngularFormsModule,
        WizardModule,
        SessionModule,
        PickListModule,
        PhotosModule,
        PipesModule,
        ImgixModule,
    ],
    declarations: [
        ContainerComponent,
        NewComponent,
        LeadsComponent,
        ResidentsComponent,
        ReviewComponent,
        MessageComponent,
        RecipientsComponent,
        CheckboxGroupDirective,
        CheckboxGroupOptionDirective,
        RecipientsFilteredListComponent,
        RecipientsPickListComponent,
        DateRangeFilterComponent,
        StaticFilterComponent,
        FilterGroupDirective,
        FilterDirective,
        FilterDirective,
        FilterCompilerDirective,
        ResidentFilterComponent,
        ResidentListComponent,
        CommunitySelectorComponent,
        LogoSelectComponent,
        PhotoSelectComponent,
        ButtonSelectorComponent,
        ButtonOptionComponent,
        FooterSelectComponent,
        MessageChangeFieldDirective,
        FileRelationTypeSelectComponent,
        ContactRangeFilterComponent,
        CallToActionSelectComponent,
        CallToActionSelectDropdownComponent,
    ],
    exports: [
        ContainerComponent,
        NewComponent,
        LeadsComponent,
        ResidentsComponent,
        ReviewComponent,
        MessageComponent,
        RecipientsComponent,
        CheckboxGroupDirective,
        CheckboxGroupOptionDirective,
        RecipientsFilteredListComponent,
        RecipientsPickListComponent,
        DateRangeFilterComponent,
        StaticFilterComponent,
        FilterGroupDirective,
        FilterDirective,
        FilterDirective,
        FilterCompilerDirective,
        ResidentFilterComponent,
        ResidentListComponent,
        CommunitySelectorComponent,
        LogoSelectComponent,
        PhotoSelectComponent,
        ButtonSelectorComponent,
        ButtonOptionComponent,
        FooterSelectComponent,
        MessageChangeFieldDirective,
        FileRelationTypeSelectComponent,
        CallToActionSelectComponent,
        CallToActionSelectDropdownComponent,

        BrowserMobilePreviewModule,
        EmailFormModule,
        // RdAngularCommonModule,
        // RdAngularFormsModule,
        WizardModule,
        PickListModule,
        PhotosModule,
        PipesModule,
        ImgixModule,
    ],
    providers: [
        BulkEmailBuilderService,
        CallToActionService,
    ],
    entryComponents: [
      CallToActionSelectComponent
    ]
})
export class BulkEmailNewModule { }
