

export const CHOICES = ['yes', 'no', 'maybe']
export const USER_ACCOUNT = '0x529a9021661a85b6bc51c07b3a451135848d0090'
export const DELEGATOR_1 = '0x521b0fef9cdcf250abaf8e7bc798cbe13fa98691'
export const DELEGATOR_2 = '0xd2d950cea649feef4d6111c18adbd9a37b3a9f92'
const DELEGATOR_3 = '0xd2d950cea649feef4d6111c18adbd9a37b3a9f93'
const NON_VOTER_DELEGATOR = '0xe58d9940a395d303e691dbe0676710d9c1401000'
export const ACCOUNT_DELEGATE = '0xd2d950cea649feef4d6111c18adbd9a37b3a9f80'
const RANDOM_ACCOUNT = '0xd2d950cea649feef4d6111c18adbd9a37b3a9f65'

export const CHOICE_1_VOTE = {
  choice: 1,
  vp: 2000,
  timestamp: 1650828044,
}

export const CHOICE_2_VOTE = {
  choice: 2,
  vp: 2000,
  timestamp: 1750828044,
}

export const OWN_VOTING_POWER = 111
export const DELEGATED_VOTING_POWER = 222
export const VOTE_DIFFERENCE =  3

export const VOTES_WITH_DELEGATORS = {
  [DELEGATOR_1]: CHOICE_1_VOTE,
  [DELEGATOR_2]: CHOICE_2_VOTE,
  [DELEGATOR_3]: CHOICE_1_VOTE,
  [RANDOM_ACCOUNT]: CHOICE_1_VOTE,
}

export const DELEGATORS = [DELEGATOR_1, DELEGATOR_2, DELEGATOR_3, NON_VOTER_DELEGATOR]
