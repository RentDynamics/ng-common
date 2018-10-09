import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommunityDisplayPipe } from './community-display.pipe';
import { CallCenterAgentDisplayPipe } from './call-center-agent-display.pipe';
import { FilterPipe } from './filter.pipe';
import { MomentCalendarFormatPipe } from './moment-calendar-format.pipe';
import { TextingFormatPipe } from './texting-format.pipe';
import { SubstringPipe } from './substring.pipe';
import { PhoneNumberPipe } from './phone-number.pipe';
import { MomentFormatPipe } from './moment-format.pipe';
import { MomentHumanizeDurationFormatPipe } from './moment-humanize-duration-format.pipe';
// import { UtcToLocalPipe } from './utc-to-local.pipe';
import { MomentFromNowFormatPipe } from './moment-from-now-format.pipe';
import { HeaderChunkPipe } from './header-chunk.pipe';
import { SumPipe } from './sum.pipe';
import { TelephonePipe } from './telephone.pipe';
import { SafeHtmlPipe, SafeStylesPipe } from './safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CommunityDisplayPipe,
    CallCenterAgentDisplayPipe,
    FilterPipe,
    MomentCalendarFormatPipe,
    TextingFormatPipe,
    SubstringPipe,
    PhoneNumberPipe,
    MomentFormatPipe,
    // UtcToLocalPipe,
    MomentHumanizeDurationFormatPipe,
    MomentFromNowFormatPipe,
    HeaderChunkPipe,
    SumPipe,
    TelephonePipe,
    SafeHtmlPipe,
    SafeStylesPipe
  ],
  exports: [
    CommunityDisplayPipe,
    CallCenterAgentDisplayPipe,
    FilterPipe,
    MomentCalendarFormatPipe,
    TextingFormatPipe,
    SubstringPipe,
    PhoneNumberPipe,
    MomentFormatPipe,
    // UtcToLocalPipe,
    MomentHumanizeDurationFormatPipe,
    MomentFromNowFormatPipe,
    HeaderChunkPipe,
    SumPipe,
    TelephonePipe,
    SafeHtmlPipe,
    SafeStylesPipe
  ]
})
export class PipesModule { }
