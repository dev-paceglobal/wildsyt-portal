import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import {pathLocations} from '../../../../../utils/pathLocations'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem to={pathLocations.dashboard} />
    </>
  )
}
