import * as React from 'react'
import * as CLM from '@conversationlearner/models'
import * as OF from 'office-ui-fabric-react'
import * as ToolTips from '../ToolTips/ToolTips'
import * as Util from '../../Utils/util'
import FormattedMessageId from '../FormattedMessageId'
import { FM } from '../../react-intl-messages'
import { injectIntl, InjectedIntlProps } from 'react-intl'

import HelpIcon from '../HelpIcon'

type ReceivedProps = {
    isOpen: boolean
    stubInfo: CLM.StubInfo
    onClickSubmit: (stubInfo: CLM.StubInfo) => void
    onClickCancel: () => void
}

type Props = ReceivedProps & InjectedIntlProps

const Component: React.FC<Props> = (props) => {
    const onClickSubmit = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement | OF.BaseButton | OF.Button | HTMLSpanElement, MouseEvent>) => {
        props.onClickSubmit(props.stubInfo)
    }
    const onClickCancel = props.onClickCancel
    const isSaveDisabled = false

    return <OF.Modal
        isOpen={props.isOpen}
        containerClassName="cl-modal cl-modal--medium"
    >
        <div className="cl-modal_header">
            <span className={OF.FontClassNames.xxLarge}>
                <FormattedMessageId id={FM.STUB_MODAL_TITLE} />
            </span>
        </div>
        <div>
            <div className="cl-stub-modal__name">
                <OF.TextField
                    className={OF.FontClassNames.mediumPlus}
                    readOnly={true}
                    value={props.stubInfo.name}
                />

                <div className={OF.FontClassNames.mediumPlus}>
                    <FormattedMessageId id={FM.STUB_MODAL_ENTITY_VALUES} />
                    <HelpIcon tipType={ToolTips.TipType.STUB_MODAL_ENTITY_VALUES} />
                </div>
            </div>
        </div>
        <div className="cl-modal_footer cl-modal-buttons cl-modal_footer--border">
            <div className="cl-modal-buttons_secondary">
            </div>
            <div className="cl-modal-buttons_primary">
                <OF.PrimaryButton
                    data-testid="teach-session-ok-button"
                    onClick={onClickSubmit}
                    disabled={isSaveDisabled}
                    ariaDescription={Util.formatMessageId(props.intl, FM.BUTTON_OK)}
                    text={Util.formatMessageId(props.intl, FM.BUTTON_OK)}
                    iconProps={{ iconName: 'Accept' }}
                />
                <OF.DefaultButton
                    data-testid="teach-session-cancel-button"
                    onClick={onClickCancel}
                    ariaDescription={Util.formatMessageId(props.intl, FM.BUTTON_CANCEL)}
                    text={Util.formatMessageId(props.intl, FM.BUTTON_CANCEL)}
                    iconProps={{ iconName: 'Cancel' }}
                />
            </div>
        </div>
    </OF.Modal>
}

export default injectIntl(Component)