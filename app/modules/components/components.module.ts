import {NgModule} from "@angular/core"
import {RouterModule} from "@angular/router"

import {CommonModule} from "@angular/common"
import {TranslateModule} from "@ngx-translate/core"

import {TgCommonModule} from '../../ts/modules/common/common.module';
import {TgBaseModule} from '../../ts/modules/base/base.module';

import {Avatar} from "./avatar/avatar.component"
import { BelongToEpics } from './belong-to-epics/belong-to-epics.component';
import { AvatarService } from './avatar/avatar.service';
import { ProjectLogoSmall } from './project-logo-small/project-logo-small.component';
import { ProjectLogoBig } from './project-logo-big/project-logo-big.component';
import { TermsOfServiceAndPrivacyPolicyNotice } from './terms-of-service-and-privacy-policy-notice/terms-of-service-and-privacy-policy-notice.component'
import { ProjectMenu } from './project-menu/project-menu.component'

@NgModule({
    imports: [
        CommonModule,
        TgCommonModule,
        TgBaseModule,
        RouterModule.forChild([]),
        TranslateModule.forChild({}),
    ],
    exports: [
        Avatar,
        BelongToEpics,
        TermsOfServiceAndPrivacyPolicyNotice,
        ProjectLogoSmall,
        ProjectLogoBig,
        ProjectMenu,
    ],
    declarations: [
        Avatar,
        BelongToEpics,
        TermsOfServiceAndPrivacyPolicyNotice,
        ProjectLogoSmall,
        ProjectLogoBig,
        ProjectMenu,
    ],
    providers: [
        AvatarService,
    ]
})
export class TgComponentsModule {}
