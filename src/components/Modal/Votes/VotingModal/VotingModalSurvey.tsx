import React from 'react'

import Paragraph from 'decentraland-gatsby/dist/components/Text/Paragraph'
import useFormatMessage from 'decentraland-gatsby/dist/hooks/useFormatMessage'
import TokenList from 'decentraland-gatsby/dist/utils/dom/TokenList'
import { Button } from 'decentraland-ui/dist/components/Button/Button'
import { Header } from 'decentraland-ui/dist/components/Header/Header'
import { Modal } from 'decentraland-ui/dist/components/Modal/Modal'

import { Survey, SurveyTopicAttributes } from '../../../../entities/SurveyTopic/types'
import { formatChoice } from '../../../../modules/votes/utils'
import { ProposalPageContext, SelectedChoice } from '../../../../pages/proposal'
import SentimentSurvey from '../../../Proposal/SentimentSurvey/SentimentSurvey'
import '../../ProposalModal.css'

import './VotingModal.css'

interface VotingModalSurveyProps {
  survey: Survey
  setSurvey: React.Dispatch<React.SetStateAction<Survey>>
  surveyTopics: Pick<SurveyTopicAttributes, 'label' | 'topic_id'>[] | null
  isLoadingSurveyTopics: boolean
  onCastVote: (selectedChoice: SelectedChoice, survey?: Survey) => void
  castingVote: boolean
  proposalContext: ProposalPageContext
}

export function VotingModalSurvey({
  survey,
  setSurvey,
  surveyTopics,
  isLoadingSurveyTopics,
  onCastVote,
  castingVote,
  proposalContext,
}: VotingModalSurveyProps) {
  const t = useFormatMessage()
  const { selectedChoice, showVotingError, retryTimer } = proposalContext

  if (!selectedChoice.choiceIndex || !selectedChoice.choice) {
    return null
  }

  return (
    <Modal.Content>
      <div className="ProposalModal__Title">
        <Header>{t('modal.voting_modal_survey.title')}</Header>
        <Paragraph small>
          {t('modal.voting_modal_survey.selected_choice', { choice: formatChoice(selectedChoice.choice) })}
        </Paragraph>
      </div>
      <SentimentSurvey
        survey={survey}
        surveyTopics={surveyTopics}
        isLoadingSurveyTopics={isLoadingSurveyTopics}
        setSurvey={setSurvey}
      />
      <div className="VotingModal__Actions">
        <div
          className={TokenList.join([
            'VotingModal__ErrorNotice',
            !showVotingError && 'VotingModal__ErrorNotice--hidden',
          ])}
        >
          {t('modal.voting_modal_survey.voting_failed')}
        </div>
        <Button
          fluid
          primary
          onClick={() => onCastVote(selectedChoice, survey)}
          loading={castingVote}
          disabled={showVotingError}
          className="VotingModal__CastVote"
        >
          {showVotingError
            ? t('modal.voting_modal_survey.retry', { timer: retryTimer })
            : t('page.proposal_detail.cast_vote')}
        </Button>
      </div>
    </Modal.Content>
  )
}