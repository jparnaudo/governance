import React from 'react'

import useFormatMessage from 'decentraland-gatsby/dist/hooks/useFormatMessage'
import TokenList from 'decentraland-gatsby/dist/utils/dom/TokenList'
import { Loader } from 'decentraland-ui/dist/components/Loader/Loader'

import Open from '../../Icon/Open'

import './DetailsSection.css'
import './SectionButton.css'

const forumIcon = require('../../../images/icons/forum.svg').default

export type ForumButtonProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  loading?: boolean
  disabled?: boolean
}

export default React.memo(function ForumButton({ loading, disabled, ...props }: ForumButtonProps) {
  const t = useFormatMessage()
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={TokenList.join([
        'DetailsSection',
        'SectionButton',
        'ForumButton',
        loading && 'SectionButton--loading',
        disabled && 'SectionButton--disabled',
        props.className,
      ])}
    >
      <Loader active={loading} size="small" />
      <img src={forumIcon} width="20" height="20" />
      <span>{t('page.proposal_detail.forum_button')}</span>
      <Open />
    </a>
  )
})
