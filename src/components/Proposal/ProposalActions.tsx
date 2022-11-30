import React from 'react'

import useFormatMessage from 'decentraland-gatsby/dist/hooks/useFormatMessage'
import { Button } from 'decentraland-ui/dist/components/Button/Button'

import { ProposalAttributes } from '../../entities/Proposal/types'
import { ProposalStatus } from '../../entities/Proposal/types'
import { ProposalPageState } from '../../pages/proposal'

type ProposalActionsProps = {
  isOwner: boolean
  isCommittee: boolean
  deleting: boolean
  updatingStatus: boolean
  proposal: ProposalAttributes | null
  updatePageState: (newState: Partial<ProposalPageState>) => void
}

export default function ProposalActions({
  proposal,
  isOwner,
  isCommittee,
  deleting,
  updatingStatus,
  updatePageState,
}: ProposalActionsProps) {
  const t = useFormatMessage()

  const showDeleteButton = isOwner || isCommittee
  const showEnactButton =
    isCommittee && (proposal?.status === ProposalStatus.Passed || proposal?.status === ProposalStatus.Enacted)
  const showStatusUpdateButton = isCommittee && proposal?.status === ProposalStatus.Finished

  return (
    <>
      {showDeleteButton && (
        <Button
          basic
          fluid
          loading={deleting}
          disabled={proposal?.status !== ProposalStatus.Pending && proposal?.status !== ProposalStatus.Active}
          onClick={() => updatePageState({ confirmDeletion: true })}
        >
          {t('page.proposal_detail.delete')}
        </Button>
      )}
      {showEnactButton && (
        <Button
          basic
          loading={updatingStatus}
          fluid
          onClick={() =>
            updatePageState({
              confirmStatusUpdate: ProposalStatus.Enacted,
            })
          }
        >
          {t(
            proposal?.status === ProposalStatus.Passed
              ? 'page.proposal_detail.enact'
              : 'page.proposal_detail.edit_enacted_data'
          )}
        </Button>
      )}
      {showStatusUpdateButton && (
        <>
          <Button
            basic
            loading={updatingStatus}
            fluid
            onClick={() => updatePageState({ confirmStatusUpdate: ProposalStatus.Passed })}
          >
            {t('page.proposal_detail.pass')}
          </Button>
          <Button
            basic
            loading={updatingStatus}
            fluid
            onClick={() =>
              updatePageState({
                confirmStatusUpdate: ProposalStatus.Rejected,
              })
            }
          >
            {t('page.proposal_detail.reject')}
          </Button>
        </>
      )}
    </>
  )
}
