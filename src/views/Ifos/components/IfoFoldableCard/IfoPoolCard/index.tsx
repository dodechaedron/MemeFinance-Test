import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Card, CardBody, CardHeader, Text, useTooltip, HelpIcon, Flex } from '@pancakeswap/uikit'
import { Ifo, PoolIds } from 'config/constants/types'
import { useProfile } from 'state/profile/hooks'
import { PublicIfoData3 } from 'views/Ifos/types'
import { EnableStatus } from '../types'
import IfoCardTokens from './IfoCardTokens'
import IfoCardActions from './IfoCardActions'
import IfoCardDetails from './IfoCardDetails'

interface IfoCardProps {

  publicIfoData: PublicIfoData3

}

interface CardConfig {
  [key: string]: {
    title: string
    variant: 'blue' | 'violet'
    tooltip: string
  }
}

const cardConfig: CardConfig = {
  [PoolIds.poolBasic]: {
    title: 'Basic Sale',
    variant: 'blue',
    tooltip: 'Every person can only commit a limited amount, but may expect a higher return per token committed.',
  },
  [PoolIds.poolUnlimited]: {
    title: 'Unlimited Sale',
    variant: 'violet',
    tooltip: 'No limits on the amount you can commit. Additional fee applies when claiming.',
  },
}

const SmallCard: React.FC<IfoCardProps> = ({ publicIfoData }) => {
  const { t } = useTranslation()
  

  return (
    <>
    
      <Card>
      
        <CardBody>
          <IfoCardTokens
            publicIfoData={publicIfoData}
          />
          <IfoCardActions
            publicIfoData={publicIfoData}
          />
          <IfoCardDetails  publicIfoData={publicIfoData} />
        </CardBody>
      </Card>
    </   >
  )
}

export default SmallCard
