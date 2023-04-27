import React from 'react'

import TokenList from 'decentraland-gatsby/dist/utils/dom/TokenList'

import useBadges from '../../hooks/useBadges'
import HelperText from '../Helper/HelperText'

import './Badges.css'

interface Props {
  address: string
}

const NO_IMAGE = require('../../images/no-image.png').default

const MAX_DISPLAYED_BADGES = 2
export default function Badges({ address }: Props) {
  const { badges, isLoadingBadges } = useBadges(address)

  const displayedBadges = badges?.slice(0, MAX_DISPLAYED_BADGES) ?? []
  const miniatureBadges = badges?.slice(MAX_DISPLAYED_BADGES) ?? []

  return (
    <div className="Badges__Container">
      {!isLoadingBadges &&
        displayedBadges.map((badge) => {
          return (
            <div className="Badge" key={`${badge.name}-id`}>
              <div className="Badge__Icon">
                <img src={badge.image} onError={(e) => (e.currentTarget.src = NO_IMAGE)} />
              </div>
              <div className="Badge__TitleContainer">
                <HelperText labelText={badge.name} tooltipText={badge.description} position="bottom center" />
              </div>
            </div>
          )
        })}
      {!!miniatureBadges && (
        <div className="Badge__ShowMore">
          {miniatureBadges.map((badge, index) => {
            return (
              <div
                className={TokenList.join([
                  'Badge__MiniIcon',
                  index === 0 && 'Badge__MiniIcon__Base',
                  index > 0 && 'Badge__MiniIcon__Overlapping',
                ])}
                key={`${badge.name}-id`}
                style={{ zIndex: index }}
              >
                <img src={badge.image} onError={(e) => (e.currentTarget.src = NO_IMAGE)} />
              </div>
            )
          })}
          <span className="Badge__Counter">{badges.length - MAX_DISPLAYED_BADGES} MORE</span>
        </div>
      )}
    </div>
  )
}
